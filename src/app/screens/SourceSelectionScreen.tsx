import { useNavigate } from 'react-router';
import { ChevronLeft, Bookmark, MapPin, Users, CheckCircle2, Sparkles, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function SourceSelectionScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: false },
    { number: 4, label: 'Choose', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const sources = [
    {
      id: 1,
      icon: <Bookmark className="w-6 h-6" />,
      title: 'Your saved places',
      desc: '4 ideas saved before the trip',
      status: 'included',
      iconBg: 'bg-purple-100 text-purple-600',
      cardBg: 'bg-gradient-to-br from-white to-purple-50/30',
      borderColor: 'border-purple-100',
    },
    {
      id: 2,
      icon: <MapPin className="w-6 h-6" />,
      title: 'Nearby open places',
      desc: '12 candidates around Lyon Perrache',
      status: 'available now',
      iconBg: 'bg-blue-100 text-blue-600',
      cardBg: 'bg-gradient-to-br from-white to-blue-50/30',
      borderColor: 'border-blue-100',
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: 'Friend ideas',
      desc: "3 ideas from your friend",
      status: 'included',
      iconBg: 'bg-amber-100 text-amber-600',
      cardBg: 'bg-gradient-to-br from-white to-amber-50/30',
      borderColor: 'border-amber-100',
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
        <button onClick={() => navigate('/setup')} className="text-slate-400 hover:text-slate-600 transition-colors">
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
        <div className="mb-8">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-2 leading-tight flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0"
            >
              <Database className="w-5 h-5" />
            </motion.div>
            Feeding the decision engine
          </h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            TripFit combines what you already saved with options that still fit the train window.
          </p>
        </div>

        <div className="relative space-y-4">
          {sources.map((src, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              key={src.id}
              className={`relative overflow-hidden ${src.cardBg} border ${src.borderColor} rounded-[20px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-5`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${src.iconBg}`}>
                  {src.icon}
                </div>

                {src.status === 'included' ? (
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Included</span>
                  </div>
                ) : (
                  <div className="bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-cyan-200 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Available Now</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-extrabold text-slate-800 text-[18px] mb-1">{src.title}</h3>
                <p className="text-[14px] text-slate-600 font-medium">{src.desc}</p>
              </div>

              <div className="absolute -right-6 -bottom-6 opacity-[0.03] pointer-events-none scale-150 rotate-12">
                {src.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] relative z-10">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <p className="text-[12px] text-slate-500 font-medium text-center leading-relaxed">
            19 total options • Filtering for: 2 people, 2 hours, low effort
          </p>
        </div>
        <button
          onClick={() => navigate('/sorting')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Build decision board
        </button>
      </div>
    </motion.div>
  );
}
