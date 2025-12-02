import { UserPlus, Search, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "创建账户",
    description: "几秒钟内免费注册，无需信用卡。",
  },
  {
    icon: Search,
    title: "选择服务",
    description: "浏览 50+ 高端订阅，超低价格。",
  },
  {
    icon: CreditCard,
    title: "安全支付",
    description: "支持银行卡、PayPal 或加密货币。",
  },
  {
    icon: Rocket,
    title: "开始使用",
    description: "即刻获得高端订阅访问权限。",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            如何 <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">使用</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            简单 4 步，几分钟即可开始
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center transition-shadow hover:shadow-glow">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
