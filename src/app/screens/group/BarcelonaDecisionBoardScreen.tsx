import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Zap, Cloud, DollarSign, Info, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaDecisionBoardScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Vote', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const options = [
    {
      name: 'Cervecería Catalana',
      fitLabel: 'Best group compromise',
      distance: '15 min transit',
      effort: 'Low',
      weatherFit: 'Covered',
      price: '$$',
      groupFit: 'Strong',
      strength: 'Food choices for everyone (Tapas)',
      tradeoff: 'Can be busy, you added it',
    },
    {
      name: 'Hidden Speakeasy in El Born',
      fitLabel: 'Most playful option',
      distance: '12 min walk',
      effort: 'Low',
      weatherFit: 'Indoor',
      price: '$$',
      groupFit: 'Strong',
      strength: 'Great cocktails, TikTok recommended',
      tradeoff: 'Might need a reservation',
    },
    {
      name: 'Rooftop Tapas Bar',
      fitLabel: 'Best atmosphere',
      distance: '20 min transit',
      effort: 'Medium',
      weatherFit: 'Covered terrace',
      price: '$$$',
      groupFit: 'Medium',
      strength: 'Memorable view and social vibe',
      tradeoff: 'More expensive',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Barcelona Board
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/barcelona-sources')} className="text-slate-400 hover:text-slate-600 transition-colors">
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

      <div className="bg-white border-b border-slate-200/60 px-5 py-2.5 shrink-0 flex items-center justify-center">
        <p className="text-[11px] text-slate-500 font-medium text-center">
          4 people • 2 hours • Moderate energy • $$ budget • Mixed/social
        </p>
      </div>

      <div className="flex-1 px-5 py-5 flex flex-col min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="shrink-0 mb-3">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-1">
            3 realistic fits for your group
          </h1>
          
        </div>

        <button
          onClick={() => {}}
          className="w-full bg-amber-50/50 border border-amber-200/60 rounded-[16px] p-3 mb-4 flex items-start gap-2.5 hover:bg-amber-50 transition-colors text-left shrink-0 active:scale-[0.98]"
        >
          <Info className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[12px] text-amber-900 font-bold leading-relaxed mb-0.5">
              11 options filtered out: too far, outdoor-only, too expensive, or poor group fit.
            </p>
          </div>
        </button>

        <div className="space-y-3 pb-2 flex-1">
          {options.map((option, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={option.name}
              onClick={() => {
                if (option.name === 'Cervecería Catalana') {
                  navigate('/group/barcelona-detail');
                }
              }}
              className={`bg-white border border-slate-200/60 rounded-[20px] p-4 shadow-sm relative overflow-hidden ${option.name === 'Cervecería Catalana' ? 'cursor-pointer hover:border-primary/50 hover:shadow-md transition-all active:scale-[0.99]' : ''}`}
            >
              <div className="mb-3.5">
                <div className="inline-flex px-2.5 py-1 bg-primary/10 rounded-lg text-[11px] text-primary font-bold uppercase tracking-wider mb-2.5">
                  {option.fitLabel}
                </div>
                <h3 className="font-extrabold text-slate-800 text-[16px] leading-snug">{option.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3.5">
                <div className="flex items-center gap-1.5 text-[12px] bg-slate-50 rounded-xl px-2.5 py-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-slate-700 font-bold">{option.distance}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] bg-slate-50 rounded-xl px-2.5 py-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-slate-700 font-bold">{option.effort}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] bg-slate-50 rounded-xl px-2.5 py-2">
                  <Cloud className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-slate-700 font-bold">{option.weatherFit}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] bg-slate-50 rounded-xl px-2.5 py-2">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-slate-700 font-bold">{option.price}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-1.5 bg-slate-50/50 -mx-4 px-4 -mb-4 pb-3">
                <p className="text-[12px] text-slate-700 leading-relaxed flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Group Fit</span>
                  <span className="font-bold text-primary">{option.groupFit}</span>
                </p>
                <div className="h-[1px] bg-slate-200/50 w-full my-1.5" />
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider text-[10px] mr-1.5">Strength</span> 
                  <span className="font-medium">{option.strength}</span>
                </p>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mr-1.5">Trade-off</span> 
                  <span className="font-medium">{option.tradeoff}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-2.5">
        <button
          onClick={() => navigate('/group/barcelona-compare')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Compare all options
        </button>
      </div>
    </motion.div>
  );
}
