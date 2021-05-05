import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Containers/Login/Login'
import Menu from '../Containers/Menu/Menu'
import NewOrder from '../Containers/NewOrder/NewOrder';
import OrderList from '../Containers/OrderList/OrderList';

const appNavigator = createStackNavigator({
    Home:Login,
    Menu:Menu,
    NewOrder:NewOrder,
    OrderList:OrderList,
    // Stock:Stock
  })
 
 export default createAppContainer(appNavigator)
 