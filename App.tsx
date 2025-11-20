import React, { useState, useEffect, useMemo } from 'react';
import { questions as initialQuestions } from './services/questionData';
import { getStats, saveStat, clearStats } from './utils/stats';
import StatsModal from './components/StatsModal';
import { 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  BarChart3, 
  Check, 
  X, 
  HelpCircle,
  BookOpen 
} from 'lucide-react';
import { Question } from './types';

function App() {
  const [questionList, setQuestionList] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stats, setStats] = useState(getStats());
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  const currentQuestion = questionList[currentIndex];
  const isCorrect = selectedOption === currentQuestion.correctAnswerId;

  useEffect(() => {
    setStats(getStats());
  }, [isSubmitted, isStatsOpen]);

  const handleOptionSelect = (id: string) => {
    if (!isSubmitted) {
      setSelectedOption(id);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
      saveStat(currentQuestion.id, selectedOption === currentQuestion.correctAnswerId);
      setStats(getStats());
    }
  };

  const handleNext = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetState();
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetState();
      window.scrollTo(0, 0);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...initialQuestions].sort(() => Math.random() - 0.5);
    setQuestionList(shuffled);
    setCurrentIndex(0);
    resetState();
  };

  const resetState = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleResetStats = () => {
    clearStats();
    setStats({});
  };

  // Determine button styles based on state
  const getOptionStyle = (optionId: string) => {
    const baseStyle = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 relative overflow-hidden";
    
    if (!isSubmitted) {
      if (selectedOption === optionId) {
        return `${baseStyle} border-blue-600 bg-blue-50 text-blue-900 shadow-sm`;
      }
      return `${baseStyle} border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700`;
    }

    // Submitted state
    if (optionId === currentQuestion.correctAnswerId) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900 shadow-sm`;
    }
    
    if (selectedOption === optionId && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900 opacity-100`;
    }

    return `${baseStyle} border-slate-100 text-slate-400 opacity-60`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4 font-sans">
      
      {/* Header */}
      <header className="w-full max-w-3xl flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            Databricks Cert Prep
          </h1>
          <p className="text-sm text-slate-500 mt-1">Data Engineer Associate Exam</p>
        </div>
        <div className="flex gap-2">
           <button 
            onClick={handleShuffle}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition shadow-sm"
            title="Randomize Questions"
          >
            <Shuffle size={16} /> <span className="hidden sm:inline">Shuffle</span>
          </button>
          <button 
            onClick={() => setIsStatsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition shadow-sm"
          >
            <BarChart3 size={16} /> <span className="hidden sm:inline">Stats</span>
          </button>
        </div>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-blue-600 h-1.5 transition-all duration-500 ease-out" 
            style={{ width: `${((currentIndex + 1) / questionList.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          {/* Meta Info */}
          <div className="flex justify-between items-center mb-6">
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {currentQuestion.topic}
            </span>
            <span className="text-slate-400 text-sm font-medium">
              Question {currentIndex + 1} of {questionList.length}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 leading-relaxed">
            {currentQuestion.questionText}
          </h2>

          {/* Code Snippet (Optional) */}
          {currentQuestion.codeSnippet && (
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg mb-8 overflow-x-auto text-sm font-mono shadow-inner">
              <code>{currentQuestion.codeSnippet}</code>
            </pre>
          )}

          {/* Options Grid */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleOptionSelect(opt.id)}
                disabled={isSubmitted}
                className={getOptionStyle(opt.id)}
              >
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5
                  ${!isSubmitted && selectedOption === opt.id ? 'border-blue-600 text-blue-600' : 'border-slate-300 text-slate-400'}
                  ${isSubmitted && opt.id === currentQuestion.correctAnswerId ? 'border-green-600 bg-green-600 text-white border-transparent' : ''}
                  ${isSubmitted && selectedOption === opt.id && !isCorrect ? 'border-red-500 text-red-500' : ''}
                `}>
                  {isSubmitted && opt.id === currentQuestion.correctAnswerId ? <Check size={12} /> : 
                   isSubmitted && selectedOption === opt.id && !isCorrect ? <X size={12} /> : 
                   opt.id}
                </div>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            ))}
          </div>

          {/* Feedback Section */}
          {isSubmitted && (
            <div className={`p-6 rounded-xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-300 ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Check size={20} />
                  </div>
                ) : (
                   <div className="bg-red-100 p-2 rounded-full text-red-600">
                    <X size={20} />
                  </div>
                )}
                <h3 className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct Answer!' : 'Incorrect'}
                </h3>
              </div>
              <div className="pl-[3.25rem]">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold block text-sm text-slate-500 uppercase tracking-wide mb-1">Explanation</span>
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 text-slate-600 font-medium hover:text-blue-600 disabled:opacity-30 disabled:hover:text-slate-600 transition"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-8 py-2.5 rounded-lg font-bold shadow-md shadow-blue-200 disabled:shadow-none transition-all transform active:scale-95"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentIndex === questionList.length - 1}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-slate-200 transition-all flex items-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:shadow-none"
              >
                {currentIndex === questionList.length - 1 ? 'Finish' : 'Next Question'} <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Keyboard Shortcut Hint */}
      <div className="mt-8 text-slate-400 text-xs flex items-center gap-2">
        <HelpCircle size={14} />
        <span>Pro Tip: Use statistics to review commonly missed questions.</span>
      </div>

      <StatsModal 
        isOpen={isStatsOpen} 
        onClose={() => setIsStatsOpen(false)} 
        stats={stats} 
        questions={initialQuestions}
        onReset={handleResetStats}
      />
    </div>
  );
}

export default App;