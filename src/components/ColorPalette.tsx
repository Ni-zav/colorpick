import React from "react";
import { cn } from "@/lib/utils";
import { Palette } from "@/lib/palettes";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ColorPaletteProps {
  palette: Palette;
  isSelected: boolean;
  onClick: () => void;
  compact?: boolean;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  palette,
  isSelected,
  onClick,
  compact = false
}) => {
  return (
    <Card 
      className={cn(
        "palette-card group cursor-pointer overflow-hidden h-full transition-all duration-500 ease-out",
        isSelected ? "ring-2 ring-primary ring-offset-2" : "hover:ring-1 hover:ring-border",
        compact ? "py-1" : "",
        "shadow-sm border border-border/40"
      )}
      onClick={onClick}
    >
      <CardContent className={cn("relative", compact ? "p-2" : "p-4")}>
        <div className="flex flex-col space-y-2.5">
          <div className={cn("flex overflow-hidden rounded-sm", compact ? "h-8" : "h-24")}>
            {palette.colors.map((color, index) => (
              <div
                key={index}
                className="flex-1 relative border-r last:border-r-0 border-black/5"
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="text-white drop-shadow-md animate-scale-in" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-0.5">
            <h3 className={cn(
              "font-medium text-muted-foreground/90 group-hover:text-foreground/90 transition-colors duration-300",
              compact ? "text-xs" : "text-sm"
            )}>
              {palette.name}
            </h3>
            {!compact && (
              <p className="text-xs text-muted-foreground opacity-80 line-clamp-1">
                {palette.description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPalette;
