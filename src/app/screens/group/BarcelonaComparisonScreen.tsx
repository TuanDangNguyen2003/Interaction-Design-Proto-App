import { useNavigate } from 'react-router';
import { AlertTriangle, Check, ChevronDown, Crown, Info, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaComparisonScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Vote', active: false },
    { number: 5, label: 'Confirm', active: false },
  ];

  const cards = [
    {
      name: 'Cervecería Catalana',
      fits: [
        { label: 'Time fit', value: 'Strong' },
        { label: 'Budget fit', value: 'Strong' },
        { label: 'Energy fit', value: 'Strong' },
        { label: 'Weather fit', value: 'Strong' },
        { label: 'Group fit', value: 'Strong' },
      ],
      riskLabel: 'Medium crowd risk',
      riskIcon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      riskColor: 'text-amber-700 bg-amber-50',
      tradeoff: 'Can be busy, you added it',
    },
    {
      name: 'Hidden Speakeasy in El Born',
      fits: [
        { label: 'Time fit', value: 'Strong' },
        { label: 'Budget fit', value: 'Strong' },
        { label: 'Energy fit', value: 'Strong' },
        { label: 'Weather fit', value: 'Strong' },
        { label: 'Group fit', value: 'Strong' },
      ],
      riskLabel: 'Low risk',
      riskIcon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      riskColor: 'text-emerald-700 bg-emerald-50',
      tradeoff: 'Might need a reservation',
    },
    {
      name: 'Rooftop Tapas Bar',
      fits: [
        { label: 'Time fit', value: 'Medium' },
        { label: 'Budget fit', value: 'Weak' },
        { label: 'Energy fit', value: 'Medium' },
        { label: 'Weather fit', value: 'Medium' },
        { label: 'Group fit', value: 'Medium' },
      ],
      riskLabel: 'Higher cost',
      riskIcon: <TrendingUp className="w-4 h-4 text-rose-500" />,
      riskColor: 'text-rose-700 bg-rose-50',
      tradeoff: 'More expensive',
    },
  ];

  const renderFitValue = (value: string) => {
    if (value === 'Strong') return <span className="text-emerald-600 font-bold text-[13px]">Strong</span>;
    if (value === 'Medium') return <span className="text-amber-600 font-bold text-[13px]">Medium</span>;
    return <span className="text-rose-600 font-bold text-[13px]">{value}</span>;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full bg-slate-900/20 relative overflow-hidden flex flex-col justify-end"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Barcelona Compare
      </div>

      <div className="absolute inset-0 bg-slate-50">
        <div className="px-5 pt-14 opacity-30">
          <div className="h-5 w-52 bg-slate-300 rounded-full mb-5" />
          <div className="h-24 bg-white border border-slate-200 rounded-[20px] mb-3" />
          <div className="h-24 bg-white border border-slate-200 rounded-[20px] mb-3" />
          <div className="h-24 bg-white border border-slate-200 rounded-[20px]" />
        </div>
      </div>

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
        className="relative z-20 h-[calc(100%-74px)] bg-slate-50 rounded-t-[30px] shadow-[0_-18px_45px_-18px_rgba(15,23,42,0.35)] border-t border-white flex flex-col overflow-hidden"
      >
        <div className="px-5 pt-3 pb-4 border-b border-slate-200/60 bg-white shrink-0">
          <div className="flex justify-center mb-3">
            <button
              onClick={() => navigate('/group/barcelona-board')}
              className="w-12 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"
              aria-label="Close comparison"
            />
          </div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
                <Info className="w-3.5 h-3.5" />
                Decision Board extension
              </div>
              <h1 className="text-[22px] font-extrabold text-slate-800 tracking-tight">
                Compare trade-offs
              </h1>
              <p className="text-[13px] text-slate-500 font-medium leading-snug mt-1">
                You are still on the board. Tap the top pick when you are ready to move on.
              </p>
            </div>
            <button
              onClick={() => navigate('/group/barcelona-board')}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 active:scale-[0.96] transition-all shrink-0"
              aria-label="Back to board"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-1.5">
            {steps.map((step) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div className={`h-1.5 flex-1 rounded-full ${step.active ? 'bg-primary' : 'bg-slate-100'}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 px-5 py-5 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="space-y-4 pb-4">
          {cards.map((card, index) => (
            <div 
              key={card.name} 
              onClick={() => {
                if (card.name === 'Cervecería Catalana') {
                  navigate('/group/barcelona-detail');
                }
              }}
              className={`bg-white border rounded-[20px] p-5 shadow-sm relative overflow-hidden ${
                card.name === 'Cervecería Catalana'
                  ? 'cursor-pointer border-teal-300 shadow-teal-100/70 hover:border-primary/60 hover:shadow-md transition-all active:scale-[0.99]'
                  : 'border-slate-200/60'
              }`}
            >
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white rounded-bl-2xl px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5" />
                  Top pick
                </div>
              )}

              <h3 className="font-extrabold text-slate-800 text-[18px] mb-4 pr-24">{card.name}</h3>
              
              <div className="grid grid-cols-2 gap-y-2 mb-4">
                {card.fits.map((fit) => (
                  <div key={fit.label} className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{fit.label}</span>
                    {renderFitValue(fit.value)}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-5">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${card.riskColor}`}>
                  {card.riskIcon}
                  <span className="text-[13px] font-bold">Risk: {card.riskLabel}</span>
                </div>
                <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100 flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Main Trade-off</span>
                  <span className="text-[13px] font-medium text-slate-700">{card.tradeoff}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </motion.div>

      {/* Removed bottom banner per user request */}
    </motion.div>
  );
}
