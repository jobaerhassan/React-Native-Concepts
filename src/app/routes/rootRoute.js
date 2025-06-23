import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import React from 'react';
import Splash from '../modules/splash/Splash';
import RootAnimationRenderer from '../modules/animation/root-animation-renderer';
import BallAnimationRenderer from '../modules/animation/animation-renderer/BallAnimationRenderer';
import CarouselAnimationRenderer from '../modules/animation/animation-renderer/CarouselAnimationRenderer';
const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.splash}>
      {/* <stack.Screen name={routeName.home}>{() => <Home />}</stack.Screen> */}
      <stack.Screen name={routeName.splash} component={Splash} />
      <stack.Screen
        name={routeName.rootAnimationRenderer}
        component={RootAnimationRenderer}
      />
      <stack.Screen
        name={routeName.ballAnimationRenderer}
        component={BallAnimationRenderer}
      />
      <stack.Screen
        name={routeName.carouselAnimationRenderer}
        component={CarouselAnimationRenderer}
      />
    </stack.Navigator>
  );
};
export default RouterIndex;
