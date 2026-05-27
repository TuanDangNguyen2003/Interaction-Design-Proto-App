import { useNavigate } from 'react-router';
import { ArrowRight, CheckCircle2, Compass, Loader2, MapPin, Plus, Sparkles, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingScreenProps {
  hasBarcelonaTrip: boolean;
  barcelonaContributions: number;
}

export default function LandingScreen({ hasBarcelonaTrip, barcelonaContributions }: LandingScreenProps) {
  const navigate = useNavigate();
  const tripReady = barcelonaContributions >= 3;

  const paths = [
    {
      label: 'Create a shared trip',
      description: 'Invite travelers, gather saved places, and decide together when everyone is ready.',
      action: 'Create trip',
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
      <div className="flex-1 px-5 pt-8 pb-4 flex flex-col">
        <header className={hasBarcelonaTrip ? 'mb-5' : 'mb-6'}>
          <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-primary to-cyan-500 text-white flex items-center justify-center shadow-md shadow-primary/20 mb-3">
            <Compass className="w-5 h-5" />
          </div>
          <h1 className="text-[31px] font-extrabold text-slate-800 tracking-tight mb-1">TripFit</h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Fewer options, clearer decisions.
          </p>
        </header>

        {!hasBarcelonaTrip ? (
          <>
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
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Your trips
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 rounded-full px-2.5 py-1">
                  1 active
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/group/barcelona-create')}
                  className="h-8 rounded-full bg-white border border-slate-200 px-3 flex items-center gap-1.5 text-[11px] font-bold text-slate-600 shadow-sm active:scale-[0.98] transition-all"
                >
                  <Plus className="w-3.5 h-3.5 text-primary" />
                  New trip
                </button>
              </div>
            </div>

            <motion.button
              type="button"
              disabled={!tripReady}
              onClick={() => navigate('/group/barcelona-ideas')}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`w-full text-left bg-white border-2 border-cyan-200 rounded-[22px] shadow-sm overflow-hidden mb-5 transition-all ${
                tripReady
                  ? 'hover:border-primary/45 hover:shadow-md active:scale-[0.985]'
                  : 'cursor-default'
              }`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 rounded-full px-2.5 py-1 mb-2">
                      <Users className="w-3 h-3" />
                      Shared trip
                    </div>
                    <h3 className="text-[21px] font-extrabold text-slate-800 tracking-tight">
                      Barcelona Trip
                    </h3>
                  </div>
                  <div className="flex -space-x-2 mt-1">
                    {[
                      ['L', 'bg-cyan-100 text-cyan-700'],
                      ['E', 'bg-emerald-100 text-emerald-700'],
                      ['S', 'bg-amber-100 text-amber-700'],
                      ['E', 'bg-blue-100 text-blue-700'],
                    ].map(([initial, color], index) => (
                      <div
                        key={`${initial}-${index}`}
                        className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold ${color}`}
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <div className="bg-slate-50 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[12px] font-bold text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Barcelona
                  </div>
                  <div className="bg-slate-50 rounded-xl px-3 py-2 text-[12px] font-bold text-slate-600">
                    4 members
                  </div>
                </div>

                <div className={`rounded-[16px] px-3.5 py-3 border ${tripReady ? 'bg-emerald-50 border-emerald-100' : 'bg-cyan-50 border-cyan-100'}`}>
                  <div className="flex items-center gap-2.5 mb-2">
                    {tripReady ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Loader2 className="w-5 h-5 text-primary animate-spin shrink-0" />
                    )}
                    <div>
                      <p className={`text-[13px] font-extrabold ${tripReady ? 'text-emerald-800' : 'text-cyan-800'}`}>
                        {tripReady ? '16 ideas collected' : 'Collecting group ideas...'}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        {tripReady
                          ? 'Ready to choose what fits the group now.'
                          : `Your 5 ideas added • ${barcelonaContributions} of 3 friends contributed`}
                      </p>
                    </div>
                  </div>
                  {!tripReady && (
                    <div className="flex gap-1.5 ml-7">
                      {[0, 1, 2].map((index) => (
                        <div
                          key={index}
                          className={`h-1.5 flex-1 rounded-full transition-colors ${
                            index < barcelonaContributions ? 'bg-primary' : 'bg-cyan-100'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`w-full border-t px-4 py-3.5 flex items-center justify-between ${
                  tripReady
                    ? 'border-cyan-100 bg-cyan-50/60 text-cyan-700'
                    : 'border-slate-100 bg-slate-50 text-slate-400'
                }`}
              >
                <span className="text-[13px] font-bold">
                  {tripReady ? 'Review ideas and decide' : 'Collecting contributions'}
                </span>
                {tripReady ? <ArrowRight className="w-4.5 h-4.5" /> : <Sparkles className="w-4 h-4" />}
              </div>
            </motion.button>

            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Need something else now?
            </h2>
            <button
              type="button"
              onClick={() => navigate('/setup')}
              className="w-full bg-white border border-slate-200/70 rounded-[18px] px-4 py-3.5 flex items-center gap-3 text-left shadow-sm active:scale-[0.985] transition-all"
            >
              <div className="w-10 h-10 bg-cyan-50 text-cyan-700 rounded-xl flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-extrabold text-slate-800">Quick Low-Effort Nearby</p>
                <p className="text-[12px] font-medium text-slate-500">Find an easy option without a group trip.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </>
        )}
      </div>

    </motion.div>
  );
}
