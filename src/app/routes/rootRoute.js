import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import React from 'react';
import Splash from '../modules/splash/Splash';
import BallAnimationRenderer from '../modules/animation/BallAnimationRenderer';
const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.splash}>
      {/* <stack.Screen name={routeName.home}>{() => <Home />}</stack.Screen> */}
      <stack.Screen name={routeName.splash} component={Splash} />
      <stack.Screen
        name={routeName.ballAnimationRenderer}
        component={BallAnimationRenderer}
      />
    </stack.Navigator>
  );
};
export default RouterIndex;
