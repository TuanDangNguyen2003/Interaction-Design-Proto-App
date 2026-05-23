import { useNavigate } from 'react-router';
import { ChevronLeft, X } from 'lucide-react';

export default function FilteredOptionsScreen() {
  const navigate = useNavigate();

  const filteredOptions = [
    {
      name: 'Outdoor viewpoint',
      reason: 'Removed because rainy',
      icon: '☔',
    },
    {
      name: 'Far museum',
      reason: 'Removed because 35 min away',
      icon: '📏',
    },
    {
      name: 'Restaurant queue',
      reason: 'Removed because uncertain wait',
      icon: '⏱️',
    },
    {
      name: 'Long activity',
      reason: 'Removed because exceeds 2 hours',
      icon: '⏳',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Filtered Options Screen
      </div>

      <div className="border-b border-border px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/board')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-medium text-foreground">Why these were filtered out</h2>
      </div>

      <div className="flex-1 px-6 py-6">
        <p className="text-[15px] text-muted-foreground mb-6 font-medium leading-relaxed">
          These options didn't match your context.
        </p>

        <div className="space-y-3">
          {filteredOptions.map((option) => (
            <div
              key={option.name}
              className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-5 flex items-start gap-3 shadow-sm"
            >
              <span className="text-3xl">{option.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1.5 text-[16px]">{option.name}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{option.reason}</p>
              </div>
              <X className="w-5 h-5 text-red-400" strokeWidth={2.5} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-border bg-white">
        <button
          onClick={() => navigate('/board')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
        >
          Back to decision board
        </button>
      </div>
    </div>
  );
}
