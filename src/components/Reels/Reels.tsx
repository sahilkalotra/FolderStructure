import React, { useRef, useState } from 'react';
import {  FlatList } from 'react-native';
import ReelCard from './ReelCard';
import { deviceHeight } from '../../utils/helper';

// Main Reels component
const Reels: React.FC<ReelsProps> = ({
  videos,
  backgroundColor = 'black',
  headerTitle,
  headerIconName,
  headerIconColor,
  headerIconSize,
  headerIcon,
  headerComponent,
  onHeaderIconPress,
  optionsComponent,
  pauseOnOptionsShow,
  onSharePress,
  onCommentPress,
  onLikePress,
  onDislikePress,
  onFinishPlaying,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  timeElapsedColor,
  totalTimeColor,
}) => {
  // Reference to FlatList and current viewable item state
  const FlatlistRef = useRef<FlatList<Reel>>(null);
  const [viewableItem, setViewableItem] = useState<string>('');
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 70 });

  // Shared properties for passing down to ReelCard
  const sharedProps = {
    backgroundColor,
    headerTitle,
    headerIconName,
    headerIconColor,
    headerIconSize,
    headerIcon,
    headerComponent,
    onHeaderIconPress,
    optionsComponent,
    pauseOnOptionsShow,
    onSharePress,
    onCommentPress,
    onLikePress,
    onDislikePress,
    onFinishPlaying,
    minimumTrackTintColor,
    maximumTrackTintColor,
    thumbTintColor,
    timeElapsedColor,
    totalTimeColor,
  };

  // Viewable items callback for tracking the currently visible item
  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems?.viewableItems?.length > 0) {
      setViewableItem(viewableItems.viewableItems[0].item._id || 0);
    }
  });

  // FlatList rendering
  return (
    <FlatList
      ref={FlatlistRef}
      data={videos}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item, index }) => (
        //@ts-ignore
        <ReelCard
          {...item}
          index={index}
          ViewableItem={viewableItem}
          //@ts-ignore
          onFinishPlaying={(index) => {
            if (index !== videos.length - 1) {
              FlatlistRef.current?.scrollToIndex({
                index: index + 1,
              });
            }
          }}
          {...sharedProps} // Pass down the shared props
        />
      )}
      getItemLayout={(_data, index) => ({
        length: deviceHeight-300,
        offset: deviceHeight * index,
        index,
      })}
      pagingEnabled 
      decelerationRate={0.9} 
      onViewableItemsChanged={onViewRef.current} 
      viewabilityConfig={viewConfigRef.current} 
    />
  );
};

export default Reels;
