import { Link } from "react-router-dom";
import { Search, User, Globe, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
            G
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            GamsgoClone
          </span>
        </Link>

        {/* 桌面端中间搜索框 */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="搜索 Netflix, Spotify..." 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border-none focus:ring-2 focus:ring-primary transition-all text-sm text-foreground placeholder:text-muted-foreground"
          />
          <Search className="w-4 h-4 text-muted-foreground absolute left-3" />
        </div>

        {/* 右侧功能区 - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="nav" size="sm" className="rounded-full gap-2">
            <User className="w-4 h-4" />
            登录 / 注册
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
