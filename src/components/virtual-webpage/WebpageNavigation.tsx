
import React from "react";
import { cn } from "@/lib/utils";

interface WebpageNavigationProps {
  tabs: string[];
  activeTab: string;
  colors: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
  interactive?: boolean;
  onTabChange: (tab: string) => void;
}

const WebpageNavigation: React.FC<WebpageNavigationProps> = ({ 
  tabs, 
  activeTab, 
  colors, 
  content,
  interactive,
  onTabChange
}) => {
  return (
    <>
      <div 
        className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 color-transition"
        style={{ color: colors.foreground }}
      >
        {content.title}
      </div>
      
      <div 
        className="text-xs sm:text-sm mb-4 sm:mb-6 color-transition"
        style={{ color: colors.foreground, opacity: 0.8 }}
      >
        {content.description}
      </div>
      
      {/* Navigation */}
      <div 
        className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 pb-2 border-b color-transition overflow-x-auto"
        style={{ borderColor: colors.secondary }}
      >
        {tabs.map((tab) => (
          <div 
            key={tab} 
            className={cn(
              "px-2 sm:px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 color-transition flex-shrink-0",
              interactive ? "cursor-pointer hover:opacity-80" : "",
              tab === activeTab ? "font-semibold" : ""
            )}
            style={{ 
              backgroundColor: tab === activeTab ? colors.primary : "transparent",
              color: tab === activeTab ? "#FFFFFF" : colors.foreground
            }}
            onClick={() => interactive && onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </>
  );
};

export default WebpageNavigation;
