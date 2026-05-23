import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Video, Navigation, Instagram, MessageCircle, Sparkles, Filter, Link2 } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function BarcelonaIdeasScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Screen Label */}
      <div className="absolute top-2 right-2 z-50 bg-slate-800 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
        Barcelona Ideas
      </div>

      {/* Header */}
      <div className="px-5 pt-4 pb-2 bg-white sticky top-0 z-40 border-b border-slate-100 shadow-sm flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>
        <div className="text-center">
          <h1 className="text-[15px] font-bold text-slate-800">Barcelona Trip</h1>
          <p className="text-[11px] text-slate-500 font-medium">Unsorted Ideas</p>
        </div>
        <button className="p-2 -mr-2 rounded-full hover:bg-slate-100 transition-colors">
          <Filter className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-24">
        
        {/* Context Stats */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="bg-white border border-slate-200 px-3 py-2 rounded-[16px] flex items-center gap-2 shrink-0 shadow-sm">
            <Video className="w-4 h-4 text-pink-500" />
            <span className="text-[13px] font-bold text-slate-700">8 TikToks</span>
          </div>
          <div className="bg-white border border-slate-200 px-3 py-2 rounded-[16px] flex items-center gap-2 shrink-0 shadow-sm">
            <Navigation className="w-4 h-4 text-emerald-500" />
            <span className="text-[13px] font-bold text-slate-700">5 Pins</span>
          </div>
          <div className="bg-white border border-slate-200 px-3 py-2 rounded-[16px] flex items-center gap-2 shrink-0 shadow-sm">
            <Instagram className="w-4 h-4 text-fuchsia-500" />
            <span className="text-[13px] font-bold text-slate-700">3 Reels</span>
          </div>
        </div>

        {/* Ideas Feed */}
        <div className="space-y-4">
          <h2 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider px-1">Added recently</h2>

          {/* Item 1 - TikTok */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBiZWFjaHxlbnwwfHx8fDE3Nzk0OTA4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach club"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Video className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">"Must visit beach club in BCN 🏖️✨"</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">tiktok.com/@travelwithme/video...</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-white flex items-center justify-center text-[9px] font-bold text-emerald-700">L</div>
                  <span className="text-[11px] font-medium text-slate-400">Emma added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 2 - Maps Pin */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
               <ImageWithFallback 
                src="https://images.unsplash.com/photo-1583422409516-2895a77efded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXBhc3xlbnwwfHx8fDE3Nzk0OTA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tapas"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Navigation className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">Cervecería Catalana</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">C/ de Mallorca, 236</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5NDg4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Lina"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">You added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 3 - Message Link */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
             <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1539037116277-4db202017326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJjJTIwZ3VlbGx8ZW58MHx8fHwxNzc5NDkwODYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Parc Guell"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-2 mb-1">"Sarah said we have to do the sunrise tour here!"</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                   <div className="w-5 h-5 rounded-full bg-amber-100 border border-white flex items-center justify-center text-[9px] font-bold text-amber-700">S</div>
                  <span className="text-[11px] font-medium text-slate-400">Sarah added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>
          
           {/* Item 4 - Instagram */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
               <ImageWithFallback 
                src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWVsbGF8ZW58MHx8fHwxNzc5NDkwODk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Paella"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Instagram className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">Best Paella spot 🔥</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">instagram.com/p/Cxa2...</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                   <div className="w-5 h-5 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[9px] font-bold text-blue-700">E</div>
                  <span className="text-[11px] font-medium text-slate-400">Elena added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 5 - Maps Pin */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
               <ImageWithFallback 
                src="https://images.unsplash.com/photo-1583422409516-2895a77efded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWdyYWRhJTIwZmFtaWxpYSUyMGJhcmNlbG9uYXxlbnwxfHx8fDE3Nzk0OTExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sagrada Familia"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Navigation className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">Sagrada Família</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">C/ de Mallorca, 401</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5NDg4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Lina"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">You added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 6 - TikTok */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1666632836815-6496482616b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2Vhc3klMjBjb2NrdGFpbCUyMGJhcnxlbnwxfHx8fDE3Nzk0OTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Speakeasy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Video className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">"Hidden speakeasy in El Born 🍸"</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">tiktok.com/@barcelonadrinks...</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                   <div className="w-5 h-5 rounded-full bg-amber-100 border border-white flex items-center justify-center text-[9px] font-bold text-amber-700">S</div>
                  <span className="text-[11px] font-medium text-slate-400">Sarah added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 7 - Instagram */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
            <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzdG9yZSUyMHNob3BwaW5nfGVufDF8fHx8MTc3OTQ5MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vintage Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <Instagram className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-1 mb-1">Vintage finds in Raval 👗</h3>
                <p className="text-[12px] text-slate-500 line-clamp-1">instagram.com/reel/Czb3...</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-white flex items-center justify-center text-[9px] font-bold text-emerald-700">E</div>
                  <span className="text-[11px] font-medium text-slate-400">Emma added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Item 8 - Message Link */}
          <div className="bg-white rounded-[20px] p-3 border border-slate-200/60 shadow-sm flex gap-3">
             <div className="w-20 h-20 rounded-[12px] overflow-hidden shrink-0 bg-slate-100 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1569847085430-850fe12a553b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBnb3RoaWMlMjBxdWFydGVyJTIwc3RyZWV0fGVufDF8fHx8MTc3OTQ5MTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gothic Quarter"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-[14px] font-bold text-slate-800 leading-tight line-clamp-2 mb-1">"Let's just walk around the Gothic Quarter for an afternoon!"</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                   <div className="w-5 h-5 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[9px] font-bold text-blue-700">E</div>
                  <span className="text-[11px] font-medium text-slate-400">Elena added</span>
                </div>
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent pt-10 z-50">
        <button
          onClick={() => navigate('/group/barcelona-setup')}
          className="w-full bg-primary text-white font-bold py-4 px-6 rounded-[20px] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all"
        >
          <Sparkles className="w-5 h-5" />
          <span>Start Group Vibe Check</span>
        </button>
      </div>
    </div>
  );
}