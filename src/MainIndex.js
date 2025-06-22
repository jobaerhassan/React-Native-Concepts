import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouterIndex from './app/routes/rootRoute';
const MainIndex = () => {
  return (
    <NavigationContainer>
      <RouterIndex />
    </NavigationContainer>
  );
};
export default MainIndex;
