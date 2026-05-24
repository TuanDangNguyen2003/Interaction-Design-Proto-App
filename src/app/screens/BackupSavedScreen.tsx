import { useNavigate } from 'react-router';
import { CheckCircle2 } from 'lucide-react';

export default function BackupSavedScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Tran Backup Saved
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-primary/10 border border-teal-200/50">
          <CheckCircle2 className="w-10 h-10 text-primary" strokeWidth={2.5} />
        </div>

        <h1 className="text-[28px] font-bold text-foreground mb-3 text-center tracking-tight">
          Added to backup
        </h1>

        <p className="text-[16px] text-muted-foreground text-center mb-8 max-w-sm leading-relaxed">
          Riverside Café Walk is saved as a backup.
        </p>
      </div>

      <div className="p-6 border-t border-border space-y-2 bg-white">
        <button
          onClick={() => navigate('/board')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
        >
          Return to decision board
        </button>
        <button
          onClick={() => navigate('/backup-selection')}
          className="w-full border-2 border-border/50 text-foreground rounded-xl py-3 font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
        >
          Choose this instead
        </button>
      </div>
    </div>
  );
}
