
import React from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface HomeTabProps {
  colors: Record<string, string>;
  content: {
    featuredTitle: string;
    featuredDescription: string;
    cards: { title: string; description: string }[];
  };
  interactive?: boolean;
  sidebarItems: string[];
  setSidebarItems: React.Dispatch<React.SetStateAction<string[]>>;
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>;
  showTooltip: boolean;
}

const HomeTab: React.FC<HomeTabProps> = ({
  colors,
  content,
  interactive,
  sidebarItems,
  setSidebarItems,
  activeItem,
  setActiveItem,
  setShowTooltip,
  showTooltip
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-1 min-h-0">
      {/* Left column */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div 
          className="rounded-lg p-3 sm:p-4 mb-4 color-transition"
          style={{ backgroundColor: colors.secondary }}
        >
          <div 
            className="text-sm font-medium mb-2 color-transition"
            style={{ color: colors.foreground }}
          >
            {content.featuredTitle}
          </div>
          <div 
            className={cn(
              "h-24 sm:h-32 rounded-md mb-3 color-transition flex items-center justify-center",
              interactive ? "cursor-pointer hover:opacity-90" : ""
            )}
            style={{ 
              backgroundColor: colors.accent,
              backgroundImage: `linear-gradient(45deg, ${colors.primary}80, ${colors.accent}90)`
            }}
            onClick={() => {
              if (interactive) {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 2000);
              }
            }}
          >
            {showTooltip && (
              <div 
                className="bg-black/70 text-white px-3 py-1 rounded-md text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                Feature image clicked!
              </div>
            )}
          </div>
          <div 
            className="text-xs color-transition"
            style={{ color: colors.foreground, opacity: 0.8 }}
          >
            {content.featuredDescription}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {content.cards.map((card, index) => (
            <div 
              key={index}
              className={cn(
                "flex-1 p-3 rounded-lg color-transition mb-3 sm:mb-0",
                interactive ? "cursor-pointer transform transition-transform" : ""
              )}
              style={{ backgroundColor: colors.secondary, opacity: 0.7 }}
              onClick={() => interactive && toast.info(`${card.title}: ${card.description}`)}
              onMouseEnter={interactive ? (e) => e.currentTarget.style.transform = "translateY(-5px)" : undefined}
              onMouseLeave={interactive ? (e) => e.currentTarget.style.transform = "translateY(0)" : undefined}
            >
              <div 
                className="h-16 sm:h-20 rounded mb-2 color-transition"
                style={{ 
                  backgroundColor: colors.accent, 
                  opacity: 0.5,
                  backgroundImage: index === 0 ?
                    `linear-gradient(45deg, ${colors.primary}40, transparent)` :
                    `linear-gradient(135deg, transparent, ${colors.primary}40)`
                }}
              ></div>
              <div 
                className="text-xs mb-1 font-medium color-transition"
                style={{ color: colors.foreground }}
              >
                {card.title}
              </div>
              <div 
                className="text-[10px] color-transition"
                style={{ color: colors.foreground, opacity: 0.6 }}
              >
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right column */}
      <div 
        className="w-full sm:w-1/3 p-3 rounded-lg color-transition"
        style={{ backgroundColor: colors.secondary, opacity: 0.5 }}
      >
        <div 
          className="text-xs font-medium mb-3 color-transition"
          style={{ color: colors.foreground }}
        >
          Explore
        </div>
        
        {sidebarItems.map((item) => (
          <div 
            key={item}
            className={cn(
              "flex items-center gap-2 p-2 mb-2 rounded color-transition",
              interactive ? "cursor-pointer" : "",
              item === activeItem ? "ring-1" : ""
            )}
            style={{ 
              backgroundColor: colors.background,
              boxShadow: item === activeItem ? `0 0 0 1px ${colors.accent}` : "none"
            }}
            onClick={() => interactive && setActiveItem(item)}
          >
            <div 
              className="w-6 h-6 rounded color-transition flex-shrink-0"
              style={{ backgroundColor: colors.accent }}
            ></div>
            <div 
              className="text-xs truncate color-transition"
              style={{ color: colors.foreground }}
            >
              {item}
            </div>
          </div>
        ))}
        
        <div 
          className={cn(
            "mt-4 p-2 rounded text-xs text-center color-transition",
            interactive ? "cursor-pointer hover:opacity-90 active:scale-95" : ""
          )}
          style={{ 
            backgroundColor: colors.primary,
            color: "#FFFFFF"
          }}
          onClick={() => {
            if (interactive) {
              const newItems = [...sidebarItems];
              const newItem = "New Palette";
              if (!newItems.includes(newItem)) {
                setSidebarItems([...newItems, newItem]);
                setActiveItem(newItem);
              }
            }
          }}
        >
          Add Palette
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
