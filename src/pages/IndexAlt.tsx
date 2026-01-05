import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import leckieCn from "@/assets/leckie-cn.png";
import leckieEn from "@/assets/leckie-en.png";
import leckieJp from "@/assets/leckie-jp.png";
import leckieKr from "@/assets/leckie-kr.png";
import leckiePt from "@/assets/leckie-pt.png";
import leckieId from "@/assets/leckie-id.png";

const leckies = [
  { id: "cn", label: "中文", image: leckieCn },
  { id: "en", label: "English", image: leckieEn },
  { id: "jp", label: "日本語", image: leckieJp },
  { id: "kr", label: "한국어", image: leckieKr },
  { id: "pt", label: "Português", image: leckiePt },
  { id: "id", label: "Indonesia", image: leckieId },
];

const IndexAlt = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { playHoverSound } = useSoundEffect();

  const handleClick = (id: string) => {
    navigate(`/chat/${id}`);
  };

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    playHoverSound();
  };

  return (
    <div 
      className="flex flex-col bg-background relative overflow-hidden"
      style={{ width: "1215px", height: "200px" }}
    >
      {/* Rotating Earth Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[600px] h-[600px] rounded-full opacity-30 animate-spin"
          style={{ 
            animationDuration: '120s',
            background: `
              radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, hsl(193 86% 40% / 0.3) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, hsl(216 25% 20%) 0%, hsl(214 33% 8%) 70%)
            `,
            boxShadow: '0 0 120px hsl(var(--primary) / 0.3), inset 0 0 80px hsl(var(--primary) / 0.1)'
          }}
        >
          <div className="absolute inset-0 rounded-full bg-grid opacity-20" />
          <div className="absolute inset-2 rounded-full border border-primary/20" />
          <div className="absolute inset-6 rounded-full border border-primary/10" />
        </div>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="flex items-center gap-6">
          {leckies.map((leckie) => (
            <div
              key={leckie.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                hoveredId === leckie.id ? "z-10 scale-110" : hoveredId ? "opacity-60" : ""
              }`}
              onClick={() => handleClick(leckie.id)}
              onMouseEnter={() => handleMouseEnter(leckie.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative w-20 h-20 overflow-hidden rounded-lg transition-all duration-300
                  ${hoveredId === leckie.id ? "ring-2 ring-primary shadow-glow-lg" : ""}`}
              >
                <img 
                  src={leckie.image} 
                  alt={leckie.label}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-opacity duration-300
                  bg-gradient-to-t from-primary/30 to-transparent
                  ${hoveredId === leckie.id ? "opacity-100" : "opacity-0"}`} 
                />
              </div>
              <div className="mt-1 text-center">
                <span className={`text-xs font-medium transition-colors duration-300
                  ${hoveredId === leckie.id ? "text-primary" : "text-foreground"}`}>
                  {leckie.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Compact Footer */}
      <footer className="relative z-10 py-1 text-center">
        <p className="text-[10px] text-muted-foreground">
          Made by CSIG 云产品五部 EdgeOne 文档国际化小分队
        </p>
      </footer>
    </div>
  );
};

export default IndexAlt;
