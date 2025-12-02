import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-card py-16 lg:py-24">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[128px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          以更低的价格，<br className="hidden md:block" />
          享受 <span className="text-primary">Premium</span> 订阅服务
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          全球领先的数字媒体合租平台。安全、稳定、自动发货。已有超过 100,000+ 用户选择我们。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="nav" size="xl" className="rounded-full shadow-xl hover:scale-105 transition-transform">
            查看所有产品
          </Button>
          <Button variant="outline" size="xl" className="rounded-full">
            如何运作？
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
