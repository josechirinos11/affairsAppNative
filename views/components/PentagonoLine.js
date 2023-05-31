import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const PentagonLine = () => {
  const pointColor = 'rgb(222, 111, 47)';
  const pointSize = 20;
  const containerSize = width / 3;
  const pointDistance = containerSize * Math.sqrt(2);
  const duration = 150;
  const pointAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animatePoint = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pointAnimation, {
            toValue: 1,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 2,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 3,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 4,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 5,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 6,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(pointAnimation, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animatePoint();
  }, [pointAnimation]);

  const pentagonStyle = {
    width: pointDistance,
    height: pointDistance,
    transform: [{rotate: '0deg'}],
    position: 'relative',
  };

  const pointStyle = {
    position: 'absolute',
    width: pointSize,
    height: pointSize,
    borderRadius: pointSize / 2,
    backgroundColor: pointColor,
  };

  const animatedPointStyle = {
    transform: [
      {
        translateX: pointAnimation.interpolate({
          inputRange: [0, 1, 2, 3, 4, 5, 6],
          outputRange: [
            0,
            containerSize / 2,
            containerSize,
            containerSize / 2,
            0,
            -containerSize / 2,
            0,
          ],
        }),
      },
      {
        translateY: pointAnimation.interpolate({
          inputRange: [0, 1, 2, 3, 4, 5, 6],
          outputRange: [
            0,
            0,
            -containerSize / 2,
            -containerSize,
            -containerSize,
            -containerSize / 2,
            0,
          ],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.emptyContainer} />
        <View style={styles.emptyContainer} />
        <View style={styles.emptyContainer} />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.emptyContainer} />
        <View style={pentagonStyle}>
          <Animated.View style={[pointStyle, animatedPointStyle]} />
        </View>
        <View style={styles.emptyContainer} />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.emptyContainer} />
        <View style={styles.emptyContainer} />
        <View style={styles.emptyContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emptyContainer: {
    width: width / 3,
    height: width / 3,
  },
});

export default PentagonLine;
