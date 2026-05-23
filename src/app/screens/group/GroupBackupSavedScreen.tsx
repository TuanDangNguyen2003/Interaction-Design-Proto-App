import { useNavigate } from 'react-router';
import { BookmarkCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupBackupSavedScreen() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Backup Saved
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <BookmarkCheck className="w-10 h-10 text-emerald-500" strokeWidth={2.5} />
        </div>
        <h1 className="text-[28px] font-extrabold text-slate-800 tracking-tight mb-3">
          Added to backup
        </h1>
        <p className="text-[16px] text-slate-500 font-medium leading-relaxed max-w-[250px]">
          Covered Food Market is saved as a backup.
        </p>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-3">
        <button
          onClick={() => navigate('/group/board')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98]"
        >
          Return to board
        </button>
        <button
          onClick={() => navigate('/group/vote')}
          className="w-full bg-white border border-slate-200 text-slate-700 rounded-2xl py-3.5 font-bold text-[15px] hover:bg-slate-50 transition-all active:scale-[0.98]"
        >
          Choose this instead
        </button>
      </div>
    </motion.div>
  );
}
