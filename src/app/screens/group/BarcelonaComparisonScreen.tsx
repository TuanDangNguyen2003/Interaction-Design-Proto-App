import { useNavigate } from 'react-router';
import { ChevronLeft, Check, AlertTriangle, ShieldCheck, TrendingUp, Info } from 'lucide-react';
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
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Barcelona Compare
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/barcelona-board')} className="text-slate-400 hover:text-slate-600 transition-colors">
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

      <div className="flex-1 px-5 py-5 flex flex-col min-h-0 overflow-y-auto">
        <div className="shrink-0 mb-5">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-1">
            Compare trade-offs
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Choose the best compromise, not the most random recommendation.
          </p>
        </div>

        <div className="space-y-4 pb-4">
          {cards.map((card) => (
            <div 
              key={card.name} 
              onClick={() => {
                if (card.name === 'Cervecería Catalana') {
                  navigate('/group/barcelona-detail');
                }
              }}
              className={`bg-white border border-slate-200/60 rounded-[20px] p-5 shadow-sm ${card.name === 'Cervecería Catalana' ? 'cursor-pointer hover:border-primary/50 hover:shadow-md transition-all active:scale-[0.99]' : ''}`}
            >
              <h3 className="font-extrabold text-slate-800 text-[18px] mb-4">{card.name}</h3>
              
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

      {/* Removed bottom banner per user request */}
    </motion.div>
  );
}