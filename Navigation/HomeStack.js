import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Containers/Login/Login'
import Menu from '../Containers/Menu/Menu'
import NewOrder from '../Containers/NewOrder/NewOrder';

const appNavigator = createStackNavigator({
    Home:Login,
    Menu:Menu,
    NewOrder:NewOrder
  })
 
 export default createAppContainer(appNavigator)
 