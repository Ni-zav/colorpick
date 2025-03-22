
import React from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface FeaturesTabProps {
  colors: Record<string, string>;
  content: {
    featuredTitle: string;
    featuredDescription: string;
    cards: { title: string; description: string }[];
  };
  interactive?: boolean;
}

const FeaturesTab: React.FC<FeaturesTabProps> = ({ colors, content, interactive }) => {
  return (
    <div className="grid grid-cols-3 gap-4 flex-1">
      <div 
        className="col-span-3 p-4 rounded-lg mb-4 color-transition"
        style={{ backgroundColor: colors.secondary }}
      >
        <div 
          className="text-sm font-medium mb-2 color-transition"
          style={{ color: colors.foreground }}
        >
          {content.featuredTitle}
        </div>
        <div 
          className="text-xs color-transition"
          style={{ color: colors.foreground, opacity: 0.8 }}
        >
          {content.featuredDescription}
        </div>
      </div>
      
      {/* Feature cards - 3 columns */}
      {["Color Categories", "Live Preview", "CSS Export", "Color Analytics"].map((feature, i) => (
        <div 
          key={feature}
          className={cn(
            "p-4 rounded-lg color-transition",
            interactive ? "cursor-pointer hover:translate-y-[-3px] transition-transform" : ""
          )}
          style={{ backgroundColor: colors.secondary, opacity: 0.7 + (i * 0.05) }}
          onClick={() => interactive && toast.info(`Feature: ${feature}`)}
        >
          <div 
            className="w-10 h-10 rounded-lg mb-3 color-transition flex items-center justify-center"
            style={{ backgroundColor: colors.accent }}
          >
            <div 
              className="w-5 h-5 rounded"
              style={{ backgroundColor: colors.primary, opacity: 0.5 }}
            ></div>
          </div>
          <div 
            className="text-sm mb-1 font-medium color-transition"
            style={{ color: colors.foreground }}
          >
            {feature}
          </div>
          <div 
            className="text-xs color-transition"
            style={{ color: colors.foreground, opacity: 0.6 }}
          >
            {i % 2 === 0 ? "Easy to use and intuitive" : "Powerful and flexible"}
          </div>
        </div>
      ))}
      
      <div 
        className="col-span-3 p-3 rounded-lg color-transition mt-2"
        style={{ backgroundColor: colors.primary, opacity: 0.1 }}
      >
        <div 
          className="flex justify-between items-center"
        >
          <div 
            className="text-xs font-medium color-transition"
            style={{ color: colors.foreground }}
          >
            Try our premium features
          </div>
          <div 
            className={cn(
              "px-3 py-1 rounded text-xs text-center color-transition",
              interactive ? "cursor-pointer hover:opacity-90" : ""
            )}
            style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}
            onClick={() => interactive && toast.info("Premium features")}
          >
            Upgrade now
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
