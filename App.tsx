
import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  RotateCcw,
  Filter,
  Maximize2,
  ImageOff
} from 'lucide-react';
import { Question } from './types';

function App() {
  const [questionList, setQuestionList] = useState<Question[]>(() => {
    const session = getSession();
    if (session && session.questionOrder.length > 0) {
      return restoreQuestionList(initialQuestions, session.questionOrder);
    }
    return initialQuestions;
  });

  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics");
  
  const topics = useMemo(() => {
    const uniqueTopics = Array.from(new Set(initialQuestions.map(q => q.topic)));
    return ["All Topics", ...uniqueTopics.sort()];
  }, []);

  const filteredQuestions = useMemo(() => {
    if (selectedTopic === "All Topics") return questionList;
    return questionList.filter(q => q.topic === selectedTopic);
  }, [questionList, selectedTopic]);

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
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isFirstRender = useRef(true);

  const safeIndex = Math.min(currentIndex, Math.max(0, filteredQuestions.length - 1));
  const currentQuestion = filteredQuestions[safeIndex];
  const isCorrect = selectedOption === currentQuestion?.correctAnswerId;

  // Resolve image source from multiple possible property names
  const questionImage = currentQuestion?.image_url || currentQuestion?.imageUrl;

  useEffect(() => {
    setStats(getStats());
  }, [isSubmitted, isStatsOpen]);

  useEffect(() => {
    setImageError(false); // Reset image error when question changes
  }, [currentIndex, selectedTopic]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    saveSession({
      questionOrder: questionList.map(q => q.id),
      currentIndex: safeIndex,
      selectedOption,
      isSubmitted
    });
  }, [questionList, safeIndex, selectedOption, isSubmitted]);

  const handleOptionSelect = (id: string) => {
    if (!isSubmitted) {
      setSelectedOption(id);
    }
  };

  const handleSubmit = () => {
    if (selectedOption && currentQuestion) {
      setIsSubmitted(true);
      saveStat(currentQuestion.id, selectedOption === currentQuestion.correctAnswerId);
      setStats(getStats());
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetStateForNewQuestion();
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetStateForNewQuestion();
      window.scrollTo(0, 0);
    }
  };

  const handleShuffle = () => {
    if(confirm("This will randomize ALL questions and reset your position. Continue?")) {
      const shuffled = [...initialQuestions].sort(() => Math.random() - 0.5);
      setQuestionList(shuffled);
      setCurrentIndex(0);
      setSelectedTopic("All Topics");
      resetStateForNewQuestion();
    }
  };
  
  const handleRestart = () => {
    if(confirm("Restart from Question 1?")) {
        setCurrentIndex(0);
        resetStateForNewQuestion();
    }
  };

  const resetStateForNewQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    resetStateForNewQuestion();
  };

  const handleResetStats = () => {
    clearStats();
    setStats({});
  };

  const getOptionStyle = (optionId: string) => {
    const baseStyle = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 relative overflow-hidden group";
    
    if (!isSubmitted) {
      if (selectedOption === optionId) {
        return `${baseStyle} border-green-500 bg-green-500/10 text-green-100 ring-4 ring-green-500/10`;
      }
      return `${baseStyle} border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 text-zinc-300`;
    }

    if (optionId === currentQuestion?.correctAnswerId) {
      return `${baseStyle} border-emerald-500 bg-emerald-500/10 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.15)]`;
    }
    
    if (selectedOption === optionId && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-500/10 text-red-100 ring-4 ring-red-500/10`;
    }

    return `${baseStyle} border-zinc-900 text-zinc-600 opacity-40 bg-transparent`;
  };

  if (!currentQuestion) {
     return (
       <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
         <p className="text-zinc-500 mb-4 font-medium">No questions found for this selection.</p>
         <button onClick={() => setSelectedTopic("All Topics")} className="text-green-500 font-bold underline">Show all questions</button>
       </div>
     );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-6 px-4 font-sans text-zinc-100">
      
      <header className="w-full max-w-4xl flex flex-col gap-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-xl">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight uppercase">Databricks Cert Prep</h1>
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                <span>Data Engineer Associate</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="text-green-500">{initialQuestions.length} Questions</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 no-scrollbar">
            <button onClick={handleRestart} className="nav-btn" title="Restart"><RotateCcw size={16} /> <span className="hidden sm:inline">Restart</span></button>
            <button onClick={handleShuffle} className="nav-btn" title="Shuffle"><Shuffle size={16} /> <span className="hidden sm:inline">Shuffle</span></button>
            <button onClick={() => setIsStatsOpen(true)} className="nav-btn !border-green-500/30 text-green-400"><BarChart3 size={16} /> <span className="hidden sm:inline">Analytics</span></button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">
            <Filter size={10} /> Filter by Topic
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => handleTopicChange(topic)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border-2 ${
                  selectedTopic === topic 
                    ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-900/30' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-800/50 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <div className="flex-1 flex flex-col border-r border-zinc-800/50">
          <div className="w-full bg-zinc-950 h-1 relative">
            <div 
              className="bg-green-500 h-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(34,197,94,0.6)]" 
              style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="p-8 md:p-10 flex-1 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                {currentQuestion.topic}
              </span>
              <span className="text-zinc-500 text-xs font-bold tabular-nums">
                Q {currentIndex + 1} / {filteredQuestions.length}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-[1.4] tracking-tight">
              {currentQuestion.questionText}
            </h2>

            {currentQuestion.codeSnippet && (
              <div className="group relative">
                <pre className="bg-zinc-950 text-green-400/90 p-6 rounded-2xl mb-8 overflow-x-auto text-sm font-mono border border-zinc-800/50 shadow-inner leading-relaxed">
                  <code>{currentQuestion.codeSnippet}</code>
                </pre>
              </div>
            )}

            {questionImage && (
              <div className="mb-8 relative group cursor-zoom-in" onClick={() => !imageError && setIsImageZoomed(true)}>
                <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-4 flex flex-col items-center justify-center shadow-2xl min-h-[100px]">
                  {!imageError ? (
                    <>
                      <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                         <Maximize2 className="text-white" />
                      </div>
                      <img 
                        src={questionImage} 
                        alt="Question visual aid" 
                        className="max-h-[350px] object-contain w-auto rounded-lg transition-transform group-hover:scale-[1.01]"
                        loading="eager"
                        onError={() => setImageError(true)}
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-zinc-600 py-8">
                      <ImageOff size={40} strokeWidth={1.5} />
                      <p className="text-xs font-bold uppercase tracking-widest">Image not found</p>
                      <p className="text-[10px] font-medium opacity-50">{questionImage}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4 mb-10">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionSelect(opt.id)}
                  disabled={isSubmitted}
                  className={getOptionStyle(opt.id)}
                >
                  <div className={`
                    w-7 h-7 rounded-xl border-2 flex items-center justify-center text-[11px] font-black flex-shrink-0 transition-all
                    ${!isSubmitted && selectedOption === opt.id ? 'border-green-500 text-white bg-green-500' : 'border-zinc-700 text-zinc-500 bg-zinc-950'}
                    ${isSubmitted && opt.id === currentQuestion.correctAnswerId ? 'border-emerald-500 bg-emerald-500 text-white shadow-lg' : ''}
                    ${isSubmitted && selectedOption === opt.id && !isCorrect ? 'border-red-500 bg-red-500 text-white' : ''}
                  `}>
                    {isSubmitted && opt.id === currentQuestion.correctAnswerId ? <Check size={14} /> : 
                     isSubmitted && selectedOption === opt.id && !isCorrect ? <X size={14} /> : 
                     opt.id}
                  </div>
                  <span className="text-[15px] font-medium leading-normal">{opt.text}</span>
                </button>
              ))}
            </div>

            {isSubmitted && (
              <div className={`p-8 rounded-[2rem] animate-in fade-in slide-in-from-bottom-8 duration-500 mb-6 ${isCorrect ? 'bg-emerald-500/5 border-2 border-emerald-500/20 shadow-emerald-900/10 shadow-2xl' : 'bg-red-500/5 border-2 border-red-500/20 shadow-red-900/10 shadow-2xl'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isCorrect ? <Check size={24} /> : <X size={24} />}
                  </div>
                  <div>
                    <h3 className={`font-black text-xl ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isCorrect ? 'MASTERED' : 'NOT QUITE'}
                    </h3>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Knowledge Check</p>
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-zinc-800">
                  <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-zinc-800/50 bg-zinc-950/20 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-6 py-3 text-zinc-500 font-bold text-sm hover:text-white disabled:opacity-0 transition-all uppercase tracking-widest"
            >
              <ChevronLeft size={18} /> Prev
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="bg-green-600 hover:bg-green-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-green-900/20 transition-all active:scale-95"
              >
                Check
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="bg-white hover:bg-zinc-200 text-black px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-white/10 transition-all flex items-center gap-3 active:scale-95 disabled:opacity-0"
              >
                {currentIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next'} <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </main>

      <div className="mt-8 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3">
        <div className="w-8 h-[1px] bg-zinc-800"></div>
        <HelpCircle size={14} className="text-zinc-700" />
        <span>Progress is saved automatically in your browser</span>
        <div className="w-8 h-[1px] bg-zinc-800"></div>
      </div>

      {isImageZoomed && questionImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsImageZoomed(false)}
        >
          <img 
            src={questionImage} 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-200"
            alt="Zoomed view"
          />
          <button className="absolute top-8 right-8 text-white p-4 hover:bg-zinc-800 rounded-full">
            <X size={32} />
          </button>
        </div>
      )}

      <StatsModal 
        isOpen={isStatsOpen} 
        onClose={() => setIsStatsOpen(false)} 
        stats={stats} 
        questions={initialQuestions}
        onReset={handleResetStats}
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .nav-btn {
          @apply flex items-center gap-2 px-4 py-2 text-xs font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white transition-all uppercase tracking-wider;
        }
      `}</style>
    </div>
  );
}

export default App;
