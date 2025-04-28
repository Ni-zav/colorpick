export interface Color {
  name: string;
  hex: string;
}

export interface Palette {
  id: string;
  name: string;
  description: string;
  colors: Color[];
  category: string;
}

export const palettes: Palette[] = [
  // Original Palettes
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean, simple, and elegant.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#1A1A1A" },
      { name: "Primary", hex: "#3A3A3A" },
      { name: "Secondary", hex: "#F5F5F5" },
      { name: "Accent", hex: "#D4D4D4" }
    ]
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "Cool and refreshing blues.",
    category: "Blue",
    colors: [
      { name: "Background", hex: "#F7FBFC" },
      { name: "Foreground", hex: "#14597A" },
      { name: "Primary", hex: "#4BA3C3" },
      { name: "Secondary", hex: "#D6E8EE" },
      { name: "Accent", hex: "#63CDD7" }
    ]
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description: "Warm and inviting colors.",
    category: "Warm",
    colors: [
      { name: "Background", hex: "#FFF8F0" },
      { name: "Foreground", hex: "#5D4037" },
      { name: "Primary", hex: "#FF7043" },
      { name: "Secondary", hex: "#FFECB3" },
      { name: "Accent", hex: "#FFB74D" }
    ]
  },
  {
    id: "forest-depths",
    name: "Forest Depths",
    description: "Natural earthy tones.",
    category: "Green",
    colors: [
      { name: "Background", hex: "#F1F8E9" },
      { name: "Foreground", hex: "#2E7D32" },
      { name: "Primary", hex: "#66BB6A" },
      { name: "Secondary", hex: "#DCEDC8" },
      { name: "Accent", hex: "#AED581" }
    ]
  },
  {
    id: "berry-bliss",
    name: "Berry Bliss",
    description: "Rich berry tones.",
    category: "Purple",
    colors: [
      { name: "Background", hex: "#FAF4FB" },
      { name: "Foreground", hex: "#4A148C" },
      { name: "Primary", hex: "#9575CD" },
      { name: "Secondary", hex: "#E1BEE7" },
      { name: "Accent", hex: "#CE93D8" }
    ]
  },
  {
    id: "night-owl",
    name: "Night Owl",
    description: "Dark mode for night coding.",
    category: "Dark",
    colors: [
      { name: "Background", hex: "#1E1E2E" },
      { name: "Foreground", hex: "#CDD6F4" },
      { name: "Primary", hex: "#89B4FA" },
      { name: "Secondary", hex: "#313244" },
      { name: "Accent", hex: "#F5C2E7" }
    ]
  },
  {
    id: "citrus-fresh",
    name: "Citrus Fresh",
    description: "Bright and energizing.",
    category: "Bright",
    colors: [
      { name: "Background", hex: "#FFFDE7" },
      { name: "Foreground", hex: "#004D40" },
      { name: "Primary", hex: "#FFEB3B" },
      { name: "Secondary", hex: "#F0F4C3" },
      { name: "Accent", hex: "#FFC107" }
    ]
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    description: "Elegant and luxurious.",
    category: "Elegant",
    colors: [
      { name: "Background", hex: "#FFF0F0" },
      { name: "Foreground", hex: "#5D4037" },
      { name: "Primary", hex: "#E0BFB8" },
      { name: "Secondary", hex: "#FFF0E6" },
      { name: "Accent", hex: "#DB927B" }
    ]
  },
  {
    id: "tech-slate",
    name: "Tech Slate",
    description: "Modern and professional.",
    category: "Professional",
    colors: [
      { name: "Background", hex: "#F5F7FA" },
      { name: "Foreground", hex: "#2C3E50" },
      { name: "Primary", hex: "#3498DB" },
      { name: "Secondary", hex: "#ECF0F1" },
      { name: "Accent", hex: "#95A5A6" }
    ]
  },
  {
    id: "nordic-frost",
    name: "Nordic Frost",
    description: "Clean Scandinavian design.",
    category: "Minimalist",
    colors: [
      { name: "Background", hex: "#ECEFF4" },
      { name: "Foreground", hex: "#2E3440" },
      { name: "Primary", hex: "#5E81AC" },
      { name: "Secondary", hex: "#E5E9F0" },
      { name: "Accent", hex: "#88C0D0" }
    ]
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    description: "Soft, Japanese-inspired palette.",
    category: "Soft",
    colors: [
      { name: "Background", hex: "#FFF5F5" },
      { name: "Foreground", hex: "#702459" },
      { name: "Primary", hex: "#F687B3" },
      { name: "Secondary", hex: "#FED7E2" },
      { name: "Accent", hex: "#FC8181" }
    ]
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Rich, coffee-inspired tones.",
    category: "Brown",
    colors: [
      { name: "Background", hex: "#F5F5F0" },
      { name: "Foreground", hex: "#3D2C29" },
      { name: "Primary", hex: "#967259" },
      { name: "Secondary", hex: "#E6DED7" },
      { name: "Accent", hex: "#C8B6A6" }
    ]
  },
  
  // New Bold Palettes
  {
    id: "electric-neon",
    name: "Electric Neon",
    description: "Vibrant and energetic colors for bold designs.",
    category: "Bold",
    colors: [
      { name: "Background", hex: "#121212" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#00FF41" },
      { name: "Secondary", hex: "#1F1F1F" },
      { name: "Accent", hex: "#FF00FF" }
    ]
  },
  {
    id: "vibrant-coral",
    name: "Vibrant Coral",
    description: "Bold coral tones with strong contrast.",
    category: "Bold",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#2E3A4F" },
      { name: "Primary", hex: "#FF5757" },
      { name: "Secondary", hex: "#F2F2F2" },
      { name: "Accent", hex: "#FF9F43" }
    ]
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean",
    description: "Rich, saturated blues and teals.",
    category: "Bold",
    colors: [
      { name: "Background", hex: "#04293A" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#0099DD" },
      { name: "Secondary", hex: "#063C5A" },
      { name: "Accent", hex: "#00FFD5" }
    ]
  },
  {
    id: "blood-orange",
    name: "Blood Orange",
    description: "Strong red-orange palette with dark contrasts.",
    category: "Bold",
    colors: [
      { name: "Background", hex: "#F8F9FA" },
      { name: "Foreground", hex: "#212529" },
      { name: "Primary", hex: "#E74C3C" },
      { name: "Secondary", hex: "#EAECEF" },
      { name: "Accent", hex: "#FF9500" }
    ]
  },
  {
    id: "cyber-punk",
    name: "Cyber Punk",
    description: "Futuristic neons on dark backgrounds.",
    category: "Bold",
    colors: [
      { name: "Background", hex: "#0D0221" },
      { name: "Foreground", hex: "#E4F1FE" },
      { name: "Primary", hex: "#FF003C" },
      { name: "Secondary", hex: "#171032" },
      { name: "Accent", hex: "#06BEE1" }
    ]
  },
  
  // Middle/Balanced Palettes
  {
    id: "autumn-harvest",
    name: "Autumn Harvest",
    description: "Warm, moderately saturated autumn colors.",
    category: "Balanced",
    colors: [
      { name: "Background", hex: "#F9F3F0" },
      { name: "Foreground", hex: "#45322E" },
      { name: "Primary", hex: "#D45D34" },
      { name: "Secondary", hex: "#EADFD6" },
      { name: "Accent", hex: "#A27035" }
    ]
  },
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    description: "Balanced greens and earth tones.",
    category: "Balanced",
    colors: [
      { name: "Background", hex: "#F6F8E2" },
      { name: "Foreground", hex: "#394D2B" },
      { name: "Primary", hex: "#7BA05B" },
      { name: "Secondary", hex: "#E8EDCC" },
      { name: "Accent", hex: "#C98B2F" }
    ]
  },
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    description: "Medium-saturation purples and lavenders.",
    category: "Balanced",
    colors: [
      { name: "Background", hex: "#F8F6FB" },
      { name: "Foreground", hex: "#4A3A5A" },
      { name: "Primary", hex: "#9D7ECA" },
      { name: "Secondary", hex: "#EEE9F6" },
      { name: "Accent", hex: "#C17ECF" }
    ]
  },
  {
    id: "coastal-breeze",
    name: "Coastal Breeze",
    description: "Medium-tone blues and sandy neutrals.",
    category: "Balanced",
    colors: [
      { name: "Background", hex: "#F3F8FB" },
      { name: "Foreground", hex: "#2B4D5E" },
      { name: "Primary", hex: "#5C9EAD" },
      { name: "Secondary", hex: "#E7F2F8" },
      { name: "Accent", hex: "#D4B483" }
    ]
  },
  
  // Professional/Corporate Palettes
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Professional blue-focused palette for business sites.",
    category: "Professional",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#333333" },
      { name: "Primary", hex: "#0056B3" },
      { name: "Secondary", hex: "#F5F7FA" },
      { name: "Accent", hex: "#00A3E0" }
    ]
  },
  {
    id: "executive-gray",
    name: "Executive Gray",
    description: "Refined grays with subtle accent.",
    category: "Professional",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#333333" },
      { name: "Primary", hex: "#666666" },
      { name: "Secondary", hex: "#F6F6F6" },
      { name: "Accent", hex: "#4CAF50" }
    ]
  },
  
  // Monochromatic Palettes
  {
    id: "blue-mono",
    name: "Blue Monochrome",
    description: "Various shades of blue.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#162447" },
      { name: "Primary", hex: "#1F4068" },
      { name: "Secondary", hex: "#E8F1F8" },
      { name: "Accent", hex: "#1B262C" }
    ]
  },
  {
    id: "green-mono",
    name: "Green Monochrome",
    description: "Shades of green for a cohesive look.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#1B5E20" },
      { name: "Primary", hex: "#388E3C" },
      { name: "Secondary", hex: "#E8F5E9" },
      { name: "Accent", hex: "#2E7D32" }
    ]
  },
  
  // Dark Themes
  {
    id: "midnight-blue",
    name: "Midnight Blue",
    description: "Dark blue theme for night mode interfaces.",
    category: "Dark",
    colors: [
      { name: "Background", hex: "#0F172A" },
      { name: "Foreground", hex: "#E2E8F0" },
      { name: "Primary", hex: "#38BDF8" },
      { name: "Secondary", hex: "#1E293B" },
      { name: "Accent", hex: "#F472B6" }
    ]
  },
  {
    id: "dark-forest",
    name: "Dark Forest",
    description: "Deep greens in a dark theme.",
    category: "Dark",
    colors: [
      { name: "Background", hex: "#121B12" },
      { name: "Foreground", hex: "#E2E8E2" },
      { name: "Primary", hex: "#4ADE80" },
      { name: "Secondary", hex: "#1C2B1C" },
      { name: "Accent", hex: "#FACC15" }
    ]
  },
  {
    id: "charcoal",
    name: "Charcoal",
    description: "Sophisticated dark grays.",
    category: "Dark",
    colors: [
      { name: "Background", hex: "#1A1A1A" },
      { name: "Foreground", hex: "#E0E0E0" },
      { name: "Primary", hex: "#A3A3A3" },
      { name: "Secondary", hex: "#2A2A2A" },
      { name: "Accent", hex: "#F5F5F5" }
    ]
  },
  
  // Vibrant Themes
  {
    id: "tropical-punch",
    name: "Tropical Punch",
    description: "Bright and energetic colors inspired by tropical fruits.",
    category: "Vibrant",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#4A1942" },
      { name: "Primary", hex: "#FF3864" },
      { name: "Secondary", hex: "#FFF9EC" },
      { name: "Accent", hex: "#FFBB3C" }
    ]
  },
  {
    id: "candy-pop",
    name: "Candy Pop",
    description: "Bright candy-inspired colors.",
    category: "Vibrant",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#4A184A" },
      { name: "Primary", hex: "#FE4EDA" },
      { name: "Secondary", hex: "#FFF0FD" },
      { name: "Accent", hex: "#72DEFF" }
    ]
  },
  {
    id: "summer-splash",
    name: "Summer Splash",
    description: "Vibrant summer colors for playful designs.",
    category: "Vibrant",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#2C3E50" },
      { name: "Primary", hex: "#00D2FF" },
      { name: "Secondary", hex: "#F0F8FF" },
      { name: "Accent", hex: "#FFC700" }
    ]
  },
  
  // Earth Tones
  {
    id: "terra-cotta",
    name: "Terra Cotta",
    description: "Warm earth tones inspired by clay and ceramics.",
    category: "Earth",
    colors: [
      { name: "Background", hex: "#FCF7F2" },
      { name: "Foreground", hex: "#59372D" },
      { name: "Primary", hex: "#C27C5C" },
      { name: "Secondary", hex: "#F2E8DF" },
      { name: "Accent", hex: "#A15128" }
    ]
  },
  {
    id: "olive-grove",
    name: "Olive Grove",
    description: "Muted olive greens and complementary earth tones.",
    category: "Earth",
    colors: [
      { name: "Background", hex: "#F8F7F3" },
      { name: "Foreground", hex: "#3A3A2F" },
      { name: "Primary", hex: "#7A8450" },
      { name: "Secondary", hex: "#EEEEE4" },
      { name: "Accent", hex: "#C5A57F" }
    ]
  },
  
  // Pastel Palettes
  {
    id: "cotton-candy",
    name: "Cotton Candy",
    description: "Soft pastel pinks and blues.",
    category: "Pastel",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#5D576B" },
      { name: "Primary", hex: "#F7C5CC" },
      { name: "Secondary", hex: "#F9F9F9" },
      { name: "Accent", hex: "#AED9E0" }
    ]
  },
  {
    id: "mint-cream",
    name: "Mint Cream",
    description: "Soothing pastel mint and cream tones.",
    category: "Pastel",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#4F6457" },
      { name: "Primary", hex: "#B8E0D2" },
      { name: "Secondary", hex: "#F9F9F9" },
      { name: "Accent", hex: "#FAE7C9" }
    ]
  },
  {
    id: "lavender-mist",
    name: "Lavender Mist",
    description: "Delicate pastel purples and lavenders.",
    category: "Pastel",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#534666" },
      { name: "Primary", hex: "#D1C4E9" },
      { name: "Secondary", hex: "#F9F7FC" },
      { name: "Accent", hex: "#FFCCBC" }
    ]
  },
  
  // High Contrast
  {
    id: "stark-contrast",
    name: "Stark Contrast",
    description: "Maximum contrast black and white with a pop of color.",
    category: "High Contrast",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#000000" },
      { name: "Primary", hex: "#FF0000" },
      { name: "Secondary", hex: "#F0F0F0" },
      { name: "Accent", hex: "#C00000" }
    ]
  },
  {
    id: "night-vision",
    name: "Night Vision",
    description: "High contrast dark theme with neon green.",
    category: "High Contrast",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#39FF14" },
      { name: "Secondary", hex: "#0A0A0A" },
      { name: "Accent", hex: "#00FF41" }
    ]
  },
  
  // Retro Themes
  {
    id: "eighties-retro",
    name: "80s Retro",
    description: "Bold colors inspired by 1980s design.",
    category: "Retro",
    colors: [
      { name: "Background", hex: "#180045" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#FF2A6D" },
      { name: "Secondary", hex: "#2D1157" },
      { name: "Accent", hex: "#05FFA1" }
    ]
  },
  {
    id: "vintage-computing",
    name: "Vintage Computing",
    description: "Inspired by early computers with monochrome displays.",
    category: "Retro",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#33FF33" },
      { name: "Primary", hex: "#22AA22" },
      { name: "Secondary", hex: "#111111" },
      { name: "Accent", hex: "#44FF44" }
    ]
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    description: "Nostalgic purple and teal palette.",
    category: "Retro",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#464074" },
      { name: "Primary", hex: "#FF6AD5" },
      { name: "Secondary", hex: "#F8F8F8" },
      { name: "Accent", hex: "#26D9FE" }
    ]
  },
    // Additional Palettes
  // Monochrome Palettes
  {
    id: "grayscale",
    name: "Grayscale",
    description: "Pure grayscale palette for minimalist designs",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#191919" },
      { name: "Primary", hex: "#555555" },
      { name: "Secondary", hex: "#EEEEEE" },
      { name: "Accent", hex: "#AAAAAA" }
    ]
  },
  {
    id: "elegant-noir",
    name: "Elegant Noir",
    description: "Sophisticated black and white tones.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FAFAFA" },
      { name: "Foreground", hex: "#121212" },
      { name: "Primary", hex: "#333333" },
      { name: "Secondary", hex: "#F5F5F5" },
      { name: "Accent", hex: "#888888" }
    ]
  },
  
  // Earthy Tones
  {
    id: "desert-sand",
    name: "Desert Sand",
    description: "Warm desert-inspired earthy tones.",
    category: "Earth",
    colors: [
      { name: "Background", hex: "#FDF8F3" },
      { name: "Foreground", hex: "#4D3A2A" },
      { name: "Primary", hex: "#B8926A" },
      { name: "Secondary", hex: "#F3E9DD" },
      { name: "Accent", hex: "#D9BF9C" }
    ]
  },
  {
    id: "forest-moss",
    name: "Forest Moss",
    description: "Deep greens inspired by forest floors.",
    category: "Earth",
    colors: [
      { name: "Background", hex: "#F6F8F2" },
      { name: "Foreground", hex: "#364021" },
      { name: "Primary", hex: "#5A6F38" },
      { name: "Secondary", hex: "#E5E9D9" },
      { name: "Accent", hex: "#8B9A5A" }
    ]
  },
  {
    id: "clay-pottery",
    name: "Clay Pottery",
    description: "Terracotta and pottery-inspired earth tones.",
    category: "Earth",
    colors: [
      { name: "Background", hex: "#FCF8F5" },
      { name: "Foreground", hex: "#6D4534" },
      { name: "Primary", hex: "#B67F5E" },
      { name: "Secondary", hex: "#EDE2D7" },
      { name: "Accent", hex: "#D9A589" }
    ]
  },
  
  // Luxury Palettes
  {
    id: "gold-luxury",
    name: "Gold Luxury",
    description: "Elegant gold and black palette.",
    category: "Luxury",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#1A1A1A" },
      { name: "Primary", hex: "#D4AF37" },
      { name: "Secondary", hex: "#F5F5F5" },
      { name: "Accent", hex: "#9D7E2F" }
    ]
  },
  {
    id: "midnight-emerald",
    name: "Midnight Emerald",
    description: "Dark theme with emerald accents.",
    category: "Luxury",
    colors: [
      { name: "Background", hex: "#0F1A20" },
      { name: "Foreground", hex: "#E9ECEF" },
      { name: "Primary", hex: "#00A693" },
      { name: "Secondary", hex: "#1C2A34" },
      { name: "Accent", hex: "#00C2A8" }
    ]
  },
  {
    id: "royal-velvet",
    name: "Royal Velvet",
    description: "Rich purple luxury palette.",
    category: "Luxury",
    colors: [
      { name: "Background", hex: "#FCFAFF" },
      { name: "Foreground", hex: "#1D0E2F" },
      { name: "Primary", hex: "#5B2A86" },
      { name: "Secondary", hex: "#F0E6FF" },
      { name: "Accent", hex: "#9455D3" }
    ]
  },
  
  // Modern Minimalist
  {
    id: "clean-slate",
    name: "Clean Slate",
    description: "Crisp and clean minimalist design.",
    category: "Minimalist",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#111827" },
      { name: "Primary", hex: "#374151" },
      { name: "Secondary", hex: "#F9FAFB" },
      { name: "Accent", hex: "#9CA3AF" }
    ]
  },
  {
    id: "frost-minimal",
    name: "Frost Minimal",
    description: "Cool frost-inspired minimal palette.",
    category: "Minimalist",
    colors: [
      { name: "Background", hex: "#F8FAFC" },
      { name: "Foreground", hex: "#1E293B" },
      { name: "Primary", hex: "#64748B" },
      { name: "Secondary", hex: "#F1F5F9" },
      { name: "Accent", hex: "#94A3B8" }
    ]
  },
  
  // Neon Themes
  {
    id: "neon-nights",
    name: "Neon Nights",
    description: "Vibrant neon colors on dark background.",
    category: "Neon",
    colors: [
      { name: "Background", hex: "#0D0D0D" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#FF00FF" }, // Magenta
      { name: "Secondary", hex: "#1A1A1A" },
      { name: "Accent", hex: "#00FFFF" }  // Cyan
    ]
  },
  {
    id: "cyber-green",
    name: "Cyber Green",
    description: "Matrix-inspired green neon theme.",
    category: "Neon",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#00FF41" },
      { name: "Secondary", hex: "#0A0A0A" },
      { name: "Accent", hex: "#5CFF5C" }
    ]
  },
  {
    id: "electric-violet",
    name: "Electric Violet",
    description: "Electrifying purple neon palette.",
    category: "Neon",
    colors: [
      { name: "Background", hex: "#130021" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#B026FF" },
      { name: "Secondary", hex: "#1D0934" },
      { name: "Accent", hex: "#DE38FF" }
    ]
  },
  
  // Pastels Extended
  {
    id: "pastel-dreams",
    name: "Pastel Dreams",
    description: "Soft pastel colors for dreamy designs.",
    category: "Pastel",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#6B5A74" },
      { name: "Primary", hex: "#FFD6E0" }, // Soft pink
      { name: "Secondary", hex: "#FBFBFB" },
      { name: "Accent", hex: "#FFEFB5" }  // Soft yellow
    ]
  },
  {
    id: "seafoam-pastel",
    name: "Seafoam Pastel",
    description: "Ocean-inspired soft pastel tones.",
    category: "Pastel",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#4A6670" },
      { name: "Primary", hex: "#C1E8E0" },
      { name: "Secondary", hex: "#F9FDFC" },
      { name: "Accent", hex: "#D3EEF9" }
    ]
  },
  
  // Natural Palettes
  {
    id: "sunflower-field",
    name: "Sunflower Field",
    description: "Bright yellows with natural green accents.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#FFFEF7" },
      { name: "Foreground", hex: "#4A4000" },
      { name: "Primary", hex: "#FFD630" },
      { name: "Secondary", hex: "#F9F7E8" },
      { name: "Accent", hex: "#7EA310" }
    ]
  },
  
  // Add these new palettes to the palettes array
  {
    id: "toxic-waste",
    name: "Toxic Waste",
    description: "Radioactive greens and warning yellows.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#0D0D0C" },
      { name: "Foreground", hex: "#E2FF1A" },
      { name: "Primary", hex: "#50FA7B" },
      { name: "Secondary", hex: "#1A1A15" },
      { name: "Accent", hex: "#FFFF00" }
    ]
  },
  {
    id: "binary-code",
    name: "Binary Code",
    description: "Matrix-inspired with only two colors.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#00FF00" },
      { name: "Secondary", hex: "#000000" },
      { name: "Accent", hex: "#00FF00" }
    ]
  },
  {
    id: "glitch-art",
    name: "Glitch Art",
    description: "Distorted digital aesthetics.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#FF00FF" },
      { name: "Foreground", hex: "#00FFFF" },
      { name: "Primary", hex: "#FF0000" },
      { name: "Secondary", hex: "#0000FF" },
      { name: "Accent", hex: "#FFFF00" }
    ]
  },
  {
    id: "oil-spill",
    name: "Oil Spill",
    description: "Iridescent oil slick colors.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#1C1C1C" },
      { name: "Foreground", hex: "#E7E7E7" },
      { name: "Primary", hex: "#FF1493" },
      { name: "Secondary", hex: "#4B0082" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },
  {
    id: "moldy-bread",
    name: "Moldy Bread",
    description: "Inspired by aged food aesthetics.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#E8DCC4" },
      { name: "Foreground", hex: "#4A4A3C" },
      { name: "Primary", hex: "#7DAF9C" },
      { name: "Secondary", hex: "#C4B59D" },
      { name: "Accent", hex: "#526E63" }
    ]
  },
  {
    id: "bruised-fruit",
    name: "Bruised Fruit",
    description: "Colors of overripe and bruised produce.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#4A1B1B" },
      { name: "Foreground", hex: "#E8C07D" },
      { name: "Primary", hex: "#8B4513" },
      { name: "Secondary", hex: "#654321" },
      { name: "Accent", hex: "#483C32" }
    ]
  },
  {
    id: "chemical-burn",
    name: "Chemical Burn",
    description: "Harsh, artificial laboratory colors.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#CCFF00" },
      { name: "Foreground", hex: "#FF0099" },
      { name: "Primary", hex: "#00FFFF" },
      { name: "Secondary", hex: "#FF6600" },
      { name: "Accent", hex: "#99FF00" }
    ]
  },
  {
    id: "deep-sea",
    name: "Deep Sea Creature",
    description: "Bioluminescent deep ocean colors.",
    category: "Unique",
    colors: [
      { name: "Background", hex: "#000019" },
      { name: "Foreground", hex: "#00FFFF" },
      { name: "Primary", hex: "#4DEEEA" },
      { name: "Secondary", hex: "#000033" },
      { name: "Accent", hex: "#74EE15" }
    ]
  },
  {
    id: "rust-decay",
    name: "Rust & Decay",
    description: "Oxidized metal and corrosion.",
    category: "Unique",
    colors: [
      { name: "Background", hex: "#8B4513" },
      { name: "Foreground", hex: "#DEB887" },
      { name: "Primary", hex: "#CD853F" },
      { name: "Secondary", hex: "#6B4423" },
      { name: "Accent", hex: "#FF6B6B" }
    ]
  },
  // Continue adding more palettes...
  // Note: For brevity, I'm showing just a few examples. 
  // You would continue this pattern for all 50 new palettes
  // with unique themes like:
  // - "Thermal Vision"
  // - "UV Light"
  // - "Microscope Slide"
  // - "Space Nebula"
  // - "Beetle Shell"
  // - "Mold Culture"
  // - "Circuit Board"
  // - "Solar Flare"
  // etc...
  // Additional Unique/Unorthodox Palettes
  {
    id: "thermal-vision",
    name: "Thermal Vision",
    description: "Infrared camera temperature visualization.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FF0000" },
      { name: "Primary", hex: "#FF6B00" },
      { name: "Secondary", hex: "#1A1A1A" },
      { name: "Accent", hex: "#FFFF00" }
    ]
  },
  {
    id: "uv-light",
    name: "UV Light",
    description: "Blacklight fluorescent colors.",
    category: "Unorthodox",
    colors: [
      { name: "Background", hex: "#0D0033" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#8B00FF" },
      { name: "Secondary", hex: "#1A0066" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },
  {
    id: "microscope-slide",
    name: "Microscope Slide",
    description: "Biology stain visualization colors.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#F5F5FF" },
      { name: "Foreground", hex: "#2C0066" },
      { name: "Primary", hex: "#FF69B4" },
      { name: "Secondary", hex: "#E6E6FF" },
      { name: "Accent", hex: "#4B0082" }
    ]
  },
  {
    id: "space-nebula",
    name: "Space Nebula",
    description: "Cosmic dust and gas clouds.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#0B0B1A" },
      { name: "Foreground", hex: "#E6E6FA" },
      { name: "Primary", hex: "#FF1493" },
      { name: "Secondary", hex: "#191938" },
      { name: "Accent", hex: "#4B0082" }
    ]
  },
  {
    id: "beetle-shell",
    name: "Beetle Shell",
    description: "Iridescent insect exoskeleton.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#001F3F" },
      { name: "Foreground", hex: "#7FDBFF" },
      { name: "Primary", hex: "#39CCCC" },
      { name: "Secondary", hex: "#002D4F" },
      { name: "Accent", hex: "#01FF70" }
    ]
  },
  {
    id: "mold-culture",
    name: "Mold Culture",
    description: "Petri dish experiment colors.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#FAFAF0" },
      { name: "Foreground", hex: "#2D4F1E" },
      { name: "Primary", hex: "#8B9B6E" },
      { name: "Secondary", hex: "#F0F0E1" },
      { name: "Accent", hex: "#4F7942" }
    ]
  },
  {
    id: "circuit-board",
    name: "Circuit Board",
    description: "PCB and electronic component colors.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#1B4D3E" },
      { name: "Foreground", hex: "#FFB52E" },
      { name: "Primary", hex: "#7FFF00" },
      { name: "Secondary", hex: "#265C4B" },
      { name: "Accent", hex: "#FFD700" }
    ]
  },
  {
    id: "solar-flare",
    name: "Solar Flare",
    description: "Sun surface plasma eruption.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#FF4500" },
      { name: "Foreground", hex: "#FFFF00" },
      { name: "Primary", hex: "#FFA500" },
      { name: "Secondary", hex: "#FF6B00" },
      { name: "Accent", hex: "#FFFFFF" }
    ]
  },
  {
    id: "quantum-state",
    name: "Quantum State",
    description: "Particle physics visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#000033" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#FF00FF" },
      { name: "Secondary", hex: "#000066" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },
  {
    id: "crystal-growth",
    name: "Crystal Growth",
    description: "Mineral formation patterns.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#2F4F4F" },
      { name: "Foreground", hex: "#E0FFFF" },
      { name: "Primary", hex: "#00CED1" },
      { name: "Secondary", hex: "#3D5C5C" },
      { name: "Accent", hex: "#48D1CC" }
    ]
  },
  {
    id: "code-matrix",
    name: "Code Matrix",
    description: "Falling digital rain.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#008F11" },
      { name: "Secondary", hex: "#0D0D0D" },
      { name: "Accent", hex: "#11FF11" }
    ]
  },
  {
    id: "bio-hazard",
    name: "Bio Hazard",
    description: "Warning signs and danger colors.",
    category: "Warning",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FFFF00" },
      { name: "Primary", hex: "#FF0000" },
      { name: "Secondary", hex: "#1A1A1A" },
      { name: "Accent", hex: "#FF6600" }
    ]
  },
  {
    id: "radiation",
    name: "Radiation",
    description: "Nuclear warning colors.",
    category: "Warning",
    colors: [
      { name: "Background", hex: "#3A3A3A" },
      { name: "Foreground", hex: "#F3F351" },
      { name: "Primary", hex: "#FF6B00" },
      { name: "Secondary", hex: "#4A4A4A" },
      { name: "Accent", hex: "#CCFF00" }
    ]
  },
  {
    id: "deep-ocean-vent",
    name: "Deep Ocean Vent",
    description: "Hydrothermal activity colors.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#000033" },
      { name: "Foreground", hex: "#FF6600" },
      { name: "Primary", hex: "#FF0000" },
      { name: "Secondary", hex: "#000066" },
      { name: "Accent", hex: "#FFCC00" }
    ]
  },
  {
    id: "aurora-borealis",
    name: "Aurora Borealis",
    description: "Northern lights in the sky.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#0B0B3B" },
      { name: "Foreground", hex: "#50C878" },
      { name: "Primary", hex: "#4B0082" },
      { name: "Secondary", hex: "#120C6E" },
      { name: "Accent", hex: "#00FF7F" }
    ]
  },
  
  // Additional Experimental Palettes
  {
    id: "liquid-metal",
    name: "Liquid Metal",
    description: "Metallic chrome and steel finishes.",
    category: "Experimental",
    colors: [
      { name: "Background", hex: "#CECECE" },
      { name: "Foreground", hex: "#1A1A1A" },
      { name: "Primary", hex: "#B2B2B2" },
      { name: "Secondary", hex: "#E8E8E8" },
      { name: "Accent", hex: "#8C8C8C" }
    ]
  },
  {
    id: "plasma-field",
    name: "Plasma Field",
    description: "Energy field visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#000066" },
      { name: "Foreground", hex: "#FF66FF" },
      { name: "Primary", hex: "#6600FF" },
      { name: "Secondary", hex: "#000099" },
      { name: "Accent", hex: "#FF00FF" }
    ]
  },
  {
    id: "rust-garden",
    name: "Rust Garden",
    description: "Weathered metal and oxidation.",
    category: "Industrial",
    colors: [
      { name: "Background", hex: "#8B4513" },
      { name: "Foreground", hex: "#F4A460" },
      { name: "Primary", hex: "#D2691E" },
      { name: "Secondary", hex: "#A0522D" },
      { name: "Accent", hex: "#CD853F" }
    ]
  },
  {
    id: "neural-network",
    name: "Neural Network",
    description: "AI and machine learning visualization.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#0A0A1A" },
      { name: "Foreground", hex: "#00FF9F" },
      { name: "Primary", hex: "#00B8FF" },
      { name: "Secondary", hex: "#1A1A2E" },
      { name: "Accent", hex: "#FF00B8" }
    ]
  },
  
  // More Experimental Palettes
  {
    id: "bacterial-growth",
    name: "Bacterial Growth",
    description: "Microorganism culture patterns.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#F0F5E5" },
      { name: "Foreground", hex: "#336633" },
      { name: "Primary", hex: "#99CC33" },
      { name: "Secondary", hex: "#E5EED4" },
      { name: "Accent", hex: "#669900" }
    ]
  },
  {
    id: "magnetic-field",
    name: "Magnetic Field",
    description: "Electromagnetic visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#000066" },
      { name: "Foreground", hex: "#FF3366" },
      { name: "Primary", hex: "#3366FF" },
      { name: "Secondary", hex: "#000099" },
      { name: "Accent", hex: "#FF99CC" }
    ]
  },
  {
    id: "volcanic-glass",
    name: "Volcanic Glass",
    description: "Obsidian and magma inspired.",
    category: "Geological",
    colors: [
      { name: "Background", hex: "#1A0F0F" },
      { name: "Foreground", hex: "#FF6B6B" },
      { name: "Primary", hex: "#8B0000" },
      { name: "Secondary", hex: "#2D1919" },
      { name: "Accent", hex: "#FF4500" }
    ]
  },
  {
    id: "quantum-foam",
    name: "Quantum Foam",
    description: "Subatomic space-time fabric.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#0D0D1A" },
      { name: "Foreground", hex: "#00FFFF" },
      { name: "Primary", hex: "#FF00FF" },
      { name: "Secondary", hex: "#1A1A2D" },
      { name: "Accent", hex: "#FFFF00" }
    ]
  },
  {
    id: "digital-glitch",
    name: "Digital Glitch",
    description: "Corrupted data visualization.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FF0000" },
      { name: "Primary", hex: "#00FF00" },
      { name: "Secondary", hex: "#0000FF" },
      { name: "Accent", hex: "#FF00FF" }
    ]
  },
  {
    id: "radio-waves",
    name: "Radio Waves",
    description: "Electromagnetic spectrum visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#001133" },
      { name: "Foreground", hex: "#00FF99" },
      { name: "Primary", hex: "#00CCFF" },
      { name: "Secondary", hex: "#002266" },
      { name: "Accent", hex: "#FF3366" }
    ]
  },
  {
    id: "acid-bath",
    name: "Acid Bath",
    description: "Corrosive chemical colors.",
    category: "Warning",
    colors: [
      { name: "Background", hex: "#1A1A00" },
      { name: "Foreground", hex: "#FFFF00" },
      { name: "Primary", hex: "#99CC00" },
      { name: "Secondary", hex: "#333300" },
      { name: "Accent", hex: "#CCFF00" }
    ]
  },
  {
    id: "desert-mirage",
    name: "Desert Mirage",
    description: "Heat distortion effects.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#FFE4B5" },
      { name: "Foreground", hex: "#8B4513" },
      { name: "Primary", hex: "#F4A460" },
      { name: "Secondary", hex: "#FFF8DC" },
      { name: "Accent", hex: "#00CED1" }
    ]
  },
  
  // Add these new experimental palettes
  {
    id: "bioluminescent",
    name: "Bioluminescent",
    description: "Deep sea creature inspired glow.",
    category: "Experimental",
    colors: [
      { name: "Background", hex: "#000D1A" },
      { name: "Foreground", hex: "#7AFFFF" },
      { name: "Primary", hex: "#00FFB3" },
      { name: "Secondary", hex: "#001A33" },
      { name: "Accent", hex: "#59FFF5" }
    ]
  },
  {
    id: "nanotech",
    name: "Nanotech",
    description: "Microscopic machinery visualization.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#0A0F2D" },
      { name: "Foreground", hex: "#80FFDB" },
      { name: "Primary", hex: "#40C9FF" },
      { name: "Secondary", hex: "#141B4D" },
      { name: "Accent", hex: "#E040FB" }
    ]
  },
  {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    description: "Interstellar cloud particles.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#1C1135" },
      { name: "Foreground", hex: "#FFB7FF" },
      { name: "Primary", hex: "#7B61FF" },
      { name: "Secondary", hex: "#2D1B54" },
      { name: "Accent", hex: "#FF61DC" }
    ]
  },
  {
    id: "fungal-forest",
    name: "Fungal Forest",
    description: "Bioluminescent mushroom colors.",
    category: "Natural",
    colors: [
      { name: "Background", hex: "#1A2C1A" },
      { name: "Foreground", hex: "#90FF9D" },
      { name: "Primary", hex: "#FFCA1B" },
      { name: "Secondary", hex: "#2D4A2D" },
      { name: "Accent", hex: "#FF66CC" }
    ]
  },
  {
    id: "quantum-realm",
    name: "Quantum Realm",
    description: "Subatomic particle visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#090422" },
      { name: "Foreground", hex: "#FFE600" },
      { name: "Primary", hex: "#00FFFF" },
      { name: "Secondary", hex: "#120844" },
      { name: "Accent", hex: "#FF00FF" }
    ]
  },
  {
    id: "data-stream",
    name: "Data Stream",
    description: "Digital information flow.",
    category: "Tech",
    colors: [
      { name: "Background", hex: "#0A0A0A" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#00CCFF" },
      { name: "Secondary", hex: "#1A1A1A" },
      { name: "Accent", hex: "#FF3366" }
    ]
  },
  {
    id: "ancient-tech",
    name: "Ancient Tech",
    description: "Lost civilization technology.",
    category: "Experimental",
    colors: [
      { name: "Background", hex: "#1A0F0F" },
      { name: "Foreground", hex: "#FFB300" },
      { name: "Primary", hex: "#00FFCC" },
      { name: "Secondary", hex: "#2D1919" },
      { name: "Accent", hex: "#FF6E27" }
    ]
  },
  {
    id: "holographic",
    name: "Holographic",
    description: "Light interference patterns.",
    category: "Experimental",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#FF00FF" },
      { name: "Secondary", hex: "#0D0D0D" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },

  // Weather Phenomena
  {
    id: "storm-front",
    name: "Storm Front",
    description: "Thunderstorm and lightning colors.",
    category: "Weather",
    colors: [
      { name: "Background", hex: "#1A1A2E" },
      { name: "Foreground", hex: "#E4E4FF" },
      { name: "Primary", hex: "#4A90E2" },
      { name: "Secondary", hex: "#2D2D4D" },
      { name: "Accent", hex: "#FFD700" }
    ]
  },
  {
    id: "tornado-alley",
    name: "Tornado Alley",
    description: "Turbulent storm patterns.",
    category: "Weather",
    colors: [
      { name: "Background", hex: "#2C3E50" },
      { name: "Foreground", hex: "#ECF0F1" },
      { name: "Primary", hex: "#95A5A6" },
      { name: "Secondary", hex: "#34495E" },
      { name: "Accent", hex: "#16A085" }
    ]
  },

  // Geological Formations
  {
    id: "geode-crystal",
    name: "Geode Crystal",
    description: "Natural crystal formation colors.",
    category: "Geological",
    colors: [
      { name: "Background", hex: "#2D1B36" },
      { name: "Foreground", hex: "#E6B8FF" },
      { name: "Primary", hex: "#9B4DCA" },
      { name: "Secondary", hex: "#3D2647" },
      { name: "Accent", hex: "#FFB6C1" }
    ]
  },
  {
    id: "mineral-vein",
    name: "Mineral Vein",
    description: "Underground ore deposits.",
    category: "Geological",
    colors: [
      { name: "Background", hex: "#1A1A1A" },
      { name: "Foreground", hex: "#FFD700" },
      { name: "Primary", hex: "#C0C0C0" },
      { name: "Secondary", hex: "#2D2D2D" },
      { name: "Accent", hex: "#B87333" }
    ]
  },

  // Chemical Reactions
  {
    id: "catalyst",
    name: "Catalyst",
    description: "Chemical reaction color changes.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#0A1128" },
      { name: "Foreground", hex: "#00FF88" },
      { name: "Primary", hex: "#FF3366" },
      { name: "Secondary", hex: "#1A2747" },
      { name: "Accent", hex: "#00CCFF" }
    ]
  },
  {
    id: "combustion",
    name: "Combustion",
    description: "Fire and flame reaction colors.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#1A0F0F" },
      { name: "Foreground", hex: "#FFD700" },
      { name: "Primary", hex: "#FF4500" },
      { name: "Secondary", hex: "#2D1919" },
      { name: "Accent", hex: "#FF8C00" }
    ]
  },

  // Biological Systems
  {
    id: "cell-membrane",
    name: "Cell Membrane",
    description: "Biological barrier visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#F5F5FF" },
      { name: "Foreground", hex: "#2C3E50" },
      { name: "Primary", hex: "#FF6B6B" },
      { name: "Secondary", hex: "#E6E6FF" },
      { name: "Accent", hex: "#4ECDC4" }
    ]
  },
  {
    id: "neural-synapse",
    name: "Neural Synapse",
    description: "Brain cell communication.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#FF00FF" },
      { name: "Secondary", hex: "#0D0D0D" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },

  // Deep Space Objects
  {
    id: "black-hole",
    name: "Black Hole",
    description: "Event horizon visualization.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FFFFFF" },
      { name: "Primary", hex: "#4B0082" },
      { name: "Secondary", hex: "#0D0D0D" },
      { name: "Accent", hex: "#9400D3" }
    ]
  },
  {
    id: "pulsar",
    name: "Pulsar",
    description: "Rotating neutron star.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#0D0D1A" },
      { name: "Foreground", hex: "#E6E6FA" },
      { name: "Primary", hex: "#00FFFF" },
      { name: "Secondary", hex: "#1A1A2D" },
      { name: "Accent", hex: "#FF1493" }
    ]
  },

  // Quantum Physics
  {
    id: "superposition",
    name: "Superposition",
    description: "Quantum state visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#0A0A1A" },
      { name: "Foreground", hex: "#00FF00" },
      { name: "Primary", hex: "#FF00FF" },
      { name: "Secondary", hex: "#1A1A2D" },
      { name: "Accent", hex: "#00FFFF" }
    ]
  },
  {
    id: "entanglement",
    name: "Entanglement",
    description: "Quantum particle correlation.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#000033" },
      { name: "Foreground", hex: "#FF3366" },
      { name: "Primary", hex: "#00FFFF" },
      { name: "Secondary", hex: "#000066" },
      { name: "Accent", hex: "#FF00FF" }
    ]
  },

  // Deep Ocean Themes
  {
    id: "abyssal-zone",
    name: "Abyssal Zone",
    description: "Deep ocean darkness and pressure.",
    category: "Ocean",
    colors: [
      { name: "Background", hex: "#000B14" },
      { name: "Foreground", hex: "#4DEEEA" },
      { name: "Primary", hex: "#05668D" },
      { name: "Secondary", hex: "#02182B" },
      { name: "Accent", hex: "#7BEDE6" }
    ]
  },

  // Stellar Evolution
  {
    id: "red-giant",
    name: "Red Giant",
    description: "Dying star expansion phase.",
    category: "Cosmic",
    colors: [
      { name: "Background", hex: "#1A0001" },
      { name: "Foreground", hex: "#FF9E9E" },
      { name: "Primary", hex: "#FF4242" },
      { name: "Secondary", hex: "#2D0002" },
      { name: "Accent", hex: "#FFB84D" }
    ]
  },

  // Time Dilation
  {
    id: "temporal-shift",
    name: "Temporal Shift",
    description: "Time warping visualization.",
    category: "Scientific",
    colors: [
      { name: "Background", hex: "#0D1B2A" },
      { name: "Foreground", hex: "#48CAE4" },
      { name: "Primary", hex: "#3D5A80" },
      { name: "Secondary", hex: "#1B3A5C" },
      { name: "Accent", hex: "#90E0EF" }
    ]
  },

  // Crystalline Formations
  {
    id: "bismuth-crystal",
    name: "Bismuth Crystal",
    description: "Iridescent crystalline structures.",
    category: "Geological",
    colors: [
      { name: "Background", hex: "#2B2B2B" },
      { name: "Foreground", hex: "#FFB6EF" },
      { name: "Primary", hex: "#9B72AA" },
      { name: "Secondary", hex: "#413F54" },
      { name: "Accent", hex: "#FFD700" }
    ]
  },

  // Add these new monochrome palettes
  {
    id: "red-mono",
    name: "Red Monochrome",
    description: "Various shades of red.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#4A0000" },
      { name: "Primary", hex: "#8B0000" },
      { name: "Secondary", hex: "#FFE6E6" },
      { name: "Accent", hex: "#CC0000" }
    ]
  },
  {
    id: "purple-mono",
    name: "Purple Monochrome",
    description: "Elegant purple gradients.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#2C0052" },
      { name: "Primary", hex: "#6B238E" },
      { name: "Secondary", hex: "#F5E6FF" },
      { name: "Accent", hex: "#9B4DCA" }
    ]
  },
  {
    id: "brown-mono",
    name: "Brown Monochrome",
    description: "Earthy brown tones.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#3D2B1F" },
      { name: "Primary", hex: "#795548" },
      { name: "Secondary", hex: "#F5EBE6" },
      { name: "Accent", hex: "#A1887F" }
    ]
  },
  {
    id: "orange-mono",
    name: "Orange Monochrome",
    description: "Warm orange variations.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#802B00" },
      { name: "Primary", hex: "#FF5500" },
      { name: "Secondary", hex: "#FFF1E6" },
      { name: "Accent", hex: "#FF8C42" }
    ]
  },
  {
    id: "teal-mono",
    name: "Teal Monochrome",
    description: "Calming teal shades.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#004D4D" },
      { name: "Primary", hex: "#008080" },
      { name: "Secondary", hex: "#E6F7F7" },
      { name: "Accent", hex: "#20B2AA" }
    ]
  },
  {
    id: "pink-mono",
    name: "Pink Monochrome",
    description: "Soft pink gradients.",
    category: "Monochrome",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#800037" },
      { name: "Primary", hex: "#FF006F" },
      { name: "Secondary", hex: "#FFE6F0" },
      { name: "Accent", hex: "#FF4D94" }
    ]
  },
    // Bio-Inspired Palettes
  {
    id: "chlorophyll",
    name: "Chlorophyll",
    description: "Plant photosynthesis colors.",
    category: "Bio-Inspired",
    colors: [
      { name: "Background", hex: "#F0F7E6" },
      { name: "Foreground", hex: "#1E3F20" },
      { name: "Primary", hex: "#4CAF50" },
      { name: "Secondary", hex: "#E8F5E9" },
      { name: "Accent", hex: "#81C784" }
    ]
  },
  {
    id: "butterfly-wing",
    name: "Butterfly Wing",
    description: "Iridescent wing pattern colors.",
    category: "Bio-Inspired",
    colors: [
      { name: "Background", hex: "#2A0845" },
      { name: "Foreground", hex: "#FFE5FF" },
      { name: "Primary", hex: "#6B48FF" },
      { name: "Secondary", hex: "#3B0C59" },
      { name: "Accent", hex: "#23F0C7" }
    ]
  },

  // Chemical Elements
  {
    id: "copper-oxide",
    name: "Copper Oxide",
    description: "Metal patina formation.",
    category: "Elements",
    colors: [
      { name: "Background", hex: "#004D40" },
      { name: "Foreground", hex: "#B2DFDB" },
      { name: "Primary", hex: "#00897B" },
      { name: "Secondary", hex: "#004D40" },
      { name: "Accent", hex: "#1DE9B6" }
    ]
  },
  {
    id: "noble-gases",
    name: "Noble Gases",
    description: "Neon light emission colors.",
    category: "Elements",
    colors: [
      { name: "Background", hex: "#000000" },
      { name: "Foreground", hex: "#FF1744" },
      { name: "Primary", hex: "#D500F9" },
      { name: "Secondary", hex: "#0D0D0D" },
      { name: "Accent", hex: "#00E5FF" }
    ]
  },

  // Urban Landscapes
  {
    id: "neon-city",
    name: "Neon City",
    description: "Cyberpunk urban lighting.",
    category: "Urban",
    colors: [
      { name: "Background", hex: "#1A1A2E" },
      { name: "Foreground", hex: "#E94BE8" },
      { name: "Primary", hex: "#00FF9F" },
      { name: "Secondary", hex: "#2E2E4A" },
      { name: "Accent", hex: "#FB5012" }
    ]
  },
  {
    id: "nordic-winter",
    name: "Nordic Winter",
    description: "Scandinavian winter landscape colors.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#F0F5F9" },
      { name: "Foreground", hex: "#2E3440" },
      { name: "Primary", hex: "#81A1C1" },
      { name: "Secondary", hex: "#E5E9F0" },
      { name: "Accent", hex: "#5E81AC" }
    ]
  },
  {
    id: "moroccan-spice",
    name: "Moroccan Spice",
    description: "Vibrant colors of a Marrakech market.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FDF2E9" },
      { name: "Foreground", hex: "#642B1C" },
      { name: "Primary", hex: "#D35400" },
      { name: "Secondary", hex: "#FAE5D3" },
      { name: "Accent", hex: "#F1C40F" }
    ]
  },
  {
    id: "zen-garden",
    name: "Zen Garden",
    description: "Traditional Japanese garden aesthetics.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#F4F1EA" },
      { name: "Foreground", hex: "#2D2A24" },
      { name: "Primary", hex: "#8E7F6D" },
      { name: "Secondary", hex: "#EBE7E0" },
      { name: "Accent", hex: "#687F67" }
    ]
  },
  {
    id: "indian-festival",
    name: "Indian Festival",
    description: "Colors of Holi celebration.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FFF9C4" },
      { name: "Foreground", hex: "#4A148C" },
      { name: "Primary", hex: "#FF4081" },
      { name: "Secondary", hex: "#FFF176" },
      { name: "Accent", hex: "#00BCD4" }
    ]
  },
  {
    id: "mexican-fiesta",
    name: "Mexican Fiesta",
    description: "Vibrant Mexican celebration colors.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#2C1810" },
      { name: "Primary", hex: "#FF1744" },
      { name: "Secondary", hex: "#FFF9C4" },
      { name: "Accent", hex: "#00C853" }
    ]
  },
  {
    id: "persian-nights",
    name: "Persian Nights",
    description: "Rich colors of Persian architecture.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#1A237E" },
      { name: "Foreground", hex: "#FFD700" },
      { name: "Primary", hex: "#7C4DFF" },
      { name: "Secondary", hex: "#283593" },
      { name: "Accent", hex: "#00BFA5" }
    ]
  },
  {
    id: "celtic-mist",
    name: "Celtic Mist",
    description: "Irish countryside palette.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#E8F5E9" },
      { name: "Foreground", hex: "#1B5E20" },
      { name: "Primary", hex: "#43A047" },
      { name: "Secondary", hex: "#C8E6C9" },
      { name: "Accent", hex: "#FFD700" }
    ]
  },
  {
    id: "african-sunset",
    name: "African Sunset",
    description: "Serengeti evening colors.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FFE0B2" },
      { name: "Foreground", hex: "#3E2723" },
      { name: "Primary", hex: "#FF5722" },
      { name: "Secondary", hex: "#FFF3E0" },
      { name: "Accent", hex: "#8D6E63" }
    ]
  },
  {
    id: "greek-islands",
    name: "Greek Islands",
    description: "Aegean Sea and architecture.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#1A237E" },
      { name: "Primary", hex: "#03A9F4" },
      { name: "Secondary", hex: "#F5F5F5" },
      { name: "Accent", hex: "#B3E5FC" }
    ]
  },
  {
    id: "russian-imperial",
    name: "Russian Imperial",
    description: "Opulent Russian palace colors.",
    category: "Cultural",
    colors: [
      { name: "Background", hex: "#FFFFFF" },
      { name: "Foreground", hex: "#1A237E" },
      { name: "Primary", hex: "#D4AF37" },
      { name: "Secondary", hex: "#F5F5F5" },
      { name: "Accent", hex: "#B71C1C" }
    ]
  }
];

export const getCategories = (): string[] => {
  const categories = new Set<string>();
  palettes.forEach(palette => {
    categories.add(palette.category);
  });
  return Array.from(categories).sort();
};

export const getDefaultPalette = (): Palette => {
  return palettes[0]; // Return the first palette as default
};
