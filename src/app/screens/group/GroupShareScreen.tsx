import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ChevronLeft, MessageSquare, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export default function GroupShareScreen() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const message = "Let's go to Covered Food Market. It fits our 3-hour window, moderate budget, medium-low energy, and covered/social vibe. Backup: Indoor Arcade Café.";

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-full bg-slate-50 relative"
    >
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
        Share
      </div>

      <div className="border-b border-slate-200/60 bg-white px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate('/group/confirmation')} className="text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Share with group</h1>
      </div>

      <div className="flex-1 px-5 py-6 overflow-y-auto">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <h1 className="text-[24px] font-extrabold text-slate-800 tracking-tight mb-6 text-center">
          Send to the group chat
        </h1>

        <div className="bg-white border border-slate-200/60 rounded-[20px] shadow-sm overflow-hidden relative">
          <div className="bg-slate-100/50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Message Preview</p>
            <button 
              onClick={handleCopy}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <div className="p-5">
            <p className="text-[15px] text-slate-700 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-slate-200/60 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 space-y-3">
        <button
          onClick={handleCopy}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Copied!' : 'Copy message'}
        </button>
        <button
          onClick={() => navigate('/group/dashboard')}
          className="w-full bg-slate-800 text-white rounded-2xl py-3.5 font-bold text-[15px] shadow-lg shadow-slate-800/20 hover:bg-slate-700 transition-all active:scale-[0.98]"
        >
          Done
        </button>
        <button
          onClick={() => navigate('/group/confirmation')}
          className="w-full text-slate-500 text-[14px] font-bold hover:text-slate-800 transition-colors py-1.5"
        >
          Back
        </button>
      </div>
    </motion.div>
  );
}
