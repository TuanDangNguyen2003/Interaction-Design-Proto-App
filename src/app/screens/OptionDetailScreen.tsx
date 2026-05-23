import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export default function OptionDetailScreen() {
  const navigate = useNavigate();

  const fitBars = [
    { label: 'Time fit', level: 'Strong', width: '100%' },
    { label: 'Weather fit', level: 'Strong', width: '100%' },
    { label: 'Energy fit', level: 'Strong', width: '100%' },
    { label: 'Budget fit', level: 'Strong', width: '100%' },
    { label: 'Discovery value', level: 'Medium', width: '60%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Option Detail Screen
      </div>

      <div className="border-b border-border px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/compare')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-medium text-foreground">Option detail</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="h-48 bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 relative overflow-hidden">
          {/* Placeholder for ArtLab Café image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-white/80 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[12px] text-primary/70 font-medium">ArtLab Café Image</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-[20px] font-semibold text-foreground mb-2.5">
            ArtLab Café + Lakeside Stop
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {['6 min walk', 'Indoor', '$', 'Very low effort', 'Open now'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/30 rounded-full text-[11px] text-foreground font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
              Why this fits now
            </h3>
            <p className="text-[13px] text-foreground leading-relaxed font-medium">
              Best match for a rainy 2-hour window: close enough, low effort, affordable, indoor,
              and relaxed for two people.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
              Fit breakdown
            </h3>
            <div className="space-y-3">
              {fitBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[13px] text-foreground font-medium">{bar.label}</span>
                    <span className="text-[11px] text-primary font-semibold">{bar.level}</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full shadow-sm transition-all duration-500"
                      style={{ width: bar.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
              Trade-off
            </h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
              Less unique than the museum, but easier and safer for the current situation.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border p-4 bg-white">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/backup-selection')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-3.5 font-semibold shadow-lg shadow-primary/30"
          >
            Choose this
          </button>
          <button
            onClick={() => navigate('/backup-saved')}
            className="w-full border-2 border-border/50 text-foreground rounded-xl py-2.5 font-semibold"
          >
            Keep as backup
          </button>
          <button
            onClick={() => navigate('/compare')}
            className="w-full text-muted-foreground text-[14px] font-medium hover:text-foreground transition-colors"
          >
            Back to comparison
          </button>
        </div>
      </div>
    </div>
  );
}
