import { useNavigate } from 'react-router';
import { ChevronLeft, Navigation, PartyPopper, MapPin, Sparkles, Clock, Users, DollarSign, Check, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfirmationScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Choose', active: true },
    { number: 5, label: 'Confirm', active: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Tran Confirmation
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0 relative z-30">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Go back"
        >
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

      <div className="flex-1 px-5 py-6 overflow-y-auto flex flex-col items-center relative z-30">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-full max-w-sm mx-auto mb-6"
        >
          <div className="bg-white rounded-[24px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: -5 }}
                transition={{ type: 'spring', damping: 12, delay: 0.3 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg"
              >
                <PartyPopper className="w-8 h-8 text-teal-500 ml-1" />
              </motion.div>

              <h1 className="text-[28px] font-extrabold text-white tracking-tight text-center mb-1 relative z-10">
                Decision made!
              </h1>
              <p className="text-teal-50 font-medium text-center relative z-10 text-[15px]">
                Good choice. Tran is heading to
              </p>
            </div>

            <div className="relative h-6 bg-white flex items-center">
              <div className="absolute -left-3 w-6 h-6 bg-slate-50 rounded-full inset-shadow-sm" />
              <div className="absolute left-6 right-6 h-px border-t-2 border-dashed border-slate-200" />
              <div className="absolute -right-3 w-6 h-6 bg-slate-50 rounded-full inset-shadow-sm" />
            </div>

            <div className="p-6 pt-2">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-[22px] font-extrabold text-slate-800 leading-tight">
                    Riverside Café Walk
                  </h2>
                  <p className="text-[14px] text-slate-500 font-medium mt-1.5">
                    Coffee, river path, and train-safe timing
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-semibold text-slate-700">8 min walk</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-semibold text-slate-700">Group of 2</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2.5">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-semibold text-slate-700">Low budget</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-semibold text-slate-700">Low effort</span>
                </div>
              </div>

              <div className="bg-emerald-50/50 rounded-xl p-3.5 border border-emerald-100/50 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                </div>
                <p className="text-[13px] text-slate-600 font-medium leading-snug">
                  <span className="font-bold text-emerald-700">Backup ready:</span> Les Halles Food Stop
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 text-slate-500 bg-slate-200/50 rounded-full py-2 px-4"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[13px] font-semibold">Saved for the 2-hour train window</span>
        </motion.div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-3 relative z-30">
        <button
          onClick={() => navigate('/directions')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Navigation className="w-5 h-5" />
          Get directions
        </button>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/')}
            className="bg-slate-50 border border-slate-200 text-slate-600 rounded-2xl py-3 font-bold text-[14px] hover:bg-slate-100 transition-all active:scale-[0.98]"
          >
            Back to home
          </button>
          <button
            onClick={() => navigate('/backup-selection')}
            className="bg-teal-50 border border-teal-100 text-teal-700 rounded-2xl py-3 font-bold text-[14px] hover:bg-teal-100 transition-all active:scale-[0.98]"
          >
            Use backup
          </button>
        </div>
      </div>
    </motion.div>
  );
}
