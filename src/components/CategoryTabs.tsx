import { Button } from "@/components/ui/button";
import { 
  Layers, 
  Tv, 
  Music, 
  Brain, 
  Laptop, 
  Gamepad2,
  Store
} from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "全部", icon: Layers },
  { id: "svod", label: "视频", icon: Tv },
  { id: "music", label: "音乐", icon: Music },
  { id: "ai", label: "AI", icon: Brain },
  { id: "software", label: "软件", icon: Laptop },
  { id: "games", label: "游戏", icon: Gamepad2 },
  { id: "marketplace", label: "商城", icon: Store },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isActive ? "pillActive" : "pill"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="gap-2"
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
