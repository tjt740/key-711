import { Zap, ShieldCheck, Headphones, CreditCard } from "lucide-react";

const badges = [
  { icon: Zap, title: "秒级发货", desc: "支付后立即收到账号" },
  { icon: ShieldCheck, title: "SSL 安全支付", desc: "金融级加密保护" },
  { icon: Headphones, title: "24/7 客服", desc: "随时解决您的问题" },
  { icon: CreditCard, title: "退款保证", desc: "账号失效包退换" },
];

const TrustBadges = () => {
  return (
    <div className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
