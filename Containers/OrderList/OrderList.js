import * as React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './OrderListStyle'
import OrderListCard from './OrderListCard'

function Tab1() {
  return (
    <OrderListCard />
  );
}
function Tab2() {
  return (
    <OrderListCard />
  );
}
function Tab3() {
  return (
    <OrderListCard />
  );
}
function Tab4() {
  return (
    <OrderListCard />
  );
}
function Tab5() {
  return (
    <OrderListCard />
  );
}
function Tab6() {
  return (
    <OrderListCard />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function OrderList() {
  return (
    <>
    <View style={{flexDirection:"row",backgroundColor:"#FFFFFF"}}>
    <Image
            source={require('../../Assets/Images/twopic.png')}
            style={styles.image}
          />

          <Text style={styles.titleText}>Orders</Text>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEW ORDER</Text>
          </TouchableOpacity>
    </View>



    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 11,color:'white'},
          tabStyle: {width: 150,height:50},
          style: {backgroundColor: '#C50404',},
        }}>
        <Tab.Screen name="Pending for approval" component={Tab1} />
        <Tab.Screen name="Order placed" component={Tab2} />
        <Tab.Screen name="Order Accepted" component={Tab3} />
        <Tab.Screen name="Order Verified(DMC)" component={Tab4} />
        <Tab.Screen name="Confirmed with 25% Payment" component={Tab5} />
        <Tab.Screen name="Confirmed with 100% Payment" component={Tab6} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
