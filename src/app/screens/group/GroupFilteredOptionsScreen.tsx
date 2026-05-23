import { useNavigate } from 'react-router';
import { ChevronLeft, Info, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupFilteredOptionsScreen() {
  const navigate = useNavigate();

  const filteredOptions = [
    {
      name: 'Beach viewpoint',
      reason: 'removed because outdoor-only and weather uncertain',
    },
    {
      name: 'Famous restaurant',
      reason: 'removed because too expensive for group budget',
    },
    {
      name: 'Museum across town',
      reason: 'removed because 40 min away',
    },
    {
      name: 'Cocktail bar',
      reason: 'removed because not suitable before dinner',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Filtered Out Options
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/board')} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Why options were filtered out</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="bg-amber-50 rounded-[20px] p-5 border border-amber-200/60 mb-6 flex flex-col items-center text-center">
          <Info className="w-8 h-8 text-amber-500 mb-3" />
          <p className="text-[14px] text-amber-900 font-medium leading-relaxed">
            These options were part of the group's saved ideas or nearby possibilities, but didn't fit the current context.
          </p>
        </div>

        <div className="space-y-3">
          {filteredOptions.map((opt, index) => (
            <div key={index} className="bg-white border border-slate-200/60 rounded-[16px] p-4 flex gap-3">
              <div className="mt-0.5 shrink-0">
                <XCircle className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-slate-800 mb-1">{opt.name}</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                  {opt.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0">
        <button
          onClick={() => navigate('/group/board')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98]"
        >
          Back to decision board
        </button>
      </div>
    </motion.div>
  );
}
