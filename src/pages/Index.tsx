
import React from "react";
import PalettePicker from "@/components/PalettePicker";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground overflow-hidden">
      <SidebarProvider>
        <div className="w-full h-screen">
          <PalettePicker />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
