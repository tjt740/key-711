import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  id?: number;
  name: string;
  logo: string;
  price: number;
  originalPrice: number;
  features: string[];
  activeUsers: number;
  tag?: string;
  delay?: number;
}

const tagStyles: Record<string, string> = {
  "最受欢迎": "bg-accent text-accent-foreground border border-primary/30",
  "🔥 热门": "bg-accent text-accent-foreground border border-primary/30",
  "新品": "bg-blue-50 text-blue-600 border border-blue-200",
};

const ServiceCard = ({
  id = 1,
  name,
  logo,
  price,
  originalPrice,
  features,
  tag,
  delay = 0,
}: ServiceCardProps) => {
  const navigate = useNavigate();
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div
      className="group relative bg-card rounded-[20px] border border-border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {tag && (
        <span className={`absolute top-4 left-4 z-10 px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase ${tagStyles[tag] ?? "bg-accent text-accent-foreground border border-primary/30"}`}>
          {tag}
        </span>
      )}

      <div className="p-6 flex-1">
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-[60px] h-[60px] rounded-[14px] bg-muted border border-border flex items-center justify-center overflow-hidden">
            <img src={logo} alt={name} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground tracking-tight">{name}</h3>
            <p className="text-xs text-muted-foreground/70 mt-0.5">官方授权 · 安全稳定</p>
          </div>
        </div>

        <div className="flex items-baseline gap-2.5 mb-4">
          <span className="text-[32px] leading-none font-extrabold text-primary">${price}</span>
          <span className="text-xs text-muted-foreground/70">/月</span>
          <span className="text-sm text-muted-foreground/60 line-through ml-auto">${originalPrice}</span>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          {features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-snug">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={() => navigate(`/checkout?productId=${id}`)}
          className="w-full py-3.5 rounded-[14px] bg-primary text-primary-foreground text-[15px] font-bold hover:bg-primary/90 hover:shadow-glow active:scale-[0.98] transition"
        >
          立即购买 · 省 {discount}%
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
