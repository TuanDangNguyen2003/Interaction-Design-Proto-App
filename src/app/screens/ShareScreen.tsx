import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ChevronLeft, Copy, Check } from 'lucide-react';

export default function ShareScreen() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const message =
    "Let's do Riverside Café Walk. It fits our 2-hour window, low effort, and train schedule. Backup: Les Halles Food Stop.";

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Tran Share
      </div>

      <div className="border-b border-border px-4 py-4 flex items-center gap-3">
        <button onClick={() => navigate('/confirmation')} className="text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-medium text-foreground">Share with friend</h2>
      </div>

      <div className="flex-1 px-6 py-6">
        <h3 className="text-[14px] font-medium text-muted-foreground mb-3">
          Message preview
        </h3>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-5 mb-4 shadow-sm">
          <p className="text-[15px] text-foreground leading-relaxed font-medium">{message}</p>
        </div>

        {copied && (
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 rounded-xl px-4 py-3 mb-4 flex items-center gap-2.5 shadow-sm">
            <Check className="w-5 h-5 text-teal-700" />
            <span className="text-[14px] text-teal-700 font-semibold">Copied to clipboard</span>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-border space-y-2 bg-white">
        <button
          onClick={handleCopy}
          className="w-full bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-xl py-4 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
        >
          <Copy className="w-5 h-5" />
          Copy message
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full border-2 border-border/50 text-foreground rounded-xl py-3 font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
        >
          Done
        </button>
        <button
          onClick={() => navigate('/confirmation')}
          className="w-full text-muted-foreground text-[15px] font-medium hover:text-foreground transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}
