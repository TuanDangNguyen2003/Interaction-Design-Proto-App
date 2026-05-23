import { useNavigate } from 'react-router';
import { MapPin, History, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroupDashboardScreen() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Dashboard
      </div>

      <div className="absolute top-10 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="flex-1 px-5 pt-12 pb-6 overflow-y-auto z-10 flex flex-col">
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-primary/30 ring-4 ring-primary/10">
              <MapPin className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-2">TripFit</h1>
          <p className="text-[16px] text-slate-500 font-medium">What fits now?</p>
        </div>

        <div className="mb-4">
          <h2 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <History className="w-4 h-4" /> Recent Decision
          </h2>
          
          <div className="bg-white border border-slate-200/60 rounded-[24px] p-5 shadow-sm mb-3">
            <h3 className="text-[18px] font-extrabold text-slate-800 mb-2">Covered Food Market</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
              <span className="font-bold text-slate-700">Chosen because:</span> group fit, covered, low effort, moderate budget.
            </p>
            
            <div className="h-[1px] bg-slate-100 w-full mb-4" />
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Backup Ready</p>
                <p className="text-[14px] font-bold text-slate-700">Indoor Arcade Café</p>
              </div>
              <button className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                <Navigation className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => navigate('/group/setup')}
            className="group w-full bg-slate-800 text-white rounded-2xl p-4 text-left shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all duration-200 active:scale-[0.98] flex items-center justify-between"
          >
            <div>
              <h3 className="font-bold text-[16px] mb-1">Start another decision</h3>
              <p className="text-[13px] text-slate-300 font-medium">
                Find what fits your current context.
              </p>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
