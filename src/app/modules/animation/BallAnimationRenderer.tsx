import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import Ball from './simple-animation/Ball.tsx';

const BallAnimationRenderer = () => {
  // Use useRef to persist the animated value across renders
  const animatedVal = useRef(new Animated.ValueXY({x: 0, y: 0})).current; // can do it without useRef

  useEffect(() => {
    Animated.spring(animatedVal, {
      toValue: {x: 300, y: 300},
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={animatedVal.getLayout()}>
      <Ball />
    </Animated.View>
  );
};

export default BallAnimationRenderer;
