import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export default function ComparisonScreen() {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Context', active: true },
    { number: 2, label: 'Sources', active: true },
    { number: 3, label: 'Decision Board', active: true },
    { number: 4, label: 'Compare', active: true },
    { number: 5, label: 'Confirm', active: false },
  ];

  const options = [
    {
      name: 'ArtLab Café + Lakeside',
      scores: {
        'Time fit': 'Strong',
        'Weather fit': 'Strong',
        'Energy fit': 'Strong',
        'Discovery value': 'Medium',
        'Price': 'Strong',
        'Risk': 'Strong',
      },
    },
    {
      name: 'Lausanne Design Museum',
      scores: {
        'Time fit': 'Medium',
        'Weather fit': 'Strong',
        'Energy fit': 'Medium',
        'Discovery value': 'Strong',
        'Price': 'Medium',
        'Risk': 'Medium',
      },
    },
    {
      name: 'Covered Food Hall',
      scores: {
        'Time fit': 'Strong',
        'Weather fit': 'Medium',
        'Energy fit': 'Strong',
        'Discovery value': 'Weak',
        'Price': 'Strong',
        'Risk': 'Strong',
      },
    },
  ];

  const getColor = (value: string) => {
    if (value === 'Strong') return 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border border-teal-200/50';
    if (value === 'Medium') return 'bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200/50';
    return 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-200/50';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Comparison Screen
      </div>

      <div className="border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate('/board')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex gap-1">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex items-center">
              <div className={`h-1 flex-1 rounded ${step.active ? 'bg-primary' : 'bg-muted'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <h1 className="text-[22px] font-bold text-foreground mb-1.5 tracking-tight">
          Compare trade-offs
        </h1>
        <p className="text-[14px] text-muted-foreground mb-4 font-medium">
          Not more options — clearer choice.
        </p>

        <div className="space-y-3 mb-4">
          {options.map((option) => (
            <div
              key={option.name}
              className="bg-white border border-border/50 rounded-2xl p-4 shadow-sm"
            >
              <h3 className="font-bold text-foreground text-[15px] mb-3">{option.name}</h3>
              <div className="space-y-2">
                {Object.entries(option.scores).map(([criterion, value]) => (
                  <div key={criterion} className="flex items-center justify-between">
                    <span className="text-[13px] text-muted-foreground font-medium">
                      {criterion}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold shadow-sm ${getColor(
                        value
                      )}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50 rounded-2xl p-4 shadow-sm mb-4">
          <p className="text-[14px] font-bold text-teal-900 mb-1.5">
            Best compromise: ArtLab Café + Lakeside Stop
          </p>
          <p className="text-[13px] text-teal-700 leading-relaxed">
            Closest, indoor, low effort, and safest for rain.
          </p>
        </div>
      </div>

      <div className="border-t border-border p-4 bg-white">
        <div className="space-y-2">
          <button
            onClick={() => navigate('/detail')}
            className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-3.5 font-semibold shadow-lg shadow-primary/30"
          >
            View best option
          </button>
          <button
            onClick={() => navigate('/board')}
            className="w-full text-muted-foreground text-[14px] font-medium hover:text-foreground transition-colors"
          >
            Back to board
          </button>
        </div>
      </div>
    </div>
  );
}
