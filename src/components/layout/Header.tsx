import { Link, useLocation } from "react-router-dom";
import { Lightbulb, TrendingUp, ThumbsUp, MessageCircle, Home } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 text-sm bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-primary" />
        毒舌审校员
      </Link>
      <nav className="flex items-center gap-5">
        <Link 
          to="/" 
          className={`flex items-center gap-1.5 transition-colors duration-200 ${
            isActive("/") 
              ? "text-primary font-medium" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className={`w-4 h-4 ${isActive("/") ? "text-primary" : ""}`} />
          <span className="hidden sm:inline">首页</span>
        </Link>
        <Link 
          to="/concept" 
          className={`flex items-center gap-1.5 transition-colors duration-200 ${
            isActive("/concept") 
              ? "text-primary font-medium" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Lightbulb className={`w-4 h-4 ${isActive("/concept") ? "text-primary" : ""}`} />
          <span className="hidden sm:inline">创作理念</span>
        </Link>
        <Link 
          to="/evolution" 
          className={`flex items-center gap-1.5 transition-colors duration-200 ${
            isActive("/evolution") 
              ? "text-primary font-medium" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <TrendingUp className={`w-4 h-4 ${isActive("/evolution") ? "text-primary" : ""}`} />
          <span className="hidden sm:inline">未来演进</span>
        </Link>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-primary font-medium px-3 py-1.5 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all duration-300 animate-pulse-subtle group"
        >
          <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">求点赞评论</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
