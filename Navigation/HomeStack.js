import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Containers/Login/Login'
import Menu from '../Containers/Menu/Menu'
import NewOrder from '../Containers/NewOrder/NewOrder';
import OrderList from '../Containers/OrderList/OrderList';
import Complaints from '../Containers/Complaints/Complaints'
import Delivery from '../Containers/Delivery/Delivery'
import Outstanding from '../Containers/Outstanding/Outstanding'
import Stock from '../Containers/Stock/Stock'

const appNavigator = createStackNavigator({
    Home:Login,
    Menu:Menu,
    NewOrder:NewOrder,
    OrderList:OrderList,
    Complaints:Complaints,
    Delivery:Delivery,
    Outstanding:Outstanding,
    Stock:Stock
  })
 
 export default createAppContainer(appNavigator)
 