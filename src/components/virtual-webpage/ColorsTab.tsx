
import React from "react";
import { Color } from "@/lib/palettes";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface ColorsTabProps {
  colors: Record<string, string>;
  content: {
    title: string;
    description: string;
  };
  interactive?: boolean;
}

const ColorsTab: React.FC<ColorsTabProps> = ({ colors, content, interactive = false }) => {
  const colorEntries = Object.entries(colors);

  const copyToClipboard = (colorName: string, hexValue: string) => {
    if (!interactive) return;
    
    navigator.clipboard.writeText(hexValue)
      .then(() => {
        toast.success(`Copied ${colorName}: ${hexValue}`);
      })
      .catch(() => {
        toast.error("Failed to copy color code");
      });
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div 
        className="p-4 sm:p-6 rounded-lg color-transition"
        style={{ backgroundColor: colors.secondary, color: colors.foreground }}
      >
        <h2 
          className="text-xl sm:text-2xl font-bold mb-2 color-transition"
          style={{ color: colors.foreground }}
        >
          {content.title}
        </h2>
        <p
          className="text-sm sm:text-base color-transition"
          style={{ color: colors.foreground, opacity: 0.8 }}
        >
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {colorEntries.map(([name, hex]) => (
          <div 
            key={name}
            className={`p-4 rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md ${interactive ? 'cursor-pointer' : ''}`}
            style={{ 
              backgroundColor: hex === colors.background ? '#f0f0f0' : hex, 
              color: hex === colors.background || hex === colors.secondary ? colors.foreground : 
                     (hex === colors.foreground ? colors.background : '#ffffff'),
              borderColor: colors.secondary
            }}
            onClick={() => copyToClipboard(name, hex)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm">{hex}</p>
              </div>
              {interactive && (
                <Copy size={18} className="opacity-70" />
              )}
            </div>
          </div>
        ))}
      </div>

      {interactive && (
        <div 
          className="text-sm p-3 rounded-lg color-transition text-center"
          style={{ backgroundColor: colors.secondary, color: colors.foreground, opacity: 0.9 }}
        >
          Click on any color to copy its hex code to clipboard
        </div>
      )}
    </div>
  );
};

export default ColorsTab;
