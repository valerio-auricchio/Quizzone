
import React from 'react';
import { Question, StatsDB, QuestionStat } from '../types';
import { X, AlertTriangle, CheckCircle, RefreshCw, Target, TrendingUp } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  stats: StatsDB;
  onReset: () => void;
}

const StatsModal: React.FC<Props> = ({ isOpen, onClose, questions, stats, onReset }) => {
  if (!isOpen) return null;

  const totalAnswered = Object.keys(stats).length;
  const totalAttempts = (Object.values(stats) as QuestionStat[]).reduce((acc, s) => acc + s.attempts, 0);
  const totalIncorrect = (Object.values(stats) as QuestionStat[]).reduce((acc, s) => acc + s.incorrect, 0);
  const accuracy = totalAttempts > 0 
    ? Math.round(((totalAttempts - totalIncorrect) / totalAttempts) * 100) 
    : 0;

  // Calculate stats by topic
  const topicStats: { [key: string]: { total: number; incorrect: number; attempts: number } } = {};
  
  questions.forEach(q => {
    const s = stats[q.id];
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, incorrect: 0, attempts: 0 };
    }
    if (s) {
      topicStats[q.topic].attempts += s.attempts;
      topicStats[q.topic].incorrect += s.incorrect;
    }
  });

  const troubleQuestions = questions.filter(q => {
    const s = stats[q.id];
    return s && s.attempts > 0 && (s.incorrect / s.attempts) > 0.3;
  }).map(q => ({
    ...q,
    stat: stats[q.id]
  })).sort((a, b) => b.stat.incorrect - a.stat.incorrect);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="text-green-500" />
              Performance Dashboard
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition text-zinc-400">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          
          {/* Global Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-zinc-800/40 border border-zinc-700/50 p-5 rounded-2xl">
              <div className="text-3xl font-bold text-white">{totalAnswered}</div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Questions Seen</div>
            </div>
            <div className="bg-zinc-800/40 border border-zinc-700/50 p-5 rounded-2xl">
              <div className="text-3xl font-bold text-white">{totalAttempts}</div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Total Attempts</div>
            </div>
            <div className={`p-5 rounded-2xl border ${accuracy >= 70 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-orange-500/10 border-orange-500/20'}`}>
              <div className={`text-3xl font-bold ${accuracy >= 70 ? 'text-emerald-400' : 'text-orange-400'}`}>
                {accuracy}%
              </div>
              <div className={`text-xs font-bold uppercase tracking-widest mt-1 ${accuracy >= 70 ? 'text-emerald-400/70' : 'text-orange-400/70'}`}>
                Overall Accuracy
              </div>
            </div>
          </div>

          {/* Stats by Topic */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Target size={20} className="text-blue-400" />
              Accuracy by Topic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(topicStats).filter(([_, data]) => data.attempts > 0).map(([topic, data]) => {
                const topicAccuracy = Math.round(((data.attempts - data.incorrect) / data.attempts) * 100);
                return (
                  <div key={topic} className="bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-zinc-300 truncate mr-2">{topic}</span>
                      <span className={`text-sm font-bold ${topicAccuracy >= 70 ? 'text-emerald-400' : 'text-orange-400'}`}>
                        {topicAccuracy}%
                      </span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${topicAccuracy >= 70 ? 'bg-emerald-500' : 'bg-orange-500'}`}
                        style={{ width: `${topicAccuracy}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">
                      {data.attempts - data.incorrect} Correct / {data.attempts} Attempts
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trouble Spots */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-amber-500" />
              Priority Review Questions
            </h3>
            
            {troubleQuestions.length === 0 ? (
              <div className="text-center py-10 text-zinc-500 bg-zinc-950/30 rounded-2xl border border-dashed border-zinc-800">
                <CheckCircle size={40} className="mx-auto mb-3 text-emerald-500/30" />
                <p className="font-medium">No significant weak spots found yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {troubleQuestions.slice(0, 5).map(q => (
                  <div key={q.id} className="border border-zinc-800 bg-zinc-950/40 rounded-xl p-4 hover:border-zinc-700 transition">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">ID: {q.id}</span>
                      <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                        {Math.round((q.stat.incorrect / q.stat.attempts) * 100)}% Error Rate
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 line-clamp-2 italic">"{q.questionText}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <button 
              onClick={() => {
                if(confirm('This will wipe all your practice history. Are you sure?')) {
                   onReset();
                   onClose();
                }
              }}
              className="flex items-center gap-2 text-zinc-500 hover:text-red-400 transition text-sm font-bold uppercase tracking-widest"
            >
              <RefreshCw size={16} /> Reset History
            </button>
            <button 
              onClick={onClose}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-10 py-3 rounded-xl font-bold transition shadow-xl shadow-green-900/20 active:scale-95"
            >
              Continue Practice
            </button>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;
