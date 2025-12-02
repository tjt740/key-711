import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <span className="font-bold text-lg text-primary-foreground">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GamsgoClone</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              合法共享高端订阅，节省高达80%的费用。
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">产品</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">所有服务</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">价格</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">使用方法</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">推广联盟</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">支持</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 GamsgoClone. 保留所有权利。</p>
          <p>为订阅爱好者用 ❤️ 打造</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
