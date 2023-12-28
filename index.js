/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainIndex from './src/MainIndex';
const App = () => {
    return <MainIndex/>
}

AppRegistry.registerComponent(appName, () => App);
