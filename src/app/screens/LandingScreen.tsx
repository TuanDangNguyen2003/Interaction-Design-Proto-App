import { useNavigate } from 'react-router';
import { ArrowRight, Compass, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function LandingScreen() {
  const navigate = useNavigate();

  const paths = [
    {
      label: 'Group Vibe Check',
      description: 'Create a shared trip, collect everyone\'s saved ideas, and reach one group decision together.',
      action: 'Start a shared decision',
      icon: Users,
      route: '/group/barcelona-create',
    },
    {
      label: 'Quick Low-Effort Nearby',
      description: 'Find a practical nearby option when you have limited time and want an easy next move.',
      action: 'Find a nearby fit',
      icon: Compass,
      route: '/setup',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col h-full bg-slate-50 relative overflow-hidden"
    >
      <div className="flex-1 px-5 pt-12 pb-4 flex flex-col">
        <header className="mb-6">
          <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-primary to-cyan-500 text-white flex items-center justify-center shadow-md shadow-primary/20 mb-3">
            <Compass className="w-5 h-5" />
          </div>
          <h1 className="text-[31px] font-extrabold text-slate-800 tracking-tight mb-1">TripFit</h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Fewer options, clearer decisions.
          </p>
        </header>

        <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
          What do you need right now?
        </h2>

        <div className="space-y-3">
          {paths.map((path, index) => {
            const Icon = path.icon;

            return (
              <motion.button
                key={path.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.08, duration: 0.35 }}
                onClick={() => navigate(path.route)}
                className="w-full text-left bg-white border-2 border-cyan-200 rounded-[20px] shadow-sm overflow-hidden hover:border-primary/45 hover:shadow-md transition-all active:scale-[0.985]"
              >
                <div className="p-4 pb-3.5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 bg-cyan-50 text-cyan-700 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] font-extrabold text-slate-800 tracking-tight">
                      {path.label}
                    </h3>
                  </div>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed pl-[52px]">
                    {path.description}
                  </p>
                </div>

                <div className="border-t border-cyan-100 bg-cyan-50/50 px-4 py-3 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-cyan-700">{path.action}</span>
                  <ArrowRight className="w-4.5 h-4.5 text-cyan-700" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
