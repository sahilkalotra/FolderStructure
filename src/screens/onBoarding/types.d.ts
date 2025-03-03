interface OnboardingItemProps {
    item: any;
    scrollX: Animated.Value;
    index: number;
  }
  
  interface ActionButtonProps {
    title: string;
    onPress: () => void;
    showIcon?: boolean;
    showText?: boolean;
    getStarted?: boolean;
  }