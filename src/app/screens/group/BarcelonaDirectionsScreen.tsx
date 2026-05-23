import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import { AlertCircle, Check, ChevronLeft, MapPin, Navigation, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaDirectionsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBackupRoute, setIsBackupRoute] = useState(Boolean(location.state?.usedBackup));
  const route = isBackupRoute
    ? {
        name: 'Hidden Speakeasy in El Born',
        walkTime: '15 min',
        pace: 'Easy walk',
        note: 'Slightly longer walk, but calmer if Cervecería is full.',
        pin: { x: 78, y: 68 },
      }
    : {
        name: 'Cervecería Catalana',
        walkTime: '10 min',
        pace: 'Leave now',
        note: 'Leave now to keep the group on schedule for dinner.',
        pin: { x: 76, y: 29 },
      };
  const currentLocation = { x: 24, y: 58 };
  const alternateRoute = isBackupRoute ? 'Cervecería Catalana' : 'Hidden Speakeasy';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Barcelona Directions
      </div>

      <button
        onClick={() => navigate(-1)}
        className="absolute top-3 left-3 z-50 w-9 h-9 rounded-full bg-white/95 border border-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-white active:scale-[0.96] transition-all"
        aria-label="Go back"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex-1 flex flex-col">
        <div className="h-[280px] bg-[#e7e3dc] relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_42%,rgba(255,255,255,0.42)_42%_45%,transparent_45%_100%),linear-gradient(78deg,transparent_0_48%,rgba(255,255,255,0.35)_48%_51%,transparent_51%_100%)]" />
          <div className="absolute inset-0 opacity-70">
            <div className="absolute top-10 -left-10 w-[130%] h-[12px] bg-white/45 rotate-[13deg] rounded-full" />
            <div className="absolute top-40 -left-8 w-[120%] h-[14px] bg-white/55 -rotate-[6deg] rounded-full" />
            <div className="absolute top-[232px] -left-12 w-[130%] h-[10px] bg-white/35 rotate-[2deg] rounded-full" />
            <div className="absolute left-28 -top-8 w-[10px] h-[120%] bg-white/45 rotate-[3deg] rounded-full" />
            <div className="absolute right-28 -top-12 w-[12px] h-[130%] bg-white/35 -rotate-[11deg] rounded-full" />
          </div>

          <div className="absolute left-8 top-24 w-20 h-16 rounded-[18px] bg-emerald-100/45 border border-white/40" />
          <div className="absolute right-10 top-32 w-24 h-20 rounded-[20px] bg-sky-100/40 border border-white/40" />
          <div className="absolute left-16 bottom-12 w-28 h-16 rounded-[20px] bg-amber-100/45 border border-white/40" />

          <motion.svg
            key={`${route.name}-route`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 z-10 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1={currentLocation.x}
              y1={currentLocation.y}
              x2={route.pin.x}
              y2={route.pin.y}
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <motion.line
              x1={currentLocation.x}
              y1={currentLocation.y}
              x2={route.pin.x}
              y2={route.pin.y}
              stroke="#0f766e"
              strokeWidth="2.6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <motion.line
              x1={currentLocation.x}
              y1={currentLocation.y}
              x2={route.pin.x}
              y2={route.pin.y}
              stroke="#22d3ee"
              strokeWidth="1.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </motion.svg>

          <div
            className="absolute z-20 w-9 h-9 rounded-full bg-slate-800 border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${currentLocation.x}%`, top: `${currentLocation.y}%` }}
          >
            <Navigation className="w-4 h-4 text-white rotate-45" />
          </div>
          
          <motion.div
            key={route.name}
            initial={{ scale: 0.8, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 14 }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${route.pin.x}%`, top: `${route.pin.y}%` }}
          >
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45" />
          </motion.div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm border border-white">
            <span className="text-[12px] font-bold text-slate-700">{route.walkTime}</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm border border-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span className="text-[12px] font-bold text-slate-700">{route.pace}</span>
          </div>
        </div>

        <div className="flex-1 bg-white -mt-6 rounded-t-[24px] relative z-10 px-5 pt-6 pb-5 flex flex-col">
          <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-5">
            On the way
          </h1>

          <div className="bg-slate-50 border border-slate-200/60 rounded-[20px] p-5 mb-4 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Destination</p>
                <h2 className="text-[18px] font-extrabold text-slate-800">{route.name}</h2>
              </div>
              <div className="bg-teal-500/10 text-teal-600 px-3 py-1 rounded-full text-[13px] font-bold">
                {route.walkTime}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 flex gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[12px] text-amber-900 font-medium">
                {route.note}
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-100 rounded-[16px] p-4 flex justify-between items-center mb-auto">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                {isBackupRoute ? 'Best choice available' : 'Backup ready'}
              </p>
              <h3 className="text-[15px] font-bold text-slate-700">{alternateRoute}</h3>
            </div>
            <Navigation className="w-5 h-5 text-slate-300" />
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0">
        <div className="bg-slate-50 border border-slate-200/70 rounded-[22px] p-2 grid grid-cols-[1fr_auto] gap-2">
          <button
            onClick={() => navigate('/')}
            className="bg-slate-800 text-white rounded-[18px] py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" strokeWidth={3} />
            Done
          </button>
          <button
            onClick={() => setIsBackupRoute((current) => !current)}
            className="min-w-[142px] bg-white border border-teal-100 text-teal-700 rounded-[18px] px-3 py-2 font-bold text-[12px] leading-tight hover:bg-teal-50 transition-all active:scale-[0.98] flex flex-col items-center justify-center"
          >
            <span>{isBackupRoute ? 'Use best choice instead' : 'Use backup instead'}</span>
            <span className="text-[10px] text-slate-400 font-bold mt-0.5">{isBackupRoute ? '10 min route' : '15 min route'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
