import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Users, Clock, CloudRain, Sun, Cloud, MapPin, Zap } from 'lucide-react';

export default function DecisionSetupScreen() {
  const navigate = useNavigate();
  
  const [energy, setEnergy] = useState(40);
  const [people, setPeople] = useState(2);
  const [time, setTime] = useState('2 hrs');
  const [weather, setWeather] = useState('cloud');

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Tran Setup
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
            Quick nearby filter
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">Tran and one friend have two hours before the train.</p>
        </div>

        {/* Energy Slider */}
        <div className="bg-white p-5 rounded-[20px] border border-slate-200/60 shadow-sm relative overflow-hidden mt-2">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          
          <div className="flex justify-between items-end mb-6 relative z-10">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Zap size={14} className="text-primary" /> Energy Level
            </label>
            <span className="text-[13px] font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
              {energy < 33 ? 'Low-key' : energy < 66 ? 'Moderate' : 'High energy'}
            </span>
          </div>
          
          {/* Custom slider input */}
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
            <span>Low effort</span>
            <span>Explore</span>
          </div>
        </div>

        {/* Group 1: People & Weather */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 uppercase tracking-wider">
              <Users size={14} className="text-slate-400" /> Group Size
            </label>
            <div className="flex bg-slate-50 p-1 rounded-xl">
              {[1,2,3,4].map(num => (
                <button 
                  key={num} 
                  onClick={()=>setPeople(num)} 
                  className={`flex-1 text-[14px] py-2 rounded-lg font-bold transition-all ${people === num ? 'bg-white shadow-sm text-primary ring-1 ring-slate-200/50' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {num}{num===4?'+':''}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] border border-slate-200/60 shadow-sm">
            <label className="text-[12px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 uppercase tracking-wider">
              <CloudRain size={14} className="text-slate-400" /> Weather
            </label>
            <div className="flex bg-slate-50 p-1 rounded-xl justify-between">
              {[{id:'sun', icon: Sun, color: 'text-amber-500'}, {id:'cloud', icon: Cloud, color: 'text-slate-500'}, {id:'rain', icon: CloudRain, color: 'text-blue-500'}].map(w => (
                <button 
                  key={w.id} 
                  onClick={()=>setWeather(w.id)} 
                  className={`flex-1 flex justify-center py-2 rounded-lg transition-all ${weather === w.id ? `bg-white shadow-sm ring-1 ring-slate-200/50 ${w.color}` : 'text-slate-300 hover:text-slate-500'}`}
                >
                  <w.icon size={18} strokeWidth={weather === w.id ? 2.5 : 2} />
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
            <div className="text-[15px] font-bold text-slate-800 truncate relative z-10">Lyon Perrache</div>
            <div className="text-[11px] text-primary font-bold mt-1 relative z-10">Tap to change</div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0">
        <button
          onClick={() => navigate('/sources')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-4 font-bold text-[16px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Find nearby fits <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
