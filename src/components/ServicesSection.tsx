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
      "4K Ultra HD streaming",
      "Watch on 4 devices",
      "Ad-free experience",
    ],
    activeUsers: 45230,
    tag: "Most Popular",
  },
  {
    id: 2,
    name: "ChatGPT Plus",
    category: "ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    price: 5.77,
    originalPrice: 20.00,
    features: [
      "GPT-4o & GPT-5.1 access",
      "DALL-E 3 image generation",
      "Priority access",
    ],
    activeUsers: 32150,
    tag: "🔥 Hot",
  },
  {
    id: 3,
    name: "Spotify Premium",
    category: "music",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    price: 2.49,
    originalPrice: 10.99,
    features: [
      "Ad-free music",
      "Offline downloads",
      "High-quality audio",
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
      "Disney, Marvel, Star Wars",
      "4K HDR streaming",
      "Up to 4 devices",
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
      "Ad-free videos",
      "Background play",
      "YouTube Music included",
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
      "High-speed VPN",
      "Anti-malware protection",
      "Ad & tracker blocker",
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
      "Premium templates",
      "Brand kit",
      "Background remover",
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
      "100M+ songs",
      "Lossless audio",
      "Spatial audio",
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
      "Claude 3.5 Sonnet access",
      "5x more usage",
      "Priority access",
    ],
    activeUsers: 15230,
    tag: "New",
  },
  {
    id: 10,
    name: "Xbox Game Pass",
    category: "games",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Xbox_Game_Pass_new_logo_-_colored_version.svg",
    price: 5.99,
    originalPrice: 16.99,
    features: [
      "100+ games",
      "Day one releases",
      "EA Play included",
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
      "AI image generation",
      "Fast mode hours",
      "Commercial license",
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
      "Ad-free anime",
      "New episodes simulcast",
      "Offline viewing",
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
    <section id="services" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--muted)/0.3),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Subscriptions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from 50+ premium services and start saving today. All subscriptions are 100% legal and secure.
          </p>
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
