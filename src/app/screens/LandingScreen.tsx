import { useNavigate } from 'react-router';
import { ArrowRight, Bookmark, Clock, Compass, MapPin, Navigation, TrainFront, Users, Video } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        TripFit Paths
      </div>

      <div className="flex-1 px-5 pt-11 pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <header className="mb-7">
          <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-primary to-cyan-500 text-white flex items-center justify-center shadow-md shadow-primary/20 mb-4">
            <Compass className="w-6 h-6" />
          </div>
          <h1 className="text-[30px] font-extrabold text-slate-800 tracking-tight mb-1">TripFit</h1>
          <p className="text-[15px] text-slate-500 font-medium">
            Fewer options, clearer decisions.
          </p>
        </header>

        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
            Choose a decision path
          </h2>
          <span className="text-[11px] font-bold text-slate-400">2 available</span>
        </div>

        <div className="space-y-4">
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            onClick={() => navigate('/group/barcelona-ideas')}
            className="w-full text-left bg-white border-2 border-primary/20 rounded-[22px] shadow-sm overflow-hidden hover:border-primary/45 hover:shadow-md transition-all active:scale-[0.985]"
          >
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  Group Vibe Check
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm z-30">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5NDg4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Lina"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-emerald-700 shadow-sm z-20">E</div>
                  <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-amber-700 shadow-sm z-10">S</div>
                </div>
              </div>

              <h3 className="text-[20px] font-extrabold text-slate-800 tracking-tight mb-1">
                Lina's Barcelona group
              </h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-4">
                Four friends need to turn their scattered saved ideas into one evening plan.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2 text-[12px] font-bold text-slate-700">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[12px] font-bold text-slate-700">Barcelona</span>
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-[12px] font-bold text-slate-700">2 hours</span>
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2">
                  <Video className="w-4 h-4 text-pink-500 shrink-0" />
                  <span className="text-[12px] font-bold text-slate-700">8 TikToks</span>
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-[12px] font-bold text-slate-700">5 pins</span>
                </div>
              </div>
            </div>

            <div className="border-t border-primary/10 bg-primary/[0.04] px-5 py-3.5 flex items-center justify-between">
              <span className="text-[14px] font-bold text-primary">Continue Barcelona trip</span>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.35 }}
            onClick={() => navigate('/setup')}
            className="w-full text-left bg-white border-2 border-cyan-200 rounded-[22px] shadow-sm overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all active:scale-[0.985]"
          >
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  Quick Low-Effort Nearby
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-700 border-2 border-white shadow-sm flex items-center justify-center text-[13px] font-extrabold shrink-0">
                  T
                </div>
              </div>

              <h3 className="text-[20px] font-extrabold text-slate-800 tracking-tight mb-1">
                Tran's Lyon stop
              </h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-4">
                Tran and one friend need a practical stop before their train.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2">
                  <TrainFront className="w-4 h-4 text-cyan-600 shrink-0" />
                  Lyon Perrache
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2 text-[12px] font-bold text-slate-700">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  2 hours
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2 text-[12px] font-bold text-slate-700">
                  <Bookmark className="w-4 h-4 text-cyan-600 shrink-0" />
                  Saved ideas
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2 text-[12px] font-bold text-slate-700">
                  <Users className="w-4 h-4 text-cyan-600 shrink-0" />
                  2 people
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-100 bg-cyan-50/50 px-5 py-3.5 flex items-center justify-between">
              <span className="text-[14px] font-bold text-cyan-700">Find a nearby fit</span>
              <ArrowRight className="w-5 h-5 text-cyan-700" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
