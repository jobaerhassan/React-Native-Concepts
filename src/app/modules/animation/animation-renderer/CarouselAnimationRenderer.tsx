import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Deck from '../components/Deck.tsx';
import {CAROUSEL_DATA} from '../utils/constants.ts';
import {carouselDataItem} from '../types.animation.ts';

const CarouselAnimationRenderer = () => {
  const RenderItem = (item: carouselDataItem) => {
    return (
      <View>
        <Image source={{uri: item.uri}} style={{height: 200, width: 200}} />
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Deck data={CAROUSEL_DATA} renderItem={RenderItem} />
    </View>
  );
};

export default CarouselAnimationRenderer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
