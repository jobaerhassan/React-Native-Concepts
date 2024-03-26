import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import React from 'react';
import Splash from '../modules/splash/Splash';
import UploadCSV from '../modules/uploadCSV/UploadCSV';
import MapCSV from '../modules/uploadCSV/MapCSVData.module';
const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.csv}>
      <stack.Screen name={routeName.splash} component={Splash} />
      <stack.Screen name={routeName.csv} component={UploadCSV} />
      <stack.Screen name={routeName.mapCsv} component={MapCSV} />
    </stack.Navigator>
  );
};
export default RouterIndex;
