import { MessageCircle } from "lucide-react";

const Footer = () => {
  const cols = [
    { title: "关于", links: ["关于我们", "推广联盟", "成为卖家", "博客", "帮助中心"] },
    { title: "法律", links: ["使用条款", "隐私政策", "Cookie 政策", "AML 政策", "退款政策"] },
    { title: "产品", links: ["全部商品", "AI 工具", "流媒体影音", "办公软件", "游戏"] },
  ];

  return (
    <footer className="bg-card border-t border-border pt-14 pb-7">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-primary rounded-[9px] flex items-center justify-center text-primary-foreground font-black text-lg">g</div>
              <span className="text-lg font-extrabold tracking-tight">goaifast</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-4">
              全球顶级订阅服务共享平台，正版授权，安全交付，24/7 客服支持。
            </p>
            <div className="flex gap-2">
              {["📘", "✈️", "🎵", "▶️", "𝕏"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <a key={l} href="#" className="text-[13px] text-muted-foreground hover:text-primary transition">{l}</a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4">客户服务</h4>
            <div className="flex flex-col gap-2.5 mb-4">
              <a href="#" className="text-[13px] text-primary font-semibold flex items-center gap-1.5 hover:underline">
                <MessageCircle className="w-3.5 h-3.5" /> 在线客服
              </a>
              {["提交工单", "帮助中心", "使用指南", "联系我们"].map((l) => (
                <a key={l} href="#" className="text-[13px] text-muted-foreground hover:text-primary transition">{l}</a>
              ))}
            </div>
            <div className="bg-accent rounded-lg p-3 text-xs text-accent-foreground">
              <div className="font-bold mb-0.5">24/7 客服支持</div>
              <div className="text-[11px] opacity-75">noreply@goaifast.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-5 mb-5">
          <h5 className="text-xs font-bold text-muted-foreground mb-3">支持的支付方式</h5>
          <div className="flex flex-wrap gap-2">
            {[
              { t: "VISA", bg: "#1A1F71" }, { t: "MC", bg: "#EB001B" },
              { t: "支付宝", bg: "#1677FF" }, { t: "微信", bg: "#07C160" },
              { t: "Skrill", bg: "#8B29F5" }, { t: "iDEAL", bg: "#CC0066" },
              { t: "Sofort", bg: "#EF7C00" }, { t: "BLIK", bg: "#D31B29" },
            ].map((p) => (
              <span key={p.t} className="px-3 py-1.5 rounded text-white text-[11px] font-bold" style={{ background: p.bg }}>
                {p.t}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-5 flex flex-wrap justify-between gap-3 text-[12px] text-muted-foreground">
          <p>© 2024 GOAIFAST LIMITED. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>🛡 Google Safe Browsing</span>
            <span>✅ TrustedSite</span>
            <span>🔐 SiteLock</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
