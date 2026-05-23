import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Clock, Navigation } from 'lucide-react';

export default function DirectionsScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Directions Screen
      </div>

      <div className="border-b border-border px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/confirmation')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-medium text-foreground">On the way</h2>
      </div>

      <div className="flex-1 px-6 py-6 pb-32">
        <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-6 mb-4 shadow-lg shadow-primary/5 border border-teal-200/50">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-primary/20">
              <Navigation className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1.5 text-[17px]">
                ArtLab Café + Lakeside Stop
              </h3>
              <p className="text-[15px] text-muted-foreground font-medium">
                6 min walk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-[14px] text-teal-700 bg-white/60 rounded-lg px-3 py-2.5">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Leave now to stay within your 2-hour window.</span>
          </div>
        </div>

        <div className="bg-white border border-border/50 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2.5 mb-2">
            <MapPin className="w-5 h-5 text-primary" />
            <h4 className="text-[15px] font-semibold text-foreground">Backup option</h4>
          </div>
          <p className="text-[15px] text-muted-foreground font-medium">
            Covered Food Hall
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 max-w-[390px] mx-auto shadow-2xl">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
          >
            Done
          </button>
          <button
            onClick={() => navigate('/use-backup')}
            className="w-full text-muted-foreground text-[15px] font-medium hover:text-foreground transition-colors"
          >
            Use backup instead
          </button>
        </div>
      </div>
    </div>
  );
}
