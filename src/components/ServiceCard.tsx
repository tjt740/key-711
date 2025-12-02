import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";

interface ServiceCardProps {
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
  name,
  logo,
  price,
  originalPrice,
  features,
  activeUsers,
  tag,
  delay = 0,
}: ServiceCardProps) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div
      className="group relative rounded-2xl gradient-card border border-border/50 p-6 transition-all duration-500 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Tag */}
      {tag && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-secondary text-xs font-bold text-secondary-foreground">
          {tag}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
          <img src={logo} alt={name} className="w-10 h-10 object-contain" />
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span>{activeUsers.toLocaleString()}</span>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-extrabold text-foreground">${price.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground">/month</span>
        <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
        <span className="px-2 py-0.5 rounded-md bg-primary/20 text-primary text-xs font-semibold">
          -{discount}%
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Active Users Avatars */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs text-muted-foreground"
              style={{ 
                backgroundColor: `hsl(${(i * 60 + 180) % 360} 40% 30%)`,
              }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">+{activeUsers - 4} members</span>
      </div>

      {/* CTA */}
      <Button variant="hero" className="w-full group-hover:shadow-glow">
        Get Started
      </Button>
    </div>
  );
};

export default ServiceCard;
