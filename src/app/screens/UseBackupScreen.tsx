import { useNavigate } from 'react-router';
import { MapPin, Zap, Cloud, DollarSign } from 'lucide-react';

export default function UseBackupScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Tran Use Backup
      </div>

      <div className="border-b border-border px-4 py-4">
        <h2 className="font-medium text-foreground">Switch to backup?</h2>
      </div>

      <div className="flex-1 px-6 py-6 pb-32">
        <p className="text-[15px] text-muted-foreground mb-6 font-medium leading-relaxed">
          If the riverside café is full or Tran changes her mind, Les Halles Food Stop is ready.
        </p>

        <div className="bg-white border border-border/50 rounded-2xl p-6 shadow-lg shadow-primary/5">
          <h3 className="font-bold text-foreground mb-5 text-[18px]">
            Les Halles Food Stop
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-[14px] bg-slate-50 rounded-lg px-3 py-2.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">12 min transit</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] bg-slate-50 rounded-lg px-3 py-2.5">
              <Cloud className="w-4 h-4 text-blue-500" />
              <span className="text-foreground font-medium">Covered</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] bg-slate-50 rounded-lg px-3 py-2.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-foreground font-medium">Low effort</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] bg-slate-50 rounded-lg px-3 py-2.5">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-foreground font-medium">$</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 max-w-[390px] mx-auto shadow-2xl">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/confirmation')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
          >
            Use backup
          </button>
          <button
            onClick={() => navigate('/directions')}
            className="w-full border-2 border-border/50 text-foreground rounded-xl py-3 font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
          >
            Keep original
          </button>
        </div>
      </div>
    </div>
  );
}
