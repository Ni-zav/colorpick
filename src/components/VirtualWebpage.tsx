import React, { useState } from "react";
import { Palette } from "@/lib/palettes";
import { toast } from "sonner";

// Import content and components
import { tabContent } from "./virtual-webpage/WebsiteContent";
import WebpageHeader from "./virtual-webpage/WebpageHeader";
import WebpageNavigation from "./virtual-webpage/WebpageNavigation";
import TabContent from "./virtual-webpage/TabContent";
import HomeTab from "./virtual-webpage/HomeTab";
import AboutTab from "./virtual-webpage/AboutTab";
import FeaturesTab from "./virtual-webpage/FeaturesTab";
import ContactTab from "./virtual-webpage/ContactTab";
import ColorsTab from "./virtual-webpage/ColorsTab";

interface VirtualWebpageProps {
  palette: Palette;
  interactive?: boolean;
  onCopyPalette?: () => void;
}

const VirtualWebpage: React.FC<VirtualWebpageProps> = ({ 
  palette, 
  interactive = false,
  onCopyPalette 
}) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [sidebarItems, setSidebarItems] = useState(["Palettes", "Templates", "Export"]);
  const [activeItem, setActiveItem] = useState("Palettes");
  const [showTooltip, setShowTooltip] = useState(false);
  
  const colors = {
    background: palette.colors[0].hex,
    foreground: palette.colors[1].hex,
    primary: palette.colors[2].hex,
    secondary: palette.colors[3].hex,
    accent: palette.colors[4].hex,
  };

  const tabs = ["Home", "About", "Features", "Colors", "Contact"];
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div 
      className="relative w-full rounded-xl overflow-hidden border shadow-sm transition-all duration-500 color-transition flex flex-col h-full isolate bg-background"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: colors.background }}
      />
      
      {/* Header with proper rounded corners */}
      <div className="relative z-10">
        <WebpageHeader 
          palette={palette} 
          colors={colors}
          onCopyPalette={onCopyPalette}
        />
      </div>

      {/* Content with isolated background */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col flex-1 overflow-auto">
        <WebpageNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          colors={colors} 
          content={currentContent}
          interactive={interactive}
          onTabChange={setActiveTab}
        />
        
        {/* Main content */}
        <div className="flex-1 min-h-0 overflow-auto">
          <TabContent activeTab={activeTab} tabName="Home">
            <HomeTab
              colors={colors}
              content={currentContent}
              interactive={interactive}
              sidebarItems={sidebarItems}
              setSidebarItems={setSidebarItems}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setShowTooltip={setShowTooltip}
              showTooltip={showTooltip}
            />
          </TabContent>
          
          <TabContent activeTab={activeTab} tabName="About">
            <AboutTab
              colors={colors}
              content={currentContent}
              interactive={interactive}
            />
          </TabContent>
          
          <TabContent activeTab={activeTab} tabName="Features">
            <FeaturesTab
              colors={colors}
              content={currentContent}
              interactive={interactive}
            />
          </TabContent>
          
          <TabContent activeTab={activeTab} tabName="Colors">
            <ColorsTab
              colors={colors}
              content={currentContent}
              interactive={interactive}
            />
          </TabContent>
          
          <TabContent activeTab={activeTab} tabName="Contact">
            <ContactTab
              colors={colors}
              content={currentContent}
              interactive={interactive}
            />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default VirtualWebpage;
