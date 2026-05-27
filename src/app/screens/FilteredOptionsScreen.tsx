import { useNavigate } from 'react-router';
import { ChevronLeft, Info, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FilteredOptionsScreen() {
  const navigate = useNavigate();

  const filteredOptions = [
    {
      name: 'Hilltop viewpoint',
      reason: 'Removed because it needs too much walking before the train.',
    },
    {
      name: 'Museum across town',
      reason: 'Removed because it is 35 minutes away from Lyon Perrache.',
    },
    {
      name: 'Popular brunch queue',
      reason: 'Removed because the waiting time is too uncertain.',
    },
    {
      name: 'Long market tour',
      reason: 'Removed because it does not leave a comfortable train buffer.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/board')} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Go back">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Why options were filtered out</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="bg-amber-50 rounded-[20px] p-5 border border-amber-200/60 mb-6 flex flex-col items-center text-center">
          <Info className="w-8 h-8 text-amber-500 mb-3" />
          <p className="text-[14px] text-amber-900 font-medium leading-relaxed">
            These places were available ideas, but they did not fit the two-hour train window and low-effort context.
          </p>
        </div>

        <div className="space-y-3">
          {filteredOptions.map((option) => (
            <div key={option.name} className="bg-white border border-slate-200/60 rounded-[16px] p-4 flex gap-3">
              <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[15px] font-bold text-slate-800 mb-1">{option.name}</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{option.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0">
        <button
          onClick={() => navigate('/board')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98]"
        >
          Back to decision board
        </button>
      </div>
    </motion.div>
  );
}
