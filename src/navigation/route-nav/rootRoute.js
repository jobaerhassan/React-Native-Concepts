import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routeName from './routeName';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

const RouterIndex = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName={routeName.home}>
      <stack.Screen name={routeName.home}>{() => <Home />}</stack.Screen>
      <stack.Screen name={routeName.profile} component={Profile} />
    </stack.Navigator>
  );
};
export default RouterIndex;
