import { Link } from "react-router-dom";
import { Search, User, Globe, ShoppingCart, Store, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <nav className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center gap-0">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <div className="w-9 h-9 bg-primary rounded-[9px] flex items-center justify-center text-primary-foreground font-black text-lg">
            g
          </div>
          <span className="text-lg font-extrabold text-foreground tracking-tight">goaifast</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition">首页</Link>
          <a href="#services" className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition">订阅商品</a>
          <a href="#" className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition">推广联盟</a>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="搜索 Netflix, Spotify..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border-[1.5px] border-border focus:border-primary focus:bg-card focus:outline-none text-sm transition"
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-[1.5px] border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition">
            <Globe className="w-3.5 h-3.5" /> 中文
          </button>
          <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition">
            <Store className="w-3.5 h-3.5" /> 成为卖家
          </button>
          <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
          {user ? (
            <>
              <Link
                to="/profile"
                className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold border-2 border-border"
                title={user.email ?? ""}
              >
                {(user.email?.[0] ?? "U").toUpperCase()}
              </Link>
              <button onClick={() => signOut()} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition">
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition shadow-glow"
            >
              <User className="w-4 h-4" /> 登录
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
