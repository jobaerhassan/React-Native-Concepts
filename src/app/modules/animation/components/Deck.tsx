import React from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import {carouselDataItem} from '../types.animation.ts';

interface DeckProps {
  data: carouselDataItem[];
  renderItem: (item: carouselDataItem, index: number) => React.ReactElement; // Fixed return type
}

const Deck = (props: DeckProps) => {
  const animatedValue = React.useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      console.log(gesture);
      animatedValue.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: () => {},
  });
  const renderCards = () => {
    return props.data.map((item: carouselDataItem, index: number) => {
      // Added return
      return <View key={index}>{props.renderItem(item, index)}</View>;
    });
  };

  return (
    <Animated.View
      {...panResponder.panHandlers} style={animatedValue.getLayout()}>
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
