import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

import Buttons from './Buttons';
import Header from './Header';
import styles from './styles';
import { GetDurationFormat, deviceHeight, deviceWidth } from '../../utils/helper';


const ReelCard: React.FC<ReelCardProps> = ({
  uri,
  _id,
  ViewableItem,
  liked = false,
  disliked = false,
  index,

  // Container Props
  backgroundColor = 'black',

  // Header Props
  headerTitle = 'Reels',
  headerIconName,
  headerIconColor,
  headerIconSize,
  headerIcon,
  headerComponent,
  onHeaderIconPress = () => {},

  // Options Props
  optionsComponent,
  pauseOnOptionsShow = true,
  onSharePress = () => {},
  onCommentPress = () => {},
  onLikePress = () => {},
  onDislikePress = () => {},

  // Player Props
  onFinishPlaying = () => {},

  // Slider Props
  minimumTrackTintColor = 'white',
  maximumTrackTintColor = 'grey',
  thumbTintColor = 'white',

  // Time Props
  timeElapsedColor = 'white',
  totalTimeColor = 'white',
}) => {
  const VideoPlayer = useRef<any>(null);

  // States
  const [VideoDimensions, SetVideoDimensions] = useState({
    width: deviceWidth,
    height: deviceWidth,
  });
  const [Progress, SetProgress] = useState(0);
  const [Duration, SetDuration] = useState(0);
  const [Paused, SetPaused] = useState(false);
  const [ShowOptions, SetShowOptions] = useState(false);

  // Effect: Play/Pause video when viewable
  useEffect(() => {
    SetPaused(ViewableItem !== _id);
  }, [ViewableItem, _id]);

  // Effect: Pause video when options are toggled
  useEffect(() => {
    if (pauseOnOptionsShow) {
      SetPaused(ShowOptions);
    }
  }, [ShowOptions, pauseOnOptionsShow]);

  // Callback: Seek Update for Slider
  const SeekUpdate = useCallback(
    (seekTime: number) => {
      try {
        if (VideoPlayer.current) {
          VideoPlayer.current.seek((seekTime * Duration) / 100 / 1000);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [Duration],
  );

  // Callback: Playback Status Update
  const PlayBackStatusUpdate = (playbackStatus: any) => {
    try {
      const currentTime = Math.round(playbackStatus.currentTime);
      const duration = Math.round(playbackStatus.seekableDuration);
      if (currentTime && duration) {
        SetProgress((currentTime / duration) * 100);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Callback: On Video Load Complete
  const onLoadComplete = (event: any) => {
    const { naturalSize, duration } = event;
    const { width: naturalWidth, height: naturalHeight } = naturalSize;
    const aspectRatio = naturalWidth / naturalHeight;

    try {
      if (naturalWidth > naturalHeight) {
        SetVideoDimensions({
          width: deviceWidth,
          height: deviceWidth / aspectRatio,
        });
      } else {
        SetVideoDimensions({
          width: deviceHeight * aspectRatio,
          height: deviceHeight,
        });
      }
      SetDuration(duration * 1000);
    } catch (error) {
      console.error(error);
    }
  };

  // Callback: Toggle Show Options on Middle Press
  const onMiddlePress = () => {
    SetShowOptions(!ShowOptions);
  };

  // Seek 10 seconds back
  const onFirstHalfPress = () => {
    if (VideoPlayer.current) {
      const toSeek = Math.floor((Progress * Duration) / 100) / 1000;
      if (toSeek > 10) VideoPlayer.current.seek(toSeek - 10);
    }
  };

  // Seek 10 seconds forward
  const onSecondHalfPress = () => {
    if (VideoPlayer.current) {
      const toSeek = Math.floor((Progress * Duration) / 100) / 1000;
      VideoPlayer.current.seek(toSeek + 10);
    }
  };

  // Callback: Video Error Handling
  const videoError = (error: any) => {
    console.error('Video Error:', error);
  };

  // Memoized Slider
  const GetSlider = useMemo(
    () => (
      <View style={styles.SliderContainer}>
        <Text style={[styles.TimeOne, { color: timeElapsedColor }]}>
          {GetDurationFormat(Math.floor((Progress * Duration) / 100))}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          thumbTintColor={thumbTintColor}
          value={Progress}
          onSlidingComplete={SeekUpdate}
        />
        <Text style={[styles.TimeTwo, { color: totalTimeColor }]}>
          {GetDurationFormat(Duration || 0)}
        </Text>
      </View>
    ),
    [Progress, Duration, SeekUpdate, timeElapsedColor, totalTimeColor, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor],
  );

  // Memoized Header
  const GetHeader = useMemo(
    () => (
      <View style={styles.HeaderContainer}>
        <Header
          onPress={onHeaderIconPress}
          text={headerTitle}
          customComponent={headerComponent}
          customIcon={headerIcon}
          color={headerIconColor}
          name={headerIconName}
          size={headerIconSize}
        />
      </View>
    ),
    [headerTitle, headerComponent, headerIcon, headerIconColor, headerIconName, headerIconSize, onHeaderIconPress],
  );

  // Memoized Buttons (Options)
  const GetButtons = useMemo(
    () => (
      <View style={styles.OptionsContainer}>
        {optionsComponent ? null : (
          <>
            <Buttons
              name={liked ? 'like1' : 'like2'}
              text="Like"
              color={liked ? 'dodgerblue' : 'white'}
              onPress={() => onLikePress(_id)}
            />
            <Buttons
              name={disliked ? 'dislike1' : 'dislike2'}
              text="Dislike"
              color={disliked ? 'dodgerblue' : 'white'}
              onPress={() => onDislikePress(_id)}
            />
            <Buttons
              name="message1"
              text="Comment"
              onPress={() => onCommentPress(_id)}
            />
            <Buttons
              name="sharealt"
              text="Share"
              onPress={() => onSharePress(_id)}
            />
          </>
        )}
      </View>
    ),
    [ShowOptions, liked, disliked, optionsComponent],
  );

  return (
    <Pressable style={[styles.container, { backgroundColor }]} onPress={onMiddlePress}>
      <Pressable style={styles.FirstHalf} onPress={onFirstHalfPress} />
      <Pressable style={styles.SecondHalf} onPress={onSecondHalfPress} />
      <Video
        ref={VideoPlayer}
        source={{ uri }} fullscreenAutorotate
        style={VideoDimensions}
        resizeMode="contain"
        onError={videoError}
        progressUpdateInterval={1000}
        paused={Paused}
        muted={false}
        repeat={true}
        onLoad={onLoadComplete}
        onProgress={PlayBackStatusUpdate}
        onEnd={() => onFinishPlaying(index)}
      />
      {GetHeader}
      {GetButtons}
      {GetSlider}
    </Pressable>
  );
};

export default ReelCard;
