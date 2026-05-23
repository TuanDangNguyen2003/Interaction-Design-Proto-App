import { useNavigate, useLocation } from 'react-router';
import { Map, MapPin, Navigation, Compass, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function BarcelonaDirectionsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const isBackup = location.state?.usedBackup;
  const destinationName = isBackup ? 'Hidden Speakeasy in El Born' : 'Cervecería Catalana';
  const walkTime = isBackup ? '15 min' : '10 min';

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

      <div className="flex-1 flex flex-col">
        {/* Faux map background */}
        <div className="h-[280px] bg-[#e5e3df] relative overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-20">
            {/* Simple map lines using CSS */}
            <div className="absolute top-1/4 left-0 w-full h-[6px] bg-white transform rotate-12" />
            <div className="absolute top-1/2 left-0 w-full h-[8px] bg-white transform -rotate-6" />
            <div className="absolute left-1/3 top-0 w-[4px] h-full bg-white transform rotate-3" />
            <div className="absolute left-2/3 top-0 w-[6px] h-full bg-white transform -rotate-12" />
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45" />
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm">
            <span className="text-[12px] font-bold text-slate-700">{walkTime}</span>
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
                <h2 className="text-[18px] font-extrabold text-slate-800">{destinationName}</h2>
              </div>
              <div className="bg-teal-500/10 text-teal-600 px-3 py-1 rounded-full text-[13px] font-bold">
                {walkTime}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 flex gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[12px] text-amber-900 font-medium">
                Leave now to keep the group on schedule for dinner.
              </p>
            </div>
          </div>

          {!isBackup && (
            <div className="bg-white border-2 border-slate-100 rounded-[16px] p-4 flex justify-between items-center mb-auto">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Backup Ready</p>
                <h3 className="text-[15px] font-bold text-slate-700">Hidden Speakeasy</h3>
              </div>
              <Navigation className="w-5 h-5 text-slate-300" />
            </div>
          )}
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-3">
        <button
          onClick={() => navigate('/')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98]"
        >
          Done
        </button>
        <button
          onClick={() => navigate('/group/barcelona-backup-selection', { state: { previousOption: destinationName } })}
          className="w-full bg-white border border-slate-200 text-slate-600 rounded-2xl py-3.5 font-bold text-[15px] hover:bg-slate-50 transition-all active:scale-[0.98]"
        >
          Use backup instead
        </button>
      </div>
    </motion.div>
  );
}
