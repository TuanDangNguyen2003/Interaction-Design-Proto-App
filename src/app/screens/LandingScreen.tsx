import { useNavigate } from 'react-router';
import { MapPin, Users, Sparkles, Navigation, Compass, Video } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Lina landing
      </div>

      <div className="flex-1 flex flex-col relative z-10 pt-10 px-5 pb-6 overflow-y-auto">
        
        {/* Header - Personalized Welcome */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-slate-800 tracking-tight mb-1">Hi, Lina! 👋</h1>
            <p className="text-[15px] text-slate-500 font-medium">Ready to sort out the group chaos?</p>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-slate-200">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5NDg4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Current Trip Context Card */}
        <button 
          onClick={() => navigate('/group/barcelona-ideas')}
          className="w-full text-left bg-white border border-slate-200/60 rounded-[24px] p-5 shadow-sm mb-8 relative overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <div className="bg-primary/10 text-primary p-1.5 rounded-lg">
              <MapPin className="w-4 h-4" />
            </div>
            <h2 className="text-[16px] font-extrabold text-slate-800 tracking-tight">Barcelona Trip</h2>
            <span className="ml-auto bg-slate-100 text-slate-500 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Day 2
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5 relative z-10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-blue-700 shadow-sm z-30">E</div>
              <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-emerald-700 shadow-sm z-20">L</div>
              <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-amber-700 shadow-sm z-10">S</div>
            </div>
            <p className="text-[13px] font-medium text-slate-500">
              <span className="font-bold text-slate-700">3 friends</span> waiting for a plan
            </p>
          </div>

          <div className="bg-slate-50 rounded-[16px] p-3 border border-slate-100 relative z-10">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Unsorted Group Ideas</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-pink-500" />
                <span className="text-[13px] font-bold text-slate-700">8 TikToks</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-emerald-500" />
                <span className="text-[13px] font-bold text-slate-700">5 Pins</span>
              </div>
            </div>
          </div>
        </button>

        <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
          What fits now?
        </h3>

        <div className="space-y-3.5">
          {/* Main Persona Action: Group Vibe Check */}
          <button
            onClick={() => navigate('/group/setup')}
            className="group w-full bg-white border-2 border-primary/20 rounded-[20px] p-4 text-left shadow-md shadow-primary/5 hover:border-primary/40 transition-all duration-200 active:scale-[0.98] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 pointer-events-none">
              <Sparkles className="w-4 h-4 text-amber-400 opacity-80" />
            </div>
            <div className="flex items-start gap-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center shadow-sm shadow-primary/20 shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="font-bold text-slate-800 mb-1.5 text-[16px]">Group Vibe Check</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed pr-4">
                  Turn everyone's saved TikToks and Maps pins into one clear group decision.
                </p>
                <div className="mt-3">
                  <span className="inline-flex px-3 py-1.5 bg-primary/10 text-primary text-[12px] font-bold rounded-full">
                    Start group decision
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Secondary Action: Tran's low-effort nearby flow */}
          <button
            onClick={() => navigate('/setup')}
            className="group w-full bg-white border border-slate-200 rounded-[20px] p-4 text-left shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 active:scale-[0.98]"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                <Compass className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="font-semibold text-slate-800 mb-1 text-[15px]">Low-Effort Nearby</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Tran and one friend need a practical Lyon stop before the train.
                </p>
              </div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
