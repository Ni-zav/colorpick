// Define types for website content
export interface TabContent {
  title: string;
  description: string;
  featuredTitle: string;
  featuredDescription: string;
  cards: { title: string; description: string }[];
}

export interface WebsiteContent {
  [key: string]: TabContent;
}

// Website content for each tab
export const tabContent: WebsiteContent = {
  Home: {
    title: "Palette Picker",
    description: "Find the perfect color scheme for your next web project",
    featuredTitle: "Instantly Preview Colors",
    featuredDescription: "Browse through our curated collection of color palettes and see them in action. From soft pastels to bold vibrants, find the perfect combination for your brand's personality.",
    cards: [
      { title: "60+ Palettes", description: "Carefully crafted color combinations" },
      { title: "Live Preview", description: "See colors applied to real UI components" }
    ]
  },
  About: {
    title: "About Palette Picker",
    description: "Your ultimate color selection companion",
    featuredTitle: "Our Mission",
    featuredDescription: "Palette Picker was created to solve the challenge of finding harmonious color schemes for web projects. We've combined color theory principles with practical web design to deliver palettes that not only look good but work well in real applications.",
    cards: [
      { title: "Our Team", description: "Color experts & UX designers" },
      { title: "Our Values", description: "Accessibility, simplicity, beauty" }
    ]
  },
  Features: {
    title: "Powerful Features",
    description: "Everything you need for perfect colors",
    featuredTitle: "What We Offer",
    featuredDescription: "Palette Picker comes with categorized collections, interactive previews, one-click CSS export, and real-time visualization. Filter by style or mood to find exactly what your project needs, then export with a single click.",
    cards: [
      { title: "Category Filters", description: "Find palettes by style and purpose" },
      { title: "CSS Variables", description: "Copy ready-to-use code with one click" }
    ]
  },
  Colors: {
    title: "Color Palette",
    description: "Copy individual colors from this palette",
    featuredTitle: "Current Palette",
    featuredDescription: "Below are all the colors in the currently selected palette. Click on any color to copy its hex code to your clipboard for use in your projects.",
    cards: [
      { title: "Copy Colors", description: "Click on any color to copy its hex code" },
      { title: "Try Combinations", description: "Experiment with different color pairings" }
    ]
  },
  Contact: {
    title: "Get In Touch",
    description: "We'd love to hear from you",
    featuredTitle: "Contact Us",
    featuredDescription: "Have suggestions for new palettes? Found a color combination that works particularly well? Want to share how you've used our tool? Reach out and let us know how Palette Picker has helped with your projects.",
    cards: [
      { title: "Feedback", description: "Help us improve Palette Picker" },
      { title: "Support", description: "Get help with using our tool" }
    ]
  }
};
