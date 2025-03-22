
import React from "react";
import { ClipboardCopy } from "lucide-react";
import { Palette } from "@/lib/palettes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface WebpageHeaderProps {
  palette: Palette;
  colors: Record<string, string>;
  onCopyPalette?: () => void;
}

const WebpageHeader: React.FC<WebpageHeaderProps> = ({ palette, colors, onCopyPalette }) => {
  const handleCopyPalette = () => {
    if (onCopyPalette) {
      onCopyPalette();
    } else {
      // Fallback direct copy if no handler provided
      const cssVars = `
:root {
  --background: ${colors.background};
  --foreground: ${colors.foreground};
  --primary: ${colors.primary};
  --secondary: ${colors.secondary};
  --accent: ${colors.accent};
}`.trim();
      
      navigator.clipboard.writeText(cssVars);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div 
      className="p-3 sm:p-4 color-transition flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 border-b justify-between"
      style={{ 
        backgroundColor: colors.primary,
        borderColor: colors.secondary
      }}
    >
      <div className="flex items-center flex-1 min-w-0">
        <div 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded mr-2 sm:mr-3 flex-shrink-0 color-transition"
          style={{ backgroundColor: colors.accent }}
        ></div>
        <div 
          className="text-sm sm:text-base font-medium truncate color-transition"
          style={{ color: "#FFFFFF" }}
        >
          {palette.name}
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-auto">
        <div className="hidden sm:flex items-center space-x-1">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-white/20 color-transition"
              style={{ backgroundColor: color.hex }}
              title={`${color.name}: ${color.hex}`}
            ></div>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          className={cn(
            "text-xs py-1 px-2 h-auto bg-white/10 hover:bg-white/20 text-white",
            "rounded transition-all duration-300"
          )}
          onClick={handleCopyPalette}
        >
          <ClipboardCopy className="h-3 w-3 mr-1" />
          <span className="hidden sm:inline">Copy CSS</span>
        </Button>
      </div>
    </div>
  );
};

export default WebpageHeader;
