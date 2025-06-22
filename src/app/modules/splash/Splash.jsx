import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import routeName from '../../routes/routeName';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routeName.rootAnimationRenderer);
    }, 3000);
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 100}}>Splash Screen</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {},
});
