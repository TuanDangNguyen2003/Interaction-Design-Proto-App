import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function EditContextScreen() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    people: '2',
    time: '2 hours',
    weather: 'Rainy',
    energy: 'Low-medium',
    effort: 'Low',
    radius: '<3 km',
  });

  const chipSections = [
    {
      label: 'People',
      key: 'people',
      options: ['1', '2', 'Group'],
    },
    {
      label: 'Time left',
      key: 'time',
      options: ['1 hour', '2 hours', 'Half day'],
    },
    {
      label: 'Weather',
      key: 'weather',
      options: ['Rainy', 'Clear', 'Cold'],
    },
    {
      label: 'Energy',
      key: 'energy',
      options: ['Low', 'Low-medium', 'High'],
    },
    {
      label: 'Effort',
      key: 'effort',
      options: ['Low', 'Medium', 'Any'],
    },
    {
      label: 'Radius',
      key: 'radius',
      options: ['<1 km', '<3 km', 'Any'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Edit Context Screen
      </div>

      <div className="border-b border-border px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/sources')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-medium text-foreground">Adjust context</h2>
      </div>

      <div className="flex-1 px-6 py-6 space-y-6">
        {chipSections.map((section) => (
          <div key={section.key}>
            <p className="text-[13px] text-muted-foreground mb-3">{section.label}</p>
            <div className="flex flex-wrap gap-2">
              {section.options.map((option) => {
                const isSelected = selected[section.key as keyof typeof selected] === option;
                return (
                  <button
                    key={option}
                    onClick={() => setSelected({ ...selected, [section.key]: option })}
                    className={`px-5 py-2.5 rounded-full border-2 transition-all font-medium ${
                      isSelected
                        ? 'bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary text-primary shadow-md shadow-primary/10'
                        : 'bg-white border-border/50 text-foreground hover:border-border shadow-sm'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-border space-y-3 bg-white">
        <button
          onClick={() => navigate('/sources')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
        >
          Use this context
        </button>
        <button
          onClick={() => navigate('/sources')}
          className="w-full text-muted-foreground text-[15px] font-medium hover:text-foreground transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
