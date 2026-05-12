import { Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-card pt-20 pb-14">
      {/* blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-32 w-[700px] h-[600px] rounded-full opacity-80"
             style={{ background: "radial-gradient(ellipse at center, hsl(16 100% 88%) 0%, hsl(16 100% 96%) 40%, transparent 70%)" }} />
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[350px] rounded-full opacity-50"
             style={{ background: "radial-gradient(ellipse at center, hsl(16 100% 90%) 0%, transparent 65%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-card border border-primary/30 rounded-full text-sm font-semibold text-primary shadow-card mb-7">
          <Star className="w-3.5 h-3.5 fill-primary" />
          全球 50 万+ 用户信赖
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-secondary leading-[1.05] mb-5">
          高端会员订阅 更聪明地共享，
          <br />
          <span className="text-primary">更便宜、更快速</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-9 leading-relaxed">
          立即获取 ChatGPT Plus、Netflix、YouTube Premium、Spotify 等 50+ 顶级服务，最高低至 2 折——官方账号，安全交付，24/7 客服。
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-11">
          <a href="#services" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-[10px] text-sm font-semibold shadow-glow hover:bg-primary/90 transition inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> 立即查看产品
          </a>
          <a href="#how" className="bg-card text-foreground border-[1.5px] border-border hover:border-primary hover:text-primary px-6 py-3.5 rounded-[10px] text-sm font-semibold transition">
            如何运作？
          </a>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { ico: "🔒", t: "SSL 加密支付" },
            { ico: "⚡", t: "秒级自动发货" },
            { ico: "🛡", t: "退款保障" },
            { ico: "💬", t: "24/7 客服" },
          ].map((i) => (
            <div key={i.t} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="text-primary">{i.ico}</span> {i.t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
