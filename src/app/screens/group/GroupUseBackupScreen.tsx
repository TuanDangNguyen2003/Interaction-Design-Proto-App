import { useNavigate } from 'react-router';
import { ChevronLeft, ArrowRightLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupUseBackupScreen() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Use Backup
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Switch to backup?</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <ArrowRightLeft className="w-8 h-8 text-amber-500" />
          </div>
        </div>

        <p className="text-[16px] text-slate-700 font-medium text-center mb-8 leading-relaxed px-4">
          If Covered Food Market is too crowded, Indoor Arcade Café is ready.
        </p>

        <div className="bg-white border-2 border-primary/20 rounded-[20px] p-5 shadow-sm">
          <div className="mb-3">
            <div className="inline-flex px-2.5 py-1 bg-primary/10 rounded-lg text-[11px] text-primary font-bold uppercase tracking-wider mb-2.5">
              Backup Option
            </div>
            <h2 className="text-[20px] font-extrabold text-slate-800">Indoor Arcade Café</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {['12 min walk', 'Indoor', 'Low effort', '$'].map((tag, i) => (
              <span key={i} className="bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg text-[12px] font-bold text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-3">
        <button
          onClick={() => navigate('/group/confirmation', { state: { usedBackup: true } })}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Use backup
        </button>
        <button
          onClick={() => navigate('/group/confirmation')}
          className="w-full bg-white border border-slate-200 text-slate-700 rounded-2xl py-3.5 font-bold text-[15px] hover:bg-slate-50 transition-all active:scale-[0.98]"
        >
          Keep original
        </button>
      </div>
    </motion.div>
  );
}
