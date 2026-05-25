import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, CheckCircle2, ChevronLeft, Loader2, MapPin, MessageCircle, Video } from 'lucide-react';
import { motion } from 'motion/react';

const contributions = [
  { name: 'Emma', source: 'TikTok links', amount: '8 ideas', icon: Video, color: 'text-pink-500 bg-pink-50' },
  { name: 'Sofia', source: 'Chat recommendations', amount: '3 ideas', icon: MessageCircle, color: 'text-amber-600 bg-amber-50' },
  { name: 'Elena', source: 'Google Maps pins', amount: '5 ideas', icon: MapPin, color: 'text-emerald-600 bg-emerald-50' },
] as const;

export default function BarcelonaCollectIdeasScreen() {
  const navigate = useNavigate();
  const [receivedCount, setReceivedCount] = useState(0);
  const isReady = receivedCount === contributions.length;

  useEffect(() => {
    if (receivedCount >= contributions.length) return;

    const timer = setTimeout(() => {
      setReceivedCount((current) => current + 1);
    }, 650);

    return () => clearTimeout(timer);
  }, [receivedCount]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/barcelona-invite')} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Go back">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {[true, true, true].map((active, index) => (
            <div key={index} className={`h-1.5 flex-1 rounded-full ${active ? 'bg-primary' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-7 text-center">
          <div className="inline-flex w-16 h-16 bg-white rounded-[20px] shadow-sm border border-slate-100 items-center justify-center mb-5">
            {isReady ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            ) : (
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            )}
          </div>
          <h1 className="text-[25px] font-extrabold text-slate-800 tracking-tight mb-2">
            {isReady ? 'Shared ideas are ready' : 'Collecting saved ideas'}
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
            {isReady ? 'Everything is together in the Barcelona Trip pool.' : 'Friends are adding the places they already saved.'}
          </p>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-[22px] p-4 shadow-sm space-y-3">
          {contributions.map((contribution, index) => {
            const Icon = contribution.icon;
            const received = index < receivedCount;
            const receiving = index === receivedCount && !isReady;

            return (
              <div key={contribution.name} className={`rounded-[16px] border p-3 flex items-center gap-3 transition-all ${
                received ? 'border-slate-100 bg-slate-50' : 'border-dashed border-slate-200 opacity-55'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${received ? contribution.color : 'bg-slate-100 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-extrabold text-slate-800">{contribution.name}</p>
                  <p className="text-[12px] font-medium text-slate-500">
                    {received ? `${contribution.amount} from ${contribution.source}` : contribution.source}
                  </p>
                </div>
                {received ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : receiving ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : null}
              </div>
            );
          })}
        </div>

        {isReady && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-cyan-50 border border-cyan-100 rounded-[16px] p-4 text-center"
          >
            <p className="text-[13px] font-bold text-cyan-800">
              16 shared ideas are waiting to be sorted.
            </p>
          </motion.div>
        )}
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0">
        <button
          disabled={!isReady}
          onClick={() => navigate('/group/barcelona-ideas')}
          className={`w-full rounded-2xl py-4 font-bold text-[16px] transition-all flex items-center justify-center gap-2 ${
            isReady
              ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30 active:scale-[0.98]'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          Open shared idea pool
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
