import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home.js';
import Login from '../screens/login.js';

const screens = {
  Home: {
    screen: Home
  }, 
  Loign: {
    screen: Login
  }
}


const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);