interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "全部", icon: "⊞" },
  { id: "svod", label: "影音", icon: "📺" },
  { id: "ai", label: "AI 人工智能", icon: "🧠" },
  { id: "music", label: "音乐", icon: "🎵" },
  { id: "software", label: "软件", icon: "💻" },
  { id: "games", label: "游戏", icon: "🎮" },
  { id: "marketplace", label: "市场", icon: "🏪" },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => (
  <div className="bg-card border-y border-border -mx-6 px-6 mb-8">
    <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
      {categories.map((c) => {
        const on = activeCategory === c.id;
        return (
          <button
            key={c.id}
            onClick={() => onCategoryChange(c.id)}
            className={`flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-[14px] min-w-[80px] flex-shrink-0 transition ${
              on ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-primary"
            }`}
          >
            <span className="text-[22px] leading-none">{c.icon}</span>
            <span className="text-xs font-semibold whitespace-nowrap">{c.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

export default CategoryTabs;
