
interface ReelCardProps {
    uri: string;
    _id: string;
    ViewableItem: string;
    liked?: boolean;
    disliked?: boolean;
    index: number;
  
    backgroundColor?: string;
    headerTitle?: string;
    headerIconName?: string;
    headerIconColor?: string;
    headerIconSize?: number;
    headerIcon?: JSX.Element;
    headerComponent?: JSX.Element;
    onHeaderIconPress?: () => void;
  
    optionsComponent?: JSX.Element;
    pauseOnOptionsShow?: boolean;
    onSharePress?: (_id:string) => void;
    onCommentPress?: (_id:string) => void;
    onLikePress?: (_id:string) => void;
    onDislikePress?: (_id:string) => void;
  
    onFinishPlaying?: (index: number) => void;
  
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    timeElapsedColor?: string;
    totalTimeColor?: string;
  }


// Type definitions for the props
interface Reel {
    _id: number | string;
    uri:string;
  }

interface ReelsProps {
    videos: Reel[];
    backgroundColor?: string;
    headerTitle?: string;
    headerIconName?: string;
    headerIconColor?: string;
    headerIconSize?: number;
    headerIcon?: JSX.Element;
    headerComponent?: JSX.Element;
    onHeaderIconPress?: () => void;
    optionsComponent?: JSX.Element;
    pauseOnOptionsShow?: boolean;
    onSharePress?: () => void;
    onCommentPress?: () => void;
    onLikePress?: () => void;
    onDislikePress?: () => void;
    onFinishPlaying?: (index: number) => void;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    timeElapsedColor?: string;
    totalTimeColor?: string;
  }

  interface ButtonsProps {
    customComponent?: JSX.Element;
    name?: string;
    text?: string;
    color?: string;
    size?: number;
    onPress?: () => void;
  }

  // Define the type for props to ensure type safety
interface HeaderProps {
    customComponent?: JSX.Element;
    customIcon?: JSX.Element;
    name?: string;
    text?: string;
    color?: string;
    size?: number;
    onPress?: () => void;
  }