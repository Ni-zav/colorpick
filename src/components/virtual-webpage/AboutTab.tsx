
import React from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AboutTabProps {
  colors: Record<string, string>;
  content: {
    featuredTitle: string;
    featuredDescription: string;
    cards: { title: string; description: string }[];
  };
  interactive?: boolean;
}

const AboutTab: React.FC<AboutTabProps> = ({ colors, content, interactive }) => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex gap-4">
        <div 
          className="flex-2 p-4 rounded-lg color-transition"
          style={{ backgroundColor: colors.secondary }}
        >
          <div 
            className="text-sm font-medium mb-3 color-transition"
            style={{ color: colors.foreground }}
          >
            {content.featuredTitle}
          </div>
          <div 
            className="text-xs leading-relaxed color-transition"
            style={{ color: colors.foreground, opacity: 0.8 }}
          >
            {content.featuredDescription}
          </div>
        </div>
        
        <div 
          className="flex-1 p-4 rounded-lg color-transition flex flex-col justify-between"
          style={{ backgroundColor: colors.secondary, opacity: 0.7 }}
        >
          <div 
            className="text-sm font-medium mb-2 color-transition"
            style={{ color: colors.foreground }}
          >
            Company Values
          </div>
          
          {["Accessibility", "Usability", "Innovation"].map((value, i) => (
            <div 
              key={value} 
              className="flex items-center gap-2 mb-2"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div 
                className="text-xs color-transition"
                style={{ color: colors.foreground }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4 flex-1">
        {content.cards.map((card, index) => (
          <div 
            key={index}
            className={cn(
              "flex-1 flex flex-col p-4 rounded-lg color-transition",
              interactive ? "cursor-pointer hover:shadow-md transition-shadow" : ""
            )}
            style={{ backgroundColor: colors.secondary, opacity: 0.8 }}
            onClick={() => interactive && toast.info(`${card.title}: ${card.description}`)}
          >
            <div 
              className="w-12 h-12 mb-4 rounded-full flex items-center justify-center color-transition"
              style={{ backgroundColor: colors.accent }}
            >
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
            <div 
              className="text-sm mb-2 font-medium color-transition"
              style={{ color: colors.foreground }}
            >
              {card.title}
            </div>
            <div 
              className="text-xs color-transition flex-1"
              style={{ color: colors.foreground, opacity: 0.7 }}
            >
              {card.description}
            </div>
            <div 
              className="text-xs font-medium mt-3 color-transition"
              style={{ color: colors.primary }}
            >
              Learn more →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTab;
