import { useNavigate } from 'react-router';
import { CheckCircle2, Clock } from 'lucide-react';

export default function BackupSelectionScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Backup Selection Screen
      </div>

      <div className="border-b border-border px-4 py-4">
        <h2 className="font-medium text-foreground">Save a backup</h2>
      </div>

      <div className="flex-1 px-6 py-6 pb-32">
        <p className="text-[15px] text-muted-foreground mb-6 font-medium leading-relaxed">
          Travel plans can change.
        </p>

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Main choice</h3>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50 rounded-2xl p-5 shadow-sm">
            <h4 className="font-bold text-foreground mb-2 text-[17px]">
              ArtLab Café + Lakeside Stop
            </h4>
            <p className="text-[14px] text-teal-700 leading-relaxed">
              Closest, indoor, low effort.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Suggested backup</h3>
          </div>
          <div className="bg-white border border-border/50 rounded-2xl p-5 shadow-sm">
            <h4 className="font-bold text-foreground mb-2 text-[17px]">
              Covered Food Hall
            </h4>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Covered, relaxed, good if you want food or a longer sit-down stop.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 max-w-[390px] mx-auto shadow-2xl">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/confirmation')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
          >
            Save backup
          </button>
          <button
            onClick={() => navigate('/confirmation')}
            className="w-full border-2 border-border/50 text-foreground rounded-xl py-3 font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
          >
            Skip backup
          </button>
          <button
            onClick={() => navigate('/board')}
            className="w-full text-muted-foreground text-[15px] font-medium hover:text-foreground transition-colors"
          >
            Change main choice
          </button>
        </div>
      </div>
    </div>
  );
}
