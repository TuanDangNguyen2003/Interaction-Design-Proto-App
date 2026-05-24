import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Zap, Cloud, DollarSign, Info, Crown, Sparkles, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function DecisionBoardScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Compare', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const options = [
    {
      name: 'Riverside Café Walk',
      fitLabel: 'Best low-effort fit',
      distance: '8 min walk',
      effort: 'Very low',
      weatherFit: 'Covered',
      price: '$',
      groupFit: 'Strong',
      strength: 'Easy walk, quick coffee, close to the station',
      tradeoff: 'Less discovery',
      bestReason: 'Best overall balance for distance, effort, weather, and train buffer.',
    },
    {
      name: 'Mini Textile Museum Stop',
      fitLabel: 'Best indoor discovery',
      distance: '16 min transit',
      effort: 'Medium',
      weatherFit: 'Indoor',
      price: '$$',
      groupFit: 'Medium',
      strength: 'More memorable',
      tradeoff: 'More travel and focus',
    },
    {
      name: 'Les Halles Food Stop',
      fitLabel: 'Best relaxed backup',
      distance: '12 min transit',
      effort: 'Low',
      weatherFit: 'Covered',
      price: '$',
      groupFit: 'Strong',
      strength: 'Good for snacks and sitting down',
      tradeoff: 'Less cultural',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Tran Board
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/sources')} className="text-slate-400 hover:text-slate-600 transition-colors">
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
          2 people • 2 hours • Low effort • Lyon Perrache
        </p>
      </div>

      <div className="flex-1 px-5 py-5 flex flex-col min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="shrink-0 mb-3">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-1">
            3 realistic fits
          </h1>
        </div>

        <button
          onClick={() => navigate('/filtered')}
          className="w-full bg-blue-50/50 border border-blue-100 rounded-[16px] p-3 mb-4 flex items-start gap-2.5 hover:bg-blue-50 transition-colors text-left shrink-0 active:scale-[0.98]"
        >
          <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[12px] text-blue-900 font-bold leading-relaxed mb-0.5">
              8 options filtered out: too far, closed soon, or too demanding before the train.
            </p>
            <p className="text-[11px] text-blue-600/80 font-medium">
              Sorted from saved, nearby, and friend-suggested places.
            </p>
          </div>
        </button>

        <div className="space-y-3 pb-2 flex-1">
          {options.map((option, index) => {
            const isBestOption = index === 0;

            return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={option.name}
              onClick={() => {
                if (isBestOption) {
                  navigate('/detail');
                }
              }}
              className={`bg-white border rounded-[20px] p-4 shadow-sm relative overflow-hidden ${
                isBestOption
                  ? 'border-teal-300 shadow-teal-100/80 ring-2 ring-teal-100 cursor-pointer hover:border-primary/60 hover:shadow-md transition-all active:scale-[0.99]'
                  : 'border-slate-200/60'
              }`}
            >
              {isBestOption && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-bl-2xl px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <Crown className="w-3.5 h-3.5" />
                  #1 best fit
                </div>
              )}

              <div className="mb-3.5">
                <div className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
                  isBestOption ? 'bg-teal-50 text-teal-700 pr-24' : 'bg-primary/10 text-primary'
                }`}>
                  {option.fitLabel}
                </div>
                <h3 className="font-extrabold text-slate-800 text-[16px] leading-snug">{option.name}</h3>
              </div>

              {isBestOption && (
                <div className="mb-3 bg-teal-50/80 border border-teal-100 rounded-xl px-3 py-2 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-[12px] font-bold text-teal-800 leading-snug">{option.bestReason}</p>
                </div>
              )}

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
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Fit</span>
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
            );
          })}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-2.5">
        <button
          onClick={() => navigate('/compare')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Compare all options
        </button>
      </div>
    </motion.div>
  );
}
