import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Users, Clock, Zap, MapPin, DollarSign, Cloud, Sun, Umbrella } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function GroupSetupScreen() {
  const navigate = useNavigate();

  const [energy, setEnergy] = useState(40);
  const [budget, setBudget] = useState('$$');
  const [time, setTime] = useState('2 hrs');
  const [environment, setEnvironment] = useState('mixed');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Group Setup
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/')} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex-1 flex items-center">
              <div className={`h-1.5 flex-1 rounded-full ${step === 1 ? 'bg-primary' : 'bg-slate-100'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div>
          <h1 className="text-[26px] font-extrabold text-slate-800 tracking-tight mb-1">
            Set the group vibe
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">Align on what everyone is feeling right now.</p>
        </div>

        {/* Group Info - Static but visual */}
        <div className="flex items-center gap-3 bg-white p-3 rounded-[20px] border border-slate-200/60 shadow-sm">
           <div className="flex -space-x-3">
             <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100">
               <ImageWithFallback src="https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5NDg4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Lina" className="w-full h-full object-cover" />
             </div>
             <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-[14px]">E</div>
             <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-[14px]">S</div>
             <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[14px]">E</div>
           </div>
           <div>
             <div className="text-[13px] font-bold text-slate-800">Barcelona Girls</div>
             <div className="text-[11px] text-slate-400 font-medium">4 members organizing</div>
           </div>
        </div>

        {/* Energy Slider */}
        <div className="bg-white p-5 rounded-[20px] border border-slate-200/60 shadow-sm relative overflow-hidden mt-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          
          <div className="flex justify-between items-end mb-6 relative z-10">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Zap size={14} className="text-primary" /> Group Energy
            </label>
            <span className="text-[13px] font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
              {energy < 33 ? 'Chill / Tired' : energy < 66 ? 'Moderate' : 'Ready to party'}
            </span>
          </div>
          
          <div className="relative h-10 flex items-center group z-10">
            <div className="absolute w-full h-3.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-75" 
                style={{ width: `${energy}%` }} 
              />
            </div>
            <input 
              type="range" min="0" max="100" 
              value={energy} onChange={(e) => setEnergy(parseInt(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer z-20"
            />
            <div 
              className="absolute w-8 h-8 bg-white border-[3px] border-cyan-500 rounded-full shadow-md flex items-center justify-center pointer-events-none transition-transform group-active:scale-110 z-10"
              style={{ left: `calc(${energy}% - 16px)` }}
            >
              <div className="w-2.5 h-2.5 bg-primary rounded-full" />
            </div>
          </div>
          
          <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-2 uppercase tracking-wider">
            <span>Low-key</span>
            <span>High Energy</span>
          </div>
        </div>

        {/* Group 1: Budget & Environment */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 uppercase tracking-wider">
              <DollarSign size={14} className="text-slate-400" /> Budget
            </label>
            <div className="flex bg-slate-50 p-1 rounded-xl">
              {['$', '$$', '$$$'].map(level => (
                <button 
                  key={level} 
                  onClick={()=>setBudget(level)} 
                  className={`flex-1 text-[14px] py-2 rounded-lg font-bold transition-all ${budget === level ? 'bg-white shadow-sm text-primary ring-1 ring-slate-200/50' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 uppercase tracking-wider">
              <Cloud size={14} className="text-slate-400" /> Environment
            </label>
            <div className="flex bg-slate-50 p-1 rounded-xl justify-between">
              {[{id:'indoor', icon: Umbrella, color: 'text-indigo-500'}, {id:'mixed', icon: Cloud, color: 'text-slate-500'}, {id:'outdoor', icon: Sun, color: 'text-amber-500'}].map(env => (
                <button 
                  key={env.id} 
                  onClick={()=>setEnvironment(env.id)} 
                  className={`flex-1 flex justify-center py-2 rounded-lg transition-all ${environment === env.id ? `bg-white shadow-sm ring-1 ring-slate-200/50 ${env.color}` : 'text-slate-300 hover:text-slate-500'}`}
                >
                  <env.icon size={18} strokeWidth={environment === env.id ? 2.5 : 2} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Group 2: Time & Location */}
        <div className="grid grid-cols-[1.2fr_1fr] gap-4">
          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 uppercase tracking-wider">
              <Clock size={14} className="text-slate-400" /> Time left
            </label>
            <div className="flex flex-wrap gap-2">
              {['1 hr', '2 hrs', 'Half day'].map(t => (
                <button 
                  key={t} 
                  onClick={()=>setTime(t)} 
                  className={`px-3 py-1.5 text-[13px] rounded-lg font-bold transition-all ${time === t ? 'bg-primary/10 text-primary ring-1 ring-primary/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm flex flex-col justify-center relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-colors">
            <div className="absolute -right-3 -bottom-3 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <MapPin size={64} />
            </div>
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider relative z-10">
              <MapPin size={14} className="text-slate-400" /> Location
            </label>
            <div className="text-[15px] font-bold text-slate-800 truncate relative z-10">BCN Center</div>
            <div className="text-[11px] text-primary font-bold mt-1 relative z-10">Tap to change</div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0">
        <button
          onClick={() => navigate('/group/sources')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-4 font-bold text-[16px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Confirm Vibe <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
