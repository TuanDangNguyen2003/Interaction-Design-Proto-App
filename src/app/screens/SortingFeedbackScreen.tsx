import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Check, Loader2, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function SortingFeedbackScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const checks = [
    'Checking distance from EPFL',
    'Removing outdoor options because it is raining',
    'Removing options over 25 min away',
    'Checking opening status',
    'Prioritizing low-effort places',
    'Keeping options possible within 2 hours',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < checks.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    return () => clearInterval(timer);
  }, [checks.length]);

  useEffect(() => {
    if (step === checks.length) {
      // Wait a brief moment to show the final checkmark, then navigate
      const navTimer = setTimeout(() => {
        navigate('/board');
      }, 800);
      return () => clearTimeout(navTimer);
    }
  }, [step, navigate, checks.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(4px)' }} 
      animate={{ opacity: 1, filter: 'blur(0px)' }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Sorting Feedback Screen
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center justify-between shrink-0">
        <h2 className="font-bold text-slate-800 text-[15px]">Sorting by contextual fit</h2>
        <button onClick={() => navigate('/sources')} className="text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 px-5 py-6 flex flex-col min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="shrink-0 mb-6">
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Checking what actually works now.
          </p>
        </div>

        <div className="space-y-4">
          {checks.map((check, index) => (
            <div key={check} className="flex items-start gap-3.5">
              <div className="mt-0.5 shrink-0">
                {index < step ? (
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-primary/20">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                ) : index === step ? (
                  <Loader2 className="w-6 h-6 text-primary animate-spin" strokeWidth={2.5} />
                ) : (
                  <div className="w-6 h-6 bg-slate-200/80 rounded-full" />
                )}
              </div>
              <p
                className={`text-[15px] leading-relaxed transition-colors duration-300 pt-0.5 ${
                  index < step 
                    ? 'text-slate-800 font-bold' 
                    : index === step 
                      ? 'text-slate-800 font-bold'
                      : 'text-slate-400 font-medium'
                }`}
              >
                {check}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
