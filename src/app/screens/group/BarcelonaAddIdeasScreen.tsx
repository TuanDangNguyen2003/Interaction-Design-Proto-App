import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronLeft, CircleCheckBig, Instagram, MapPin, Sparkles, Video } from 'lucide-react';
import { motion } from 'motion/react';

const sources = [
  {
    id: 'maps',
    title: 'Google Maps saved',
    detail: '2 restaurant pins',
    ideas: 2,
    icon: MapPin,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'tiktok',
    title: 'TikTok favorites',
    detail: '2 Barcelona videos',
    ideas: 2,
    icon: Video,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    id: 'instagram',
    title: 'Instagram saved',
    detail: '1 place reel',
    ideas: 1,
    icon: Instagram,
    color: 'bg-fuchsia-50 text-fuchsia-600',
  },
] as const;

interface BarcelonaAddIdeasScreenProps {
  onIdeasAdded: () => void;
}

export default function BarcelonaAddIdeasScreen({ onIdeasAdded }: BarcelonaAddIdeasScreenProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const [hasAdded, setHasAdded] = useState(false);
  const allSelected = selected.length === sources.length;
  const selectedIdeas = sources
    .filter((source) => selected.includes(source.id))
    .reduce((total, source) => total + source.ideas, 0);

  const toggleSource = (id: string) => {
    setSelected((current) => current.includes(id)
      ? current.filter((source) => source !== id)
      : [...current, id]);
  };

  const finish = () => {
    onIdeasAdded();
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button
          onClick={() => hasAdded ? finish() : navigate('/group/barcelona-invite')}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {[true, true, true].map((active, index) => (
            <div key={index} className={`h-1.5 flex-1 rounded-full ${active ? 'bg-primary' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      {hasAdded ? (
        <div className="flex-1 px-5 py-8 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 240 }}
            className="w-20 h-20 rounded-full bg-cyan-50 text-primary flex items-center justify-center mb-5"
          >
            <CircleCheckBig className="w-10 h-10" />
          </motion.div>
          <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider mb-4">
            <Check className="w-3.5 h-3.5" />
            Your contribution is in
          </div>
          <h1 className="text-[27px] font-extrabold text-slate-800 tracking-tight mb-2">
            5 ideas added
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-6 max-w-[290px]">
            Your saved pins, TikToks, and Instagram reel are now in Barcelona Trip.
          </p>
          <div className="w-full rounded-[18px] border border-emerald-100 bg-emerald-50/60 px-4 py-3.5 text-left">
            <p className="text-[13px] font-bold text-emerald-800 mb-1">Waiting for your friends</p>
            <p className="text-[12px] font-medium leading-relaxed text-slate-600">
              Their saved places will appear on your trip card as they finish adding them.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-5 py-6 overflow-y-auto">
          <div className="mb-5">
            <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Barcelona Trip
            </div>
            <h1 className="text-[25px] font-extrabold text-slate-800 tracking-tight mb-2">
              Add your ideas
            </h1>
            <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
              Your saved places are scattered too. Bring them together before the group decides.
            </p>
          </div>

          <div className="space-y-3">
            {sources.map((source, index) => {
              const Icon = source.icon;
              const isSelected = selected.includes(source.id);

              return (
                <motion.button
                  type="button"
                  key={source.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => toggleSource(source.id)}
                  className={`w-full bg-white border rounded-[18px] p-4 flex items-center gap-3 text-left transition-all active:scale-[0.99] ${
                    isSelected ? 'border-primary/40 ring-1 ring-primary/15' : 'border-slate-200/70'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${source.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-extrabold text-slate-800">{source.title}</p>
                    <p className="text-[12px] font-medium text-slate-500">{source.detail}</p>
                  </div>
                  <div className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors ${
                    isSelected ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-50 text-slate-500'
                  }`}>
                    {isSelected ? 'Included' : 'Add'}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-5 rounded-[16px] border border-cyan-100 bg-cyan-50/60 px-3.5 py-3 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-[12px] text-cyan-900 font-medium leading-relaxed">
              Select your saved sources. TripFit organizes ideas; it does not invent new ones.
            </p>
          </div>
        </div>
      )}

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-3">
        {!hasAdded && (
          <p className="text-[12px] text-slate-500 font-medium text-center">
            {allSelected ? '5 ideas selected from 3 sources' : `${selectedIdeas} of 5 saved ideas selected`}
          </p>
        )}
        <button
          type="button"
          disabled={!hasAdded && !allSelected}
          onClick={() => hasAdded ? finish() : setHasAdded(true)}
          className={`w-full rounded-2xl py-4 font-bold text-[16px] transition-all flex items-center justify-center gap-2 ${
            hasAdded || allSelected
              ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30 active:scale-[0.98]'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {hasAdded && <Check className="w-5 h-5" />}
          {hasAdded ? 'Done' : 'Add 5 ideas to trip'}
        </button>
      </div>
    </motion.div>
  );
}
