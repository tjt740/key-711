import { Zap, ShieldCheck, Headphones, CreditCard } from "lucide-react";

const badges = [
  { icon: Zap, title: "秒级发货", desc: "支付后立即收到账号" },
  { icon: ShieldCheck, title: "SSL 安全支付", desc: "金融级加密保护" },
  { icon: Headphones, title: "24/7 客服", desc: "随时解决您的问题" },
  { icon: CreditCard, title: "退款保证", desc: "账号失效包退换" },
];

const TrustBadges = () => (
  <div className="bg-secondary py-5">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
        {badges.map((b) => (
          <div key={b.title} className="flex items-center gap-2.5 text-secondary-foreground text-sm font-medium">
            <b.icon className="w-5 h-5 text-primary" />
            {b.title}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBadges;
