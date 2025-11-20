import React, { useState, useEffect, useRef } from 'react';
import { questions as initialQuestions } from './services/questionData';
import { getStats, saveStat, clearStats } from './utils/stats';
import { getSession, saveSession, restoreQuestionList } from './utils/session';
import StatsModal from './components/StatsModal';
import { 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  BarChart3, 
  Check, 
  X, 
  HelpCircle,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { Question } from './types';

function App() {
  // Initialize state from LocalStorage if available
  const [questionList, setQuestionList] = useState<Question[]>(() => {
    const session = getSession();
    if (session && session.questionOrder.length > 0) {
      return restoreQuestionList(initialQuestions, session.questionOrder);
    }
    return initialQuestions;
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    const session = getSession();
    return session ? session.currentIndex : 0;
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(() => {
    const session = getSession();
    return session ? session.selectedOption : null;
  });

  const [isSubmitted, setIsSubmitted] = useState(() => {
    const session = getSession();
    return session ? session.isSubmitted : false;
  });

  const [stats, setStats] = useState(getStats());
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  // Used to prevent saving on initial render before state creates
  const isFirstRender = useRef(true);

  const currentQuestion = questionList[currentIndex] || initialQuestions[0]; // Fallback protection
  const isCorrect = selectedOption === currentQuestion.correctAnswerId;

  // Update stats when modal is opened/toggled
  useEffect(() => {
    setStats(getStats());
  }, [isSubmitted, isStatsOpen]);

  // Persist Session whenever state changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    saveSession({
      questionOrder: questionList.map(q => q.id),
      currentIndex,
      selectedOption,
      isSubmitted
    });
  }, [questionList, currentIndex, selectedOption, isSubmitted]);

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
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      resetStateForNewQuestion();
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      // When going back, we actually want to reset the state for that question
      // In a more complex app we might save state per question, but for drill mode,
      // resetting allows re-attempting or just viewing blank. 
      // *Design Choice*: For this app, we reset so user can re-read clean.
      resetStateForNewQuestion();
      window.scrollTo(0, 0);
    }
  };

  const handleShuffle = () => {
    if(confirm("This will randomize the question order and reset your current position. Continue?")) {
      const shuffled = [...initialQuestions].sort(() => Math.random() - 0.5);
      setQuestionList(shuffled);
      setCurrentIndex(0);
      resetStateForNewQuestion();
    }
  };
  
  const handleRestart = () => {
    if(confirm("Restart from Question 1? (Order will be preserved)")) {
        setCurrentIndex(0);
        resetStateForNewQuestion();
    }
  }

  const resetStateForNewQuestion = () => {
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
        return `${baseStyle} border-blue-500 bg-blue-900/20 text-blue-100 shadow-sm`;
      }
      return `${baseStyle} border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 text-slate-300`;
    }

    // Submitted state
    if (optionId === currentQuestion.correctAnswerId) {
      return `${baseStyle} border-green-500 bg-green-900/20 text-green-100 shadow-sm`;
    }
    
    if (selectedOption === optionId && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-900/20 text-red-100 opacity-100`;
    }

    return `${baseStyle} border-slate-800 text-slate-500 opacity-50`;
  };

  if (!currentQuestion) return <div className="p-10 text-center text-slate-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center py-8 px-4 font-sans text-slate-100">
      
      {/* Header */}
      <header className="w-full max-w-3xl flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-blue-500" />
            Databricks Cert Prep
          </h1>
          <p className="text-sm text-slate-400 mt-1">Data Engineer Associate Exam</p>
        </div>
        <div className="flex gap-2">
           <button 
            onClick={handleRestart}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition shadow-sm"
            title="Restart"
          >
            <RotateCcw size={16} /> <span className="hidden sm:inline">Restart</span>
          </button>
           <button 
            onClick={handleShuffle}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition shadow-sm"
            title="Randomize Questions"
          >
            <Shuffle size={16} /> <span className="hidden sm:inline">Shuffle</span>
          </button>
          <button 
            onClick={() => setIsStatsOpen(true)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition shadow-sm"
          >
            <BarChart3 size={16} /> <span className="hidden sm:inline">Stats</span>
          </button>
        </div>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-3xl bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5">
          <div 
            className="bg-blue-500 h-1.5 transition-all duration-500 ease-out" 
            style={{ width: `${((currentIndex + 1) / questionList.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          {/* Meta Info */}
          <div className="flex justify-between items-center mb-6">
            <span className="bg-slate-800 text-slate-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700">
              {currentQuestion.topic}
            </span>
            <span className="text-slate-400 text-sm font-medium">
              Question {currentIndex + 1} of {questionList.length}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
            {currentQuestion.questionText}
          </h2>

          {/* Code Snippet (Optional) */}
          {currentQuestion.codeSnippet && (
            <pre className="bg-black text-slate-300 p-4 rounded-lg mb-8 overflow-x-auto text-sm font-mono border border-slate-800">
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
                  ${!isSubmitted && selectedOption === opt.id ? 'border-blue-500 text-blue-400' : 'border-slate-600 text-slate-500'}
                  ${isSubmitted && opt.id === currentQuestion.correctAnswerId ? 'border-green-500 bg-green-600 text-white border-transparent' : ''}
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
            <div className={`p-6 rounded-xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-300 ${isCorrect ? 'bg-green-900/10 border border-green-900/30' : 'bg-red-900/10 border border-red-900/30'}`}>
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <div className="bg-green-900/30 p-2 rounded-full text-green-400">
                    <Check size={20} />
                  </div>
                ) : (
                   <div className="bg-red-900/30 p-2 rounded-full text-red-400">
                    <X size={20} />
                  </div>
                )}
                <h3 className={`font-bold text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? 'Correct Answer!' : 'Incorrect'}
                </h3>
              </div>
              <div className="pl-[3.25rem]">
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-semibold block text-sm text-slate-500 uppercase tracking-wide mb-1">Explanation</span>
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 text-slate-400 font-medium hover:text-blue-400 disabled:opacity-30 disabled:hover:text-slate-400 transition"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-600 text-white px-8 py-2.5 rounded-lg font-bold shadow-md shadow-blue-900/20 disabled:shadow-none transition-all transform active:scale-95"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentIndex === questionList.length - 1}
                className="bg-white hover:bg-slate-200 text-slate-900 px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-slate-900/50 transition-all flex items-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:shadow-none"
              >
                {currentIndex === questionList.length - 1 ? 'Finish' : 'Next Question'} <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Keyboard Shortcut Hint */}
      <div className="mt-8 text-slate-500 text-xs flex items-center gap-2">
        <HelpCircle size={14} />
        <span>Pro Tip: Use statistics to review commonly missed questions. Progress is saved automatically.</span>
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