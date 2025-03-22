import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover:bg-accent/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">About ColorPick</h1>
        </div>
        
        <section className="space-y-4">
          <h2 className="text-xl font-medium inverted-heading">Color Palette Generator</h2>
          <p className="text-muted-foreground leading-relaxed">
            ColorPick is a modern color palette generator designed to help developers and designers
            find the perfect color combinations for their projects. With support for both light
            and dark themes, it provides an intuitive way to visualize and implement color schemes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium inverted-heading">Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Multiple color palette categories</li>
            <li>• Light and dark mode support</li>
            <li>• Real-time preview</li>
            <li>• CSS variables export</li>
            <li>• Interactive UI components</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium inverted-heading">How to Use</h2>
          <p className="text-muted-foreground leading-relaxed">
            Browse through our curated collection of color palettes, filter by category,
            or search for specific themes. Click on any palette to preview it in action,
            and use the copy button to get the CSS variables for your project.
          </p>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-medium inverted-heading">Support</h2>
          <div className="flex flex-col items-start gap-3">
            <p className="text-muted-foreground leading-relaxed">
              If you find ColorPick useful in your projects and would like to support its development,
              you can buy me a coffee. Any support is deeply appreciated but entirely optional.
            </p>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-accent/10"
              >
                <Coffee className="h-4 w-4" />
                <span>Buy me a coffee</span>
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
