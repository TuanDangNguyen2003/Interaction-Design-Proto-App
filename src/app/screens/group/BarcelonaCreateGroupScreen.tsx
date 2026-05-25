import { useNavigate } from 'react-router';
import { ArrowRight, ChevronLeft, Globe2, MapPin, Plus, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaCreateGroupScreen() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/')} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Go back">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1.5">
          {[true, false, false].map((active, index) => (
            <div key={index} className={`h-1.5 flex-1 rounded-full ${active ? 'bg-primary' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-7">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Shared trip
          </div>
          <h1 className="text-[27px] font-extrabold text-slate-800 tracking-tight mb-2">
            Create a shared trip
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
            Give everyone one place to drop the spots they already saved.
          </p>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-[22px] p-5 shadow-sm mb-5 space-y-4">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Group name</p>
            <div className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-bold text-slate-800">
              Barcelona Trip
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Location</p>
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-[13px] font-bold text-slate-700">Barcelona</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Visibility</p>
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-[13px] font-bold text-slate-700">Invited only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-100 rounded-[18px] p-4 flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Start with an empty idea pool</p>
            <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
              Friends will add links, pins, and saved places after joining.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0">
        <button
          onClick={() => navigate('/group/barcelona-invite')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-4 font-bold text-[16px] shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Create group
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
