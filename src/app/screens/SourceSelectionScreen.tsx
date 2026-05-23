import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Bookmark, MapPin, Users, Plus, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function SourceSelectionScreen() {
  const navigate = useNavigate();

  const [connectedSources, setConnectedSources] = useState<Record<string, boolean>>({
    'Saved places': false,
    'Nearby places': false,
    'Friend suggestions': false,
  });

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: false },
    { number: 4, label: 'Compare', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const sources = [
    {
      icon: Bookmark,
      title: 'Saved places',
      subtitleActive: '4 saved ideas',
      subtitleInactive: 'Tap to connect saved lists',
      statusActive: 'connected',
    },
    {
      icon: MapPin,
      title: 'Nearby places',
      subtitleActive: '12 nearby candidates',
      subtitleInactive: 'Tap to enable location',
      statusActive: 'available now',
    },
    {
      icon: Users,
      title: 'Friend suggestions',
      subtitleActive: '3 shared ideas',
      subtitleInactive: 'Tap to include friends',
      statusActive: 'included',
    },
  ];

  const toggleSource = (title: string) => {
    setConnectedSources(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const hasAnySelected = Object.values(connectedSources).some(v => v);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Source Selection Screen
      </div>

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

      <div className="flex-1 px-5 py-5 flex flex-col min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="shrink-0 mb-4">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-1">
            Bring in your options
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
            TripFit sorts what you already have and what is realistically nearby.
          </p>
        </div>

        <div className="space-y-3 flex-1 min-h-0 mb-3">
          {sources.map((source) => {
            const isConnected = connectedSources[source.title];
            return (
              <div
                key={source.title}
                onClick={() => toggleSource(source.title)}
                className={`bg-white border rounded-[20px] p-4 shadow-sm relative overflow-hidden group cursor-pointer transition-all duration-200 ${
                  isConnected 
                    ? 'border-primary/50 ring-1 ring-primary/20 bg-primary/[0.02]' 
                    : 'border-slate-200/60 hover:border-slate-300 hover:shadow-md active:scale-[0.98]'
                }`}
              >
                <div className={`absolute -right-4 -top-4 transition-all duration-300 ${
                  isConnected ? 'opacity-[0.04] text-primary scale-110' : 'opacity-[0.02] group-hover:opacity-[0.04]'
                }`}>
                  <source.icon size={80} />
                </div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
                    isConnected ? 'bg-primary' : 'bg-slate-100 group-hover:bg-slate-200/80'
                  }`}>
                    <source.icon className={`w-5 h-5 ${isConnected ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className={`font-bold mb-0.5 text-[15px] transition-colors ${isConnected ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'}`}>
                      {source.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 mb-2 font-medium">
                      {isConnected ? source.subtitleActive : source.subtitleInactive}
                    </p>
                    <div className={`inline-flex px-2.5 py-1 rounded-lg items-center gap-1.5 transition-colors ${
                      isConnected ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isConnected ? <Check size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                      <p className="text-[11px] font-bold uppercase tracking-wider">
                        {isConnected ? source.statusActive : 'Not connected'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200/60 rounded-[16px] p-3 shadow-sm shrink-0 flex items-center justify-center">
          <p className="text-[12px] text-slate-500 font-bold tracking-wide">
            2 people • 2 hours • Rainy • Low effort • EPFL
          </p>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-2.5">
        <button
          onClick={() => navigate('/sorting')}
          disabled={!hasAnySelected}
          className={`w-full rounded-2xl py-3.5 font-bold text-[15px] transition-all duration-300 ${
            hasAnySelected 
              ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98]' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          Build decision board
        </button>
        <button
          onClick={() => navigate('/edit-context')}
          className="w-full text-slate-500 text-[14px] font-bold hover:text-slate-800 transition-colors py-1.5"
        >
          Edit context
        </button>
      </div>
    </motion.div>
  );
}
