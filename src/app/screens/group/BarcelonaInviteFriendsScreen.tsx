import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronLeft, Link2, Loader2, Radar, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const friends = [
  { name: 'Emma', initials: 'E', detail: 'Saved food and cafe spots', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Sofia', initials: 'S', detail: 'Saved nightlife reels', color: 'bg-amber-100 text-amber-700' },
  { name: 'Elena', initials: 'E', detail: 'Saved map pins', color: 'bg-blue-100 text-blue-700' },
] as const;

export default function BarcelonaInviteFriendsScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const [hasScanned, setHasScanned] = useState(false);
  const allSelected = selected.length === friends.length;

  useEffect(() => {
    const timer = setTimeout(() => setHasScanned(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  const toggleFriend = (name: string) => {
    setSelected((current) => current.includes(name)
      ? current.filter((item) => item !== name)
      : [...current, name]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/barcelona-create')} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Go back">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {[true, true, false].map((active, index) => (
            <div key={index} className={`h-1.5 flex-1 rounded-full ${active ? 'bg-primary' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider mb-4">
            <Check className="w-3.5 h-3.5" />
            Barcelona Trip created
          </div>
          <h1 className="text-[27px] font-extrabold text-slate-800 tracking-tight mb-2">
            Add your friends
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
            Invite the travelers who can contribute their saved places.
          </p>
        </div>

        {!hasScanned ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-slate-200/60 rounded-[22px] py-10 px-5 flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-50 text-primary flex items-center justify-center relative mb-5">
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ repeat: Infinity, duration: 1.25, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border border-primary/30"
              />
              <Radar className="w-7 h-7" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
              <p className="text-[15px] font-extrabold text-slate-800">Scanning nearby friends</p>
            </div>
            <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
              Finding people close by who can join this shared trip.
            </p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
                3 nearby friends found
              </p>
            </div>
            <div className="space-y-3 mb-5">
              {friends.map((friend, index) => {
                const isSelected = selected.includes(friend.name);

                return (
                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={friend.name}
                    onClick={() => toggleFriend(friend.name)}
                    className={`w-full bg-white border rounded-[18px] p-4 flex items-center gap-3 text-left transition-all active:scale-[0.99] ${
                      isSelected ? 'border-primary/40 ring-1 ring-primary/15' : 'border-slate-200/60 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold ${friend.color}`}>
                      {friend.initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-extrabold text-slate-800">{friend.name}</p>
                      <p className="text-[12px] font-medium text-slate-500">{friend.detail}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-primary text-white' : 'border-2 border-slate-200'
                    }`}>
                      {isSelected && <Check className="w-4 h-4" strokeWidth={3} />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <button className="w-full bg-white border border-dashed border-slate-300 rounded-[16px] py-3 flex items-center justify-center gap-2 text-slate-500 font-bold text-[13px]">
              <Link2 className="w-4 h-4" />
              Invite with group link
            </button>
          </motion.div>
        )}
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-3">
        <p className="text-[12px] text-slate-500 font-medium text-center">
          {!hasScanned
            ? 'Looking for nearby friends...'
            : allSelected
              ? '3 friends selected and ready to invite'
              : 'Select Emma, Sofia, and Elena to continue'}
        </p>
        <button
          disabled={!allSelected}
          onClick={() => navigate('/group/barcelona-collect')}
          className={`w-full rounded-2xl py-4 font-bold text-[16px] transition-all flex items-center justify-center gap-2 ${
            allSelected
              ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30 active:scale-[0.98]'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
          {hasScanned ? 'Invite friends' : 'Scanning nearby friends'}
        </button>
      </div>
    </motion.div>
  );
}
