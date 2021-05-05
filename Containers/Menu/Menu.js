import React from 'react';
import {View,ScrollView, Text} from 'react-native';
import styles from './MenuStyles';
import MenuCard from './MenuCard'

const Menu = () => {
  return (
  <View>
    <ScrollView>
        <View style={styles.title}>
            <Text style={styles.textstyle}>CHENNAI ECO MOTORS</Text>
        </View>

    <View style={styles.innerdiv}>
      <MenuCard image={require('../../Assets/Images/cart.png')} text='Your Order' Screen="NewOrder"/>
      <MenuCard image={require('../../Assets/Images/twopic.png')} text='Order List' Screen="OrderList"/>
    </View>

      <View style={styles.outerdiv}>
      <MenuCard image={require('../../Assets/Images/threepic.png')} text='Delivery Tracking' Screen="NewOrder"/>
      <MenuCard image={require('../../Assets/Images/fourpic.png')} text='Stock Status' Screen="Stock"/>
    </View>

    <View style={styles.outerdiv}>
      <MenuCard image={require('../../Assets/Images/fivepic.png')} text='Outstanding' Screen="NewOrder"/>
      <MenuCard image={require('../../Assets/Images/sixpic.png')} text='Complaints' Screen="NewOrder"/>
    </View>

    </ScrollView>
    </View>
  );
};

export default Menu;
