
import React from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ContactTabProps {
  colors: Record<string, string>;
  content: {
    featuredTitle: string;
    featuredDescription: string;
    cards: { title: string; description: string }[];
  };
  interactive?: boolean;
}

const ContactTab: React.FC<ContactTabProps> = ({ colors, content, interactive }) => {
  return (
    <div className="flex gap-4 flex-1">
      <div className="flex-1 flex flex-col gap-4">
        <div 
          className="p-4 rounded-lg color-transition"
          style={{ backgroundColor: colors.secondary }}
        >
          <div 
            className="text-sm font-medium mb-2 color-transition"
            style={{ color: colors.foreground }}
          >
            {content.featuredTitle}
          </div>
          <div 
            className="text-xs mb-3 color-transition"
            style={{ color: colors.foreground, opacity: 0.8 }}
          >
            {content.featuredDescription}
          </div>
          
          <div 
            className="bg-background/50 p-3 rounded-md mb-3"
            style={{ color: colors.foreground }}
          >
            <div className="text-xs font-medium mb-1">Email Us</div>
            <div className="text-xs opacity-70">contact@palettepicker.com</div>
          </div>
          
          <div 
            className="bg-background/50 p-3 rounded-md"
            style={{ color: colors.foreground }}
          >
            <div className="text-xs font-medium mb-1">Follow Us</div>
            <div className="flex gap-2 mt-2">
              {["X", "Instagram", "GitHub"].map((social) => (
                <div 
                  key={social}
                  className={cn(
                    "px-2 py-1 text-[10px] rounded-full",
                    interactive ? "cursor-pointer hover:opacity-90" : ""
                  )}
                  style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}
                  onClick={() => interactive && toast.info(`Visit us on ${social}`)}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {content.cards.map((card, index) => (
          <div 
            key={index}
            className={cn(
              "p-3 rounded-lg color-transition",
              interactive ? "cursor-pointer hover:opacity-90" : ""
            )}
            style={{ backgroundColor: colors.secondary, opacity: 0.7 }}
            onClick={() => interactive && toast.info(`${card.title}: ${card.description}`)}
          >
            <div 
              className="flex gap-2 items-center mb-2"
            >
              <div 
                className="w-6 h-6 rounded color-transition"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <div 
                className="text-xs font-medium color-transition"
                style={{ color: colors.foreground }}
              >
                {card.title}
              </div>
            </div>
            <div 
              className="text-xs color-transition"
              style={{ color: colors.foreground, opacity: 0.6 }}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="w-1/2 p-4 rounded-lg color-transition"
        style={{ backgroundColor: colors.secondary, opacity: 0.6 }}
      >
        <div 
          className="text-xs font-medium mb-3 color-transition"
          style={{ color: colors.foreground }}
        >
          Send us a message
        </div>
        
        {["Name", "Email", "Message"].map((field, i) => (
          <div key={field} className="mb-3">
            <div 
              className="text-xs mb-1 color-transition"
              style={{ color: colors.foreground, opacity: 0.8 }}
            >
              {field}
            </div>
            <div 
              className={cn(
                "w-full rounded-md p-2 mb-2 color-transition",
                field === "Message" ? "h-20" : "h-8"
              )}
              style={{ 
                backgroundColor: colors.background,
                border: `1px solid ${colors.accent}`,
                opacity: 0.8
              }}
            ></div>
          </div>
        ))}
        
        <div 
          className={cn(
            "mt-3 p-2 rounded text-xs text-center color-transition w-full",
            interactive ? "cursor-pointer hover:opacity-90 active:scale-95" : ""
          )}
          style={{ 
            backgroundColor: colors.primary,
            color: "#FFFFFF"
          }}
          onClick={() => interactive && toast.success("Message sent!")}
        >
          Send Message
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
