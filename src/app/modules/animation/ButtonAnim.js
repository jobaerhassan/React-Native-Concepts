import {useEffect, useState} from 'react';
import {Button, LayoutAnimation, StyleSheet, View} from 'react-native';
import React from 'react';
const ButtonAnim = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isLoading]);
  return (
    <View>
      <View style={styles.container}>
        <Button title={isLoading ? '' : 'Submit'} onPress={() => {}} />
      </View>
      <Button
        title={'Press'}
        onPress={() => {
          setLoading(!isLoading);
        }}
      />
    </View>
  );
};
export default ButtonAnim;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

//https://medium.com/wix-engineering/react-native-animations-zero-to-hero-17ebf7e8be81
