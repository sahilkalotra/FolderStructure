import React, { useRef, useState, useCallback, useMemo } from "react";
import { View, ImageBackground, Animated, Image, FlatList, Pressable } from "react-native";
import Dots from 'react-native-dots-pagination';
import GradientButton from "../../components/gradientButton";
import GradientLabel from "../../components/GradientLabel";
import { useAppDispatch } from "../../hooks/reduxHook";
import commonStyle from "../../utils/commonStyle";
import { deviceWidth } from "../../utils/helper";
import Label from "../../components/label";
import local from "../../utils/local";
import assets from "../../assets";
import styles from "./styles";
import { setFirstTime } from "../../redux/slice/authSlice";
import colors from "../../utils/colors";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedLabel = Animated.createAnimatedComponent(Label);

const data = [
  {
    image: assets.onBoardingOne,
    heading1: "Your Title Here",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: assets.onBoardingTwo,
    heading1: "Your Title Here",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: assets.onBoardingOne,
    heading1: "Your Title Here",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: assets.onBoardingOne,
    heading1: "Your Title Here",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]


const OnboardingItem = React.memo(({ item, scrollX, index }: OnboardingItemProps) => {
  const inputRange = useMemo(() => [(index - 1) * deviceWidth, index * deviceWidth, (index + 1) * deviceWidth], [index]);

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [deviceWidth * 0.3, 0, -deviceWidth],
  });

  const translateXSubHeading = scrollX.interpolate({
    inputRange,
    outputRange: [deviceWidth * 0.5, 0, -deviceWidth],
  });

  return (
    <ImageBackground source={item.image} style={styles.imageBackground}
      imageStyle={{ resizeMode: "contain" }}>
      <View style={styles.backGroundImageView}>
        <AnimatedLabel text={item.heading1}
          style={[styles.heading, { transform: [{ translateX: translateXHeading }] }]} />
        <AnimatedLabel text={item.subHeading}
          style={[styles.subHeading, { transform: [{ translateX: translateXSubHeading }] }]} />
      </View>
    </ImageBackground>
  );
});

const OnBoardingScreen = () => {
  const dispatch = useAppDispatch();

  const flatListRef = useRef<FlatList<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPress = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex != data?.length - 1) {
        const nextIndex = Math.min(prevIndex + 1, data.length - 1);
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      }
      dispatch(setFirstTime(false))
      return prevIndex
    });
  }, []);

  const handleMomentumScrollEnd = (event: any) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / deviceWidth);
    setCurrentIndex(newIndex);
  };

  const onScroll = (event: any) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event)
  }
  return (
    <View style={styles.container}>
      <Image source={assets.irlLogo} style={styles.logo} />
      <AnimatedFlatList ref={flatListRef} data={data} style={styles.flatList1}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <OnboardingItem item={item} scrollX={scrollX} index={index} />
        )}
        horizontal pagingEnabled showsHorizontalScrollIndicator={false}
        onScroll={onScroll} scrollEventThrottle={16}
        decelerationRate="normal" onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      <View style={[styles.container1]}>
        <Dots length={data?.length} active={currentIndex} activeDotWidth={40} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <GradientLabel text={local.SKIP} fontSize={15} />
        </Pressable>
        <GradientButton onPress={handleNextPress} style={styles.gradientButtonStyle}>
          <View style={[commonStyle.container, commonStyle.flexRow, styles.gradientbtnView]}>
            <Label text={local.NEXT} style={{color:colors.black}}/>
            <Image source={assets.arrowNext} style={styles.nextIcon} />
          </View>
        </GradientButton>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
