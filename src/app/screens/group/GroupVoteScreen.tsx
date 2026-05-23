import { useNavigate } from 'react-router';
import { ChevronLeft, Check, HelpCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupVoteScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Vote', active: true },
    { number: 5, label: 'Confirm', active: false },
  ];

  const votes = [
    { name: 'Lina (You)', vote: 'Yes', status: 'yes' },
    { name: 'Emma', vote: 'Yes', status: 'yes' },
    { name: 'Lucas', vote: 'Maybe', status: 'maybe' },
    { name: 'Sofia', vote: 'Yes', status: 'yes' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Quick Vote
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/detail')} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex items-center">
              <div className={`h-1.5 flex-1 rounded-full ${step.active ? 'bg-primary' : 'bg-slate-100'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-2">
            Quick group check
          </h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Make sure everyone is okay with the choice.
          </p>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-[20px] p-5 shadow-sm mb-6">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Selected Option</p>
          <h2 className="text-[20px] font-extrabold text-slate-800">Covered Food Market</h2>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-[20px] shadow-sm mb-6 overflow-hidden">
          {votes.map((person, i) => (
            <div 
              key={person.name} 
              className={`flex items-center justify-between p-4 ${i !== votes.length - 1 ? 'border-b border-slate-100' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-[12px]">
                  {person.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-700">{person.name}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                person.status === 'yes' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {person.status === 'yes' ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <HelpCircle className="w-3.5 h-3.5" strokeWidth={3} />}
                <span className="text-[12px] font-bold uppercase tracking-wider">{person.vote}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200/60 rounded-[16px] p-4">
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-[13px] font-bold text-amber-900 mb-1">Concern raised</p>
              <div className="inline-block bg-white border border-amber-200 text-amber-700 px-2.5 py-1 rounded-lg text-[12px] font-bold shadow-sm">
                Could be crowded
              </div>
            </div>
          </div>
          <p className="text-[14px] text-amber-900 font-bold ml-8">
            Save a backup in case it is full?
          </p>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-3">
        <button
          onClick={() => navigate('/group/backup-selection')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Save backup and confirm
        </button>
        <button
          onClick={() => navigate('/group/board')}
          className="w-full bg-white border border-slate-200 text-slate-600 rounded-2xl py-3.5 font-bold text-[15px] hover:bg-slate-50 transition-all active:scale-[0.98]"
        >
          Change choice
        </button>
      </div>
    </motion.div>
  );
}
