import { useState, useEffect } from "react";
import { Image, FileText, Music, Video, Wand2, Play } from "lucide-react";

const AICreativeDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const tabs = [
    { icon: Image, label: "Image", color: "cyan" },
    { icon: FileText, label: "Text", color: "emerald" },
    { icon: Music, label: "Audio", color: "gold" },
    { icon: Video, label: "Video", color: "lavender" },
  ];

  // Auto-cycle through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Simulate generation progress
  useEffect(() => {
    setIsGenerating(true);
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsGenerating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(progressInterval);
  }, [activeTab]);

  return (
    <div className="relative w-full aspect-[3/2] sm:aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 h-6 sm:h-10 bg-black/30 backdrop-blur-sm border-b border-white/10 flex items-center px-1.5 sm:px-4 gap-1 sm:gap-2">
        <div className="flex gap-0.5 sm:gap-1.5">
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-[8px] sm:text-xs text-white/50 font-medium">AI Creative Studio</span>
        </div>
        <Play className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-cyan" />
      </div>

      {/* Main content area */}
      <div className="absolute top-6 sm:top-10 bottom-0 left-0 right-0 p-1.5 sm:p-4 flex flex-col">
        {/* Tool tabs */}
        <div className="flex gap-0.5 sm:gap-2 mb-1.5 sm:mb-4 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-0.5 sm:gap-1.5 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded sm:rounded-lg text-[8px] sm:text-xs font-medium transition-all flex-shrink-0 ${
                activeTab === index
                  ? "bg-cyan/20 text-cyan border border-cyan/30"
                  : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"
              }`}
            >
              <tab.icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Canvas area */}
        <div className="flex-1 relative bg-black/30 rounded sm:rounded-xl border border-white/10 overflow-hidden min-h-0">
          {/* Image generation demo */}
          {activeTab === 0 && (
            <div className="absolute inset-0 flex items-center justify-center p-1.5 sm:p-2">
              <div className="relative w-full max-w-[80%] aspect-square">
                {/* Animated gradient background simulating generation */}
                <div 
                  className="absolute inset-0 rounded sm:rounded-xl overflow-hidden"
                  style={{
                    background: `conic-gradient(from ${progress * 3.6}deg, hsl(189 100% 50% / 0.3), hsl(165 100% 39% / 0.3), hsl(274 65% 46% / 0.3), hsl(189 100% 50% / 0.3))`,
                  }}
                >
                  <div className="absolute inset-0.5 sm:inset-2 bg-slate-900/90 rounded sm:rounded-lg flex items-center justify-center">
                    {progress < 100 ? (
                      <div className="text-center">
                        <div className="w-6 h-6 sm:w-16 sm:h-16 mx-auto mb-1 sm:mb-3 rounded-full border-2 border-cyan/30 border-t-cyan animate-spin" />
                        <span className="text-cyan text-[8px] sm:text-sm font-medium">Generating...</span>
                      </div>
                    ) : (
                      <div className="relative w-full h-full p-1 sm:p-4">
                        <div className="w-full h-full bg-gradient-to-br from-cyan/20 via-emerald/20 to-lavender/20 rounded sm:rounded-lg animate-pulse flex items-center justify-center">
                          <Image className="w-5 h-5 sm:w-12 sm:h-12 text-white/40" />
                        </div>
                        <div className="absolute bottom-1.5 sm:bottom-6 left-1 right-1 sm:left-6 sm:right-6 bg-black/60 backdrop-blur-sm rounded sm:rounded-lg px-1.5 py-0.5 sm:px-3 sm:py-2">
                          <span className="text-[7px] sm:text-xs text-emerald">✓ AI artwork ready</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Text generation demo */}
          {activeTab === 1 && (
            <div className="absolute inset-1 sm:inset-4 flex flex-col">
              <div className="bg-white/5 rounded sm:rounded-lg p-1.5 sm:p-3 mb-1 sm:mb-3 border border-white/10">
                <span className="text-[7px] sm:text-xs text-white/40">Prompt:</span>
                <p className="text-[8px] sm:text-sm text-white/80 mt-0.5 line-clamp-1">"Write a creative description..."</p>
              </div>
              <div className="flex-1 bg-white/5 rounded sm:rounded-lg p-1.5 sm:p-3 border border-white/10 overflow-hidden">
                <span className="text-[7px] sm:text-xs text-emerald mb-1 block">AI Response:</span>
                <div className="space-y-0.5 sm:space-y-2">
                  {[0, 1, 2].map((line) => (
                    <div 
                      key={line}
                      className="h-1.5 sm:h-3 bg-gradient-to-r from-white/20 to-transparent rounded animate-pulse"
                      style={{ 
                        width: `${Math.max(30, 100 - line * 20)}%`,
                        animationDelay: `${line * 0.2}s`,
                        opacity: progress > (line + 1) * 25 ? 1 : 0.3
                      }}
                    />
                  ))}
                </div>
                {progress === 100 && (
                  <div className="mt-1 sm:mt-3 text-[7px] sm:text-xs text-emerald animate-fade-in">
                    ✓ 150 words generated
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Audio generation demo */}
          {activeTab === 2 && (
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-6">
              <div className="w-full">
                <div className="flex items-end justify-center gap-px sm:gap-1 h-10 sm:h-24 mb-1 sm:mb-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 sm:w-1.5 bg-gradient-to-t from-gold/60 to-gold rounded-full transition-all"
                      style={{
                        height: `${20 + Math.sin((i + progress / 10) * 0.5) * 40 + Math.random() * 20}%`,
                        opacity: progress > (i / 16) * 100 ? 1 : 0.2,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[7px] sm:text-xs text-white/40">
                  <span>0:00</span>
                  <span className="text-gold">{isGenerating ? "Composing..." : "✓ Ready"}</span>
                  <span>2:30</span>
                </div>
              </div>
            </div>
          )}

          {/* Video generation demo */}
          {activeTab === 3 && (
            <div className="absolute inset-0 flex items-center justify-center p-1.5 sm:p-4">
              <div className="relative w-full aspect-video bg-black/50 rounded sm:rounded-lg overflow-hidden border border-white/10">
                {/* Video timeline simulation */}
                <div className="absolute inset-0 flex">
                  {[0, 1, 2, 3, 4].map((frame) => (
                    <div 
                      key={frame}
                      className="flex-1 border-r border-white/10 last:border-r-0 relative overflow-hidden"
                      style={{
                        opacity: progress > (frame + 1) * 20 ? 1 : 0.3
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-lavender/20 to-cyan/10"
                        style={{
                          transform: `translateX(${progress < (frame + 1) * 20 ? 100 : 0}%)`,
                          transition: 'transform 0.5s ease-out'
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${progress === 100 ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}>
                    <Play className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white ml-0.5" />
                  </div>
                </div>
                {/* Timeline bar */}
                <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-6 bg-black/60 flex items-center px-1 sm:px-2 gap-0.5 sm:gap-2">
                  <div className="flex-1 h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-lavender rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[6px] sm:text-xs text-white/50">0:{Math.floor(progress / 100 * 30).toString().padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Prompt bar */}
        <div className="mt-1.5 sm:mt-4 flex items-center gap-0.5 sm:gap-2 bg-white/5 rounded sm:rounded-xl border border-white/10 p-1 sm:p-2">
          <div className="flex-1 px-1.5 sm:px-3 overflow-hidden">
            <span className="text-[7px] sm:text-xs text-white/40 truncate block">Enter your prompt...</span>
          </div>
          <button className="flex items-center gap-0.5 sm:gap-2 px-1.5 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-cyan to-emerald rounded sm:rounded-lg text-[7px] sm:text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all flex-shrink-0">
            <Wand2 className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Generate</span>
          </button>
        </div>
      </div>

      {/* Glow effects - hidden on mobile for performance */}
      <div className="hidden sm:block absolute -top-20 -right-20 w-40 h-40 bg-cyan/30 rounded-full blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute -bottom-20 -left-20 w-40 h-40 bg-emerald/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AICreativeDemo;
