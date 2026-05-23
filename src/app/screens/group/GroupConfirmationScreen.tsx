import { useNavigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { MapPin, Navigation, Share, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export default function GroupConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const isBackup = location.state?.usedBackup;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#0ea5e9', '#10b981', '#6366f1']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#0ea5e9', '#10b981', '#6366f1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Vote', active: true },
    { number: 5, label: 'Confirm', active: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Confirmation
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <div className="w-6 h-6" /> {/* Placeholder for alignment */}
        <div className="flex-1 flex gap-1.5">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex items-center">
              <div className={`h-1.5 flex-1 rounded-full ${step.active ? 'bg-primary' : 'bg-slate-100'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={3} />
        </div>
        
        <h1 className="text-[28px] font-extrabold text-slate-800 tracking-tight mb-2 text-center">
          Decision made!
        </h1>
        <p className="text-[16px] text-slate-500 font-medium text-center mb-8">
          You're heading to <span className="font-bold text-slate-800">{isBackup ? 'Indoor Arcade Café' : 'Covered Food Market'}</span>.
        </p>

        <div className="w-full bg-white border border-slate-200/60 rounded-[24px] p-5 shadow-sm mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {isBackup ? (
              ['12 min walk', 'Indoor', 'Low budget', 'Low effort', 'Good for 4 people'].map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg text-[12px] font-bold text-slate-600">
                  {tag}
                </span>
              ))
            ) : (
              ['15 min transit', 'Covered', 'Moderate budget', 'Low effort', 'Good for 4 people'].map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg text-[12px] font-bold text-slate-600">
                  {tag}
                </span>
              ))
            )}
          </div>
          
          {!isBackup && (
            <div className="bg-primary/5 rounded-xl p-3 border border-primary/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-[13px] text-slate-700 font-medium">
                <span className="font-bold text-primary">Backup saved:</span> Indoor Arcade Café
              </p>
            </div>
          )}
        </div>

        <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-[16px] p-4 text-center">
          <p className="text-[14px] text-emerald-800 font-bold leading-relaxed">
            Good choice — this fits your group, budget, energy, and weather.
          </p>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-3">
        <button
          onClick={() => navigate('/group/directions')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Navigation className="w-5 h-5" />
          Get directions
        </button>
        <button
          onClick={() => navigate('/group/share')}
          className="w-full bg-white border-2 border-primary/20 text-primary rounded-2xl py-3.5 font-bold text-[15px] hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Share className="w-5 h-5" />
          Share with group
        </button>
        
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex justify-between px-2">
            <button
              onClick={() => navigate('/group/board')}
              className="text-slate-400 text-[12px] font-bold hover:text-slate-600 transition-colors"
            >
              Undo choice
            </button>
            <button
              onClick={() => navigate('/group/use-backup')}
              className="text-primary text-[12px] font-bold hover:text-primary/80 transition-colors"
            >
              Use backup instead
            </button>
          </div>
          <button
            onClick={() => navigate('/group/dashboard')}
            className="text-slate-400 text-[12px] font-bold hover:text-slate-600 transition-colors mt-2 text-center w-full"
          >
            Back to dashboard
          </button>
        </div>
      </div>
    </motion.div>
  );
}
