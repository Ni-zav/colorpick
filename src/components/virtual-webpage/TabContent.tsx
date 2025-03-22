
import React, { ReactNode } from "react";

interface TabContentProps {
  activeTab: string;
  tabName: string;
  children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, tabName, children }) => {
  if (activeTab !== tabName) return null;
  
  return (
    <div className="flex-1 min-h-0 overflow-auto">
      {children}
    </div>
  );
};

export default TabContent;
