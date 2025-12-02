import { Button } from "@/components/ui/button";
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

  const handleBuy = () => {
    navigate(`/checkout?productId=${id}`);
  };

  return (
    <div
      className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* 热门/促销标签 */}
      {tag && (
        <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
          {tag}
        </div>
      )}

      <div className="p-5 flex-1">
        {/* 产品头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden shadow-lg">
            <img src={logo} alt={name} className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col items-end">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              库存充足
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-xs mb-4">{features.join(" • ")}</p>

        {/* 价格区域 */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-extrabold text-foreground">${price}</span>
          <span className="text-sm text-muted-foreground font-medium">/月</span>
          <span className="text-xs text-muted-foreground line-through ml-auto">原价 ${originalPrice}</span>
        </div>

        {/* 权益列表 */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>自动发货，秒级响应</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>支持续费，账号稳定</span>
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="p-4 bg-muted/50 border-t border-border">
        <Button variant="hero" className="w-full py-3 flex items-center justify-center gap-2" onClick={handleBuy}>
          立即购买
          <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">省 {discount}%</span>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
