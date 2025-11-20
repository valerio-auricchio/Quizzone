import React from 'react';
import { Question, StatsDB, QuestionStat } from '../types';
import { X, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

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

  // Find questions with high error rate (> 30% wrong)
  const troubleQuestions = questions.filter(q => {
    const s = stats[q.id];
    return s && s.attempts > 0 && (s.incorrect / s.attempts) > 0.3; // 30% error rate threshold
  }).map(q => ({
    ...q,
    stat: stats[q.id]
  })).sort((a, b) => b.stat.incorrect - a.stat.incorrect);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
          <h2 className="text-2xl font-bold text-white">Performance Statistics</h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition">
            <X size={24} className="text-zinc-400" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-900/10 border border-green-900/20 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-400">{totalAnswered}</div>
              <div className="text-sm text-green-400/80 font-medium uppercase tracking-wide">Questions Attempted</div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-zinc-300">{totalAttempts}</div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wide">Total Attempts</div>
            </div>
            <div className={`p-4 rounded-xl text-center border ${accuracy >= 70 ? 'bg-emerald-900/20 border-emerald-900/30' : 'bg-orange-900/20 border-orange-900/30'}`}>
              <div className={`text-3xl font-bold ${accuracy >= 70 ? 'text-emerald-400' : 'text-orange-400'}`}>
                {accuracy}%
              </div>
              <div className={`text-sm font-medium uppercase tracking-wide ${accuracy >= 70 ? 'text-emerald-400/80' : 'text-orange-400/80'}`}>
                Accuracy
              </div>
            </div>
          </div>

          {/* Trouble Spots */}
          <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            Needs Improvement
          </h3>
          
          {troubleQuestions.length === 0 ? (
            <div className="text-center py-8 text-zinc-500 bg-zinc-800/30 rounded-xl border border-dashed border-zinc-800">
              <CheckCircle size={40} className="mx-auto mb-2 text-green-500/50" />
              <p>No major trouble spots detected yet. Keep practicing!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {troubleQuestions.map(q => (
                <div key={q.id} className="border border-zinc-800 bg-zinc-900 rounded-lg p-4 hover:border-amber-500/30 transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-zinc-800 text-zinc-400 text-xs font-bold px-2 py-1 rounded border border-zinc-700">Q{q.id}</span>
                    <span className="text-xs font-medium text-red-400 bg-red-900/20 px-2 py-1 rounded">
                      {q.stat.incorrect} Errors
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 font-medium line-clamp-2">{q.questionText}</p>
                  <div className="mt-2 text-xs text-zinc-500">
                    Accuracy: {Math.round((1 - (q.stat.incorrect / q.stat.attempts)) * 100)}% over {q.stat.attempts} attempts
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex justify-between items-center">
            <button 
              onClick={() => {
                if(confirm('Are you sure you want to reset all progress?')) {
                   onReset();
                   onClose();
                }
              }}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg hover:bg-red-900/10 transition text-sm font-medium"
            >
              <RefreshCw size={16} /> Reset History
            </button>
            <button 
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition shadow-lg shadow-green-900/20"
            >
              Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;