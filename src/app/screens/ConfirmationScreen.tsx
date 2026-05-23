import { useNavigate } from 'react-router';
import { PartyPopper, MapPin, Share2, Undo2, Home } from 'lucide-react';

export default function ConfirmationScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Compare', active: true },
    { number: 5, label: 'Confirm', active: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Confirmation Screen
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl" />

      <div className="border-b border-teal-200/50 px-4 py-3 bg-white/60 backdrop-blur-xl relative z-10">
        <div className="flex gap-1">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex items-center">
              <div className={`h-1.5 flex-1 rounded-full ${step.active ? 'bg-gradient-to-r from-primary to-cyan-500' : 'bg-muted/50'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-8 pb-40 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white to-teal-50 rounded-3xl shadow-2xl shadow-primary/20 mb-6 border border-teal-100">
            <PartyPopper className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-[32px] font-bold text-foreground mb-3 tracking-tight">
            Decision made!
          </h1>
          <p className="text-[17px] text-muted-foreground">
            You're heading to ArtLab Café + Lakeside Stop.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-primary/5 mb-4 border border-white">
          <h3 className="font-bold text-foreground mb-4 text-[17px]">
            ArtLab Café + Lakeside Stop
          </h3>
          <div className="space-y-2.5 text-[15px] text-foreground">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              6 min walk
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Indoor
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Low effort
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Fits your 2-hour window
            </p>
            <p className="flex items-center gap-2 text-primary font-medium">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Backup saved: Covered Food Hall
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-200/50 rounded-2xl p-5 shadow-sm">
          <p className="text-[15px] text-teal-900 font-medium leading-relaxed">
            Good choice — this fits your time, energy, and weather.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-teal-200/50 p-4 max-w-[390px] mx-auto shadow-2xl">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/directions')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
          >
            <MapPin className="w-5 h-5" />
            Get directions
          </button>
          <button
            onClick={() => navigate('/share')}
            className="w-full border-2 border-border/50 text-foreground rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
          >
            <Share2 className="w-5 h-5" />
            Share with friend
          </button>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => navigate('/board')}
              className="flex-1 text-muted-foreground text-[14px] font-medium flex items-center justify-center gap-1 hover:text-foreground transition-colors"
            >
              <Undo2 className="w-4 h-4" />
              Undo choice
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex-1 text-muted-foreground text-[14px] font-medium flex items-center justify-center gap-1 hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
