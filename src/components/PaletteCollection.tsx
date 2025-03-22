import React, { useState } from "react";
import { palettes, Palette, getCategories } from "@/lib/palettes";
import ColorPalette from "./ColorPalette";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PaletteCollectionProps {
  selectedPalette: Palette;
  onSelectPalette: (palette: Palette) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const PaletteCollection: React.FC<PaletteCollectionProps> = ({
  selectedPalette,
  onSelectPalette,
  isCollapsed = false,
  onToggleCollapse = () => {}
}) => {
  const categories = ["All", ...getCategories()];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPalettes = palettes.filter(palette => {
    const matchesCategory = activeCategory === "All" || palette.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      palette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      palette.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  if (isCollapsed) {
    return (
      <div className="h-full flex items-center justify-center bg-background/50 border border-border/60 rounded-xl hover:bg-accent/5 transition-all duration-300">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleCollapse}
          className="w-full h-full rounded-xl hover:bg-accent/10 hover:text-accent-foreground transition-all duration-300 group"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground/60 group-hover:text-accent-foreground group-hover:translate-x-0.5 transition-all" />
          <span className="sr-only">Expand palette collection</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full animate-fade-in relative border border-border/60 rounded-xl shadow-sm p-3 bg-background">
      <div className="sticky top-0 z-10 pb-3 pt-1 bg-background border-b border-border/10">
        <div className="relative mb-3 flex">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/60" />
          <Input
            placeholder="Search palettes..."
            className="pl-9 pr-10 bg-background border-border/20 shadow-sm ring-offset-background focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggleCollapse} 
            className="absolute right-0 top-0 h-10 w-10 rounded-l-none hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Collapse palette collection</span>
          </Button>
        </div>
        
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="w-full h-auto flex overflow-x-auto justify-start bg-background border border-border/20 space-x-1 scrollbar-none py-1 px-1 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full transition-all duration-300 whitespace-nowrap",
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "bg-background hover:bg-muted text-muted-foreground"
                )}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      <ScrollArea className="flex-1 -mr-3 pr-3">
        <div className="space-y-2 py-2 px-0.5">
          {filteredPalettes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
              <p>No palettes found</p>
              <p className="text-xs">Try a different search term or category</p>
            </div>
          ) : (
            filteredPalettes.map((palette, index) => (
              <div 
                key={palette.id}
                className={cn(
                  "animate-slide-up transition-all duration-300 hover:translate-x-0 group",
                  selectedPalette.id === palette.id ? "scale-[1.01]" : ""
                )}
                style={{ animationDelay: `${(index % 15) * 0.03}s` }}
              >
                <div className="px-0.5">
                  <ColorPalette
                    palette={palette}
                    isSelected={selectedPalette.id === palette.id}
                    onClick={() => onSelectPalette(palette)}
                    compact={true}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PaletteCollection;
