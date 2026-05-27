import { useNavigate } from 'react-router';
import { ChevronLeft, CheckCircle2, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function BackupSelectionScreen() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Go back">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Backup option</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-2">
            Plans can change.
          </h1>
          <p className="text-[15px] text-slate-500 font-medium">
            Keep an easy alternative ready just in case.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-emerald-200/60 rounded-[20px] p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
            <div className="flex items-start gap-3 mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Main choice</p>
                <h2 className="text-[18px] font-extrabold text-slate-800">Riverside Café Walk</h2>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 ml-8">
              <p className="text-[13px] text-slate-600 font-medium">
                <span className="font-bold text-slate-800">Reason:</span> Closest, covered, and train-safe.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center border-4 border-slate-50">
              <Navigation className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          <div className="bg-white border-2 border-primary/20 rounded-[20px] p-5 shadow-sm relative">
            <div className="mb-3">
              <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-0.5">Suggested backup</p>
              <h2 className="text-[18px] font-extrabold text-slate-800">Les Halles Food Stop</h2>
            </div>
            <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
              <p className="text-[13px] text-slate-700 font-medium leading-relaxed">
                <span className="font-bold text-primary">Reason:</span> Covered seating and a simple food stop if the riverside cafe is full.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-3">
        <button
          onClick={() => navigate('/confirmation')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Save backup
        </button>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full bg-white border border-slate-200 text-slate-700 rounded-2xl py-3.5 font-bold text-[15px] cursor-default"
        >
          Skip backup
        </button>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full text-slate-500 text-[14px] font-bold py-1.5 cursor-default"
        >
          Change main choice
        </button>
      </div>
    </motion.div>
  );
}
