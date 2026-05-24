import { useNavigate } from 'react-router';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-teal-50/30 to-white p-6 pt-16 relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Dashboard Screen
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <MapPin className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
        </div>
        <h1 className="text-center text-[40px] font-bold text-foreground tracking-tight mb-2">TripFit</h1>
        <p className="text-center text-[18px] text-muted-foreground">What fits now?</p>
      </div>

      <div className="flex-1">
        <h2 className="text-[14px] font-medium text-muted-foreground mb-3">
          Recent decision
        </h2>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50 rounded-2xl p-6 mb-4 shadow-lg shadow-primary/5">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-primary/20">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2 text-[17px]">
                Riverside Café Walk
              </h3>
              <p className="text-[14px] text-teal-700 leading-relaxed">
                Chosen because: covered, low effort, fits 2 hours before the train.
              </p>
            </div>
          </div>

          <div className="border-t border-teal-200/50 pt-3">
            <p className="text-[14px] text-teal-700">
              <span className="font-semibold">Backup:</span> Les Halles Food Stop
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/setup')}
        className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
      >
        Start another decision
      </button>
    </div>
  );
}
