import { useNavigate } from 'react-router';
import { ChevronLeft, Bookmark, MessageCircle, MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupSourcesScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: false },
    { number: 4, label: 'Vote', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const sources = [
    {
      id: 1,
      icon: <Bookmark className="w-5 h-5" />,
      title: "Lina's saved places",
      desc: "8 saved ideas",
      status: "included",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 2,
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Friends' suggestions",
      desc: "6 ideas from group chat",
      status: "included",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      icon: <Navigation className="w-5 h-5" />,
      title: "Nearby realistic options",
      desc: "14 nearby candidates",
      status: "available now",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 4,
      icon: <MapPin className="w-5 h-5" />,
      title: "Google Maps pins",
      desc: "5 pinned places",
      status: "included",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Group Sources
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/setup')} className="text-slate-400 hover:text-slate-600 transition-colors">
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
        <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-2">
          Bring in everyone's ideas
        </h1>
        <p className="text-[14px] text-slate-500 font-medium mb-6 leading-relaxed">
          TripFit sorts what the group already saved and what is realistically nearby.
        </p>

        <div className="space-y-3 pb-4">
          {sources.map((src) => (
            <div 
              key={src.id}
              className="flex items-center gap-3 p-4 bg-white border border-slate-200/60 rounded-[16px] shadow-sm"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${src.color}`}>
                {src.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-800 text-[15px] truncate">{src.title}</h3>
                <p className="text-[13px] text-slate-500">{src.desc}</p>
              </div>
              <div className="bg-slate-100 px-2.5 py-1 rounded-lg">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{src.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-4">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <p className="text-[12px] text-slate-500 font-medium text-center leading-relaxed">
            4 people • 3 hours • Moderate budget • Covered preferred • Social food vibe
          </p>
        </div>
        <div className="space-y-2.5">
          <button
            onClick={() => navigate('/group/sorting')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
          >
            Build group decision board
          </button>
          <button
            onClick={() => navigate('/group/edit-context')}
            className="w-full text-slate-500 text-[14px] font-bold hover:text-slate-800 transition-colors py-1.5"
          >
            Edit context
          </button>
        </div>
      </div>
    </motion.div>
  );
}
