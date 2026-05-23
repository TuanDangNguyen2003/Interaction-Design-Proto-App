import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupEditContextScreen() {
  const navigate = useNavigate();

  const [selections, setSelections] = useState<Record<string, string[]>>({
    groupSize: ['4'],
    timeLeft: ['3 hours'],
    budget: ['Moderate'],
    energy: ['Medium-low'],
    weather: ['Covered'],
    vibe: ['Social', 'Food'],
  });

  const toggleSelection = (category: string, value: string, multiple = false) => {
    setSelections(prev => {
      const current = prev[category] || [];
      if (multiple) {
        if (current.includes(value)) {
          return { ...prev, [category]: current.filter(v => v !== value) };
        } else {
          return { ...prev, [category]: [...current, value] };
        }
      } else {
        return { ...prev, [category]: [value] };
      }
    });
  };

  const sections = [
    { id: 'groupSize', label: 'Group size', options: ['2', '3', '4', '5+'] },
    { id: 'timeLeft', label: 'Time left', options: ['1 hour', '2 hours', '3 hours', 'Half day'] },
    { id: 'budget', label: 'Budget', options: ['Low', 'Moderate', 'Flexible'] },
    { id: 'energy', label: 'Energy', options: ['Low', 'Medium-low', 'Medium', 'High'] },
    { id: 'weather', label: 'Weather preference', options: ['Indoor', 'Covered', 'Outdoor ok'] },
    { id: 'vibe', label: 'Vibe', options: ['Calm', 'Social', 'Food', 'Scenic', 'Unique'], multiple: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Edit Context
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Adjust group context</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="space-y-7 pb-6">
          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                {section.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {section.options.map((opt) => {
                  const isSelected = selections[section.id]?.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleSelection(section.id, opt, section.multiple)}
                      className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all active:scale-[0.97] ${
                        isSelected 
                          ? 'bg-primary text-white shadow-md shadow-primary/20' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shrink-0 space-y-2.5">
        <button
          onClick={() => navigate('/group/sources')}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98]"
        >
          Use this context
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full text-slate-500 text-[14px] font-bold hover:text-slate-800 transition-colors py-1.5"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
}
