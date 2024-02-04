import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouterIndex from './navigation/route-nav/rootRoute';
const MainIndex = () => {
  return (
    <NavigationContainer>
      <RouterIndex />
    </NavigationContainer>
  );
};
export default MainIndex;
