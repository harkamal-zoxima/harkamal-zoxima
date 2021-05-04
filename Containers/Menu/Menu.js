import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './MenuStyles';
import MenuCard from './MenuCard'

const Menu = () => {
  return (
    <View style={styles.outerdiv}>
        <ScrollView>
      <MenuCard image={require('../../Assets/Images/cart.png')} text='Your Order'/>
      <MenuCard image={require('../../Assets/Images/twopic.png')} text='Order List'/>
      <MenuCard image={require('../../Assets/Images/threepic.png')} text='Delivery Tracking'/>
      <MenuCard image={require('../../Assets/Images/fourpic.png')} text='Stock Status'/>
      <MenuCard image={require('../../Assets/Images/fivepic.png')} text='Outstanding'/>
      <MenuCard image={require('../../Assets/Images/sixpic.png')} text='Complaints'/>
      </ScrollView>
    </View>
  );
};

export default Menu;
