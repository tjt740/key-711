import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    name: "Netflix Premium",
    category: "svod",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
    price: 4.99,
    originalPrice: 22.99,
    features: [
      "4K 超高清",
      "4 设备同时观看",
      "无广告体验",
    ],
    activeUsers: 45230,
    tag: "最受欢迎",
  },
  {
    id: 2,
    name: "ChatGPT Plus",
    category: "ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    price: 5.77,
    originalPrice: 20.00,
    features: [
      "GPT-4o & GPT-5.1 访问",
      "DALL-E 3 图像生成",
      "优先访问",
    ],
    activeUsers: 32150,
    tag: "🔥 热门",
  },
  {
    id: 3,
    name: "Spotify Premium",
    category: "music",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    price: 2.49,
    originalPrice: 10.99,
    features: [
      "无广告音乐",
      "离线下载",
      "高品质音频",
    ],
    activeUsers: 58420,
  },
  {
    id: 4,
    name: "Disney+ Premium",
    category: "svod",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    price: 3.49,
    originalPrice: 13.99,
    features: [
      "迪士尼、漫威、星球大战",
      "4K HDR 流媒体",
      "最多 4 设备",
    ],
    activeUsers: 28940,
  },
  {
    id: 5,
    name: "YouTube Premium",
    category: "svod",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
    price: 2.99,
    originalPrice: 13.99,
    features: [
      "无广告视频",
      "后台播放",
      "含 YouTube Music",
    ],
    activeUsers: 41200,
  },
  {
    id: 6,
    name: "NordVPN",
    category: "software",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/NordVPN-logo.svg",
    price: 2.00,
    originalPrice: 12.99,
    features: [
      "高速 VPN",
      "反恶意软件保护",
      "广告和追踪器拦截",
    ],
    activeUsers: 19870,
  },
  {
    id: 7,
    name: "Canva Pro",
    category: "software",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    price: 3.29,
    originalPrice: 12.99,
    features: [
      "高级模板",
      "品牌套件",
      "背景移除",
    ],
    activeUsers: 24500,
  },
  {
    id: 8,
    name: "Apple Music",
    category: "music",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg",
    price: 2.79,
    originalPrice: 10.99,
    features: [
      "1亿+ 歌曲",
      "无损音频",
      "空间音频",
    ],
    activeUsers: 35600,
  },
  {
    id: 9,
    name: "Claude Pro",
    category: "ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Claude_AI.webp",
    price: 6.49,
    originalPrice: 20.00,
    features: [
      "Claude 3.5 Sonnet 访问",
      "5倍用量",
      "优先访问",
    ],
    activeUsers: 15230,
    tag: "新品",
  },
  {
    id: 10,
    name: "Xbox Game Pass",
    category: "games",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Xbox_Game_Pass_new_logo_-_colored_version.svg",
    price: 5.99,
    originalPrice: 16.99,
    features: [
      "100+ 游戏",
      "首发日畅玩",
      "含 EA Play",
    ],
    activeUsers: 22100,
  },
  {
    id: 11,
    name: "Midjourney",
    category: "ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    price: 4.99,
    originalPrice: 10.00,
    features: [
      "AI 图像生成",
      "快速模式时长",
      "商业许可",
    ],
    activeUsers: 18900,
  },
  {
    id: 12,
    name: "Crunchyroll",
    category: "svod",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Crunchyroll_Logo_2023.svg",
    price: 2.49,
    originalPrice: 9.99,
    features: [
      "无广告动漫",
      "新番同步",
      "离线观看",
    ],
    activeUsers: 27800,
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  return (
    <section id="services" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-xl font-bold text-foreground">热门订阅</h2>
          <a href="#" className="text-sm text-primary font-semibold hover:underline">查看全部 →</a>
        </div>

        {/* Category Tabs */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              logo={service.logo}
              price={service.price}
              originalPrice={service.originalPrice}
              features={service.features}
              activeUsers={service.activeUsers}
              tag={service.tag}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
