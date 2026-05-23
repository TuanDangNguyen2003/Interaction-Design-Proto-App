import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Check, Loader2, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaSortingFeedbackScreen() {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [isDone, setIsDone] = useState(false);

  const checklist = [
    "Combining saved places, pins, and group chat ideas",
    "Removing places too far before dinner",
    "Removing options above the group budget",
    "Removing outdoor-only options because weather is uncertain",
    "Prioritizing social places good for 4 people",
    "Keeping one backup if the first choice is crowded"
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCompletedSteps(currentStep);
      
      if (currentStep >= checklist.length) {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 600);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDone) {
      const timer = setTimeout(() => {
        navigate('/group/barcelona-board');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isDone, navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(4px)' }} 
      animate={{ opacity: 1, filter: 'blur(0px)' }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-12 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Barcelona Sorting
      </div>

      <div className="px-4 py-4 flex justify-end shrink-0">
        <button 
          onClick={() => navigate('/group/barcelona-sources')} 
          className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-400 hover:text-slate-600 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col mt-4">
        <div className="mb-10 text-center">
          <div className="inline-flex w-16 h-16 bg-white rounded-[20px] shadow-sm border border-slate-100 items-center justify-center mb-6 relative">
            {isDone ? (
              <Check className="w-8 h-8 text-emerald-500" strokeWidth={3} />
            ) : (
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            )}
          </div>
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-2">
            Sorting group ideas
          </h1>
          <p className="text-[15px] text-slate-500 font-medium">
            Checking what works for everyone right now.
          </p>
        </div>

        <div className="space-y-4 max-w-sm mx-auto w-full">
          {checklist.map((item, index) => {
            const isCompleted = index < completedSteps;
            const isActive = index === completedSteps;
            
            return (
              <div 
                key={index} 
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isCompleted ? 'opacity-100' : isActive ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  isCompleted ? 'bg-emerald-500' : isActive ? 'bg-primary/20' : 'bg-slate-200'
                }`}>
                  {isCompleted ? (
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  ) : isActive ? (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ) : null}
                </div>
                <span className={`text-[14px] font-medium leading-tight ${
                  isCompleted ? 'text-slate-700' : isActive ? 'text-slate-800 font-semibold' : 'text-slate-400'
                }`}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 shrink-0 h-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isDone ? 1 : 0, y: isDone ? 0 : 10 }}
          className="w-full"
        >
          <button
            onClick={() => navigate('/group/barcelona-board')}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-emerald-500/30"
          >
            View group decision board
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}