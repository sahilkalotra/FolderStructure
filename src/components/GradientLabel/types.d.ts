interface GradientTextProps {
    text: string; 
    fontSize?: number; 
    gradientColors?: string[]; 
    style?: LinearGradientText;
    gradientStart?: GradientPoint; // Optional start for the gradient
    gradientEnd?: GradientPoint;   // Optional end for the gradient
  }