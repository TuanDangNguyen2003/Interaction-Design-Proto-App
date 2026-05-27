import { useNavigate } from 'react-router';
import { ChevronLeft, Check, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import riversideCafeHero from '../../imports/riverside-cafe-lyon-hero.webp';

export default function OptionDetailScreen() {
  const navigate = useNavigate();

  const fits = [
    { label: 'Time fit', value: 'Strong', percent: 100 },
    { label: 'Budget fit', value: 'Strong', percent: 95 },
    { label: 'Weather fit', value: 'Strong', percent: 100 },
    { label: 'Energy fit', value: 'Strong', percent: 100 },
    { label: 'Discovery', value: 'Medium', percent: 60 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-full flex items-center justify-center text-slate-800 shadow-sm active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="h-[240px] bg-slate-200 relative overflow-hidden">
          <img
            src={riversideCafeHero}
            alt="Covered riverside cafe terrace in Lyon with coffee before a train departure"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
          <h1 className="absolute bottom-5 left-5 text-white text-[28px] font-extrabold tracking-tight">
            Riverside Café Walk
          </h1>
        </div>

        <div className="px-5 py-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {['8 min walk', 'Covered route', '$', 'Very low effort', 'Open now'].map((fact) => (
              <div key={fact} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-[12px] font-bold text-slate-600 shadow-sm">
                {fact}
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-[14px] font-bold text-slate-400 uppercase tracking-wider mb-3">
              Why this fits now
            </h2>
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/5 border border-primary/20 rounded-[20px] p-5">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                <p className="text-[14px] text-primary-900 font-bold leading-relaxed">
                  Best match for two travelers: close, affordable, covered, and easy to leave from before the train.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-[14px] font-bold text-slate-400 uppercase tracking-wider mb-4">
              Fit breakdown
            </h2>
            <div className="bg-white border border-slate-200/60 rounded-[20px] p-5 shadow-sm space-y-4">
              {fits.map((fit) => (
                <div key={fit.label} className="flex items-center gap-4">
                  <div className="w-[85px] shrink-0">
                    <p className="text-[13px] font-bold text-slate-700">{fit.label}</p>
                  </div>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${fit.percent > 70 ? 'bg-emerald-500' : 'bg-amber-400'}`}
                      style={{ width: `${fit.percent}%` }}
                    />
                  </div>
                  <div className="w-[50px] shrink-0 text-right">
                    <p className={`text-[12px] font-bold ${fit.percent > 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {fit.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-[14px] font-bold text-slate-400 uppercase tracking-wider mb-3">
              Trade-off
            </h2>
            <div className="bg-amber-50 border border-amber-200/60 rounded-[16px] p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[13px] text-amber-900 font-medium leading-relaxed">
                It is less unique than the museum, so TripFit keeps Les Halles as a food-focused backup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-2.5">
        <button
          onClick={() => navigate('/backup-selection')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Choose this
        </button>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full bg-white border border-slate-200 text-slate-500 rounded-2xl py-3.5 font-bold text-[15px] cursor-default"
        >
          Keep as backup
        </button>
      </div>
    </motion.div>
  );
}
