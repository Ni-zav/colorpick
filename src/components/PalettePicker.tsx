import React, { useState, useEffect } from "react";
import { Palette, getDefaultPalette } from "@/lib/palettes";
import PaletteCollection from "./PaletteCollection";
import VirtualWebpage from "./VirtualWebpage";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { Moon, Palette as PaletteIcon, PanelLeft, Sun, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const PalettePicker: React.FC = () => {
  const [selectedPalette, setSelectedPalette] = useState<Palette>(getDefaultPalette());
  const [copied, setCopied] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { toast: uiToast } = useToast();
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  
  const handleSelectPalette = (palette: Palette) => {
    setSelectedPalette(palette);
    toast.success(`${palette.name} selected`, {
      description: "Preview updated with the new color palette.",
      duration: 3000
    });
  };
  
  const copyPaletteToClipboard = () => {
    const cssVars = `
:root {
  --background: ${selectedPalette.colors[0].hex};
  --foreground: ${selectedPalette.colors[1].hex};
  --primary: ${selectedPalette.colors[2].hex};
  --secondary: ${selectedPalette.colors[3].hex};
  --accent: ${selectedPalette.colors[4].hex};
}
    `.trim();
    
    navigator.clipboard.writeText(cssVars);
    setCopied(true);
    toast.success("Copied to clipboard!", {
      description: "CSS variables are now in your clipboard.",
      duration: 3000
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedPalette(getDefaultPalette());
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Mobile view with drawer for palette collection
  if (isMobile) {
    return (
      <div className={cn("flex flex-col w-full h-full gap-3 p-3", isDarkMode ? "dark" : "")}>
        <header className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <PaletteIcon className="w-5 h-5 text-foreground/80" />
              <h1 className="text-xl font-semibold">ColorPick</h1>
            </div>
          </Link>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/about")}
              className="h-9 w-9"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="h-9 w-9"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button size="sm" variant="outline" className="flex items-center gap-1.5">
                  <PanelLeft className="w-4 h-4" />
                  <span className="sm:inline">Palettes</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh]">
                <div className="h-full mx-auto w-full max-w-md p-4">
                  <PaletteCollection
                    selectedPalette={selectedPalette}
                    onSelectPalette={(palette) => {
                      handleSelectPalette(palette);
                      setIsDrawerOpen(false);
                    }}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </header>
        
        {/* Preview */}
        <Card className="flex-1 shadow-sm border border-border/60 overflow-hidden">
          <CardContent className="p-2 h-full min-h-[70vh]">
            <VirtualWebpage 
              palette={selectedPalette} 
              interactive={true} 
              onCopyPalette={copyPaletteToClipboard}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Desktop view with collapsible sidebar
  return (
    <div className={cn("flex flex-col w-full h-screen overflow-hidden", isDarkMode ? "dark" : "")}>
      <header className="flex items-center justify-between p-4 bg-background shadow-sm border-b">
        <Link to="/">
          <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <PaletteIcon className="w-5 h-5 text-foreground/80" />
            <h1 className="text-xl font-semibold">ColorPick</h1>
          </div>
        </Link>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/about")}
            className="h-9 w-9"
          >
            <Info className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="h-9 w-9"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden p-3 gap-3">
        <div className={cn(
          "transition-all duration-300 overflow-hidden sidebar-container", 
          isSidebarCollapsed ? "w-12" : "w-56"
        )}>
          <PaletteCollection 
            selectedPalette={selectedPalette}
            onSelectPalette={handleSelectPalette}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <Card className="flex-1 shadow-sm border border-border/60 overflow-hidden h-full">
            <CardContent className="p-0 h-full">
              <VirtualWebpage 
                palette={selectedPalette} 
                interactive={true} 
                onCopyPalette={copyPaletteToClipboard}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PalettePicker;
