import React from 'react';
import {View,ScrollView, Text} from 'react-native';
import styles from './MenuStyles';
import MenuCard from './MenuCard'

const Menu = ({navigation}) => {
  return (
  <View>
    <ScrollView>
        <View style={styles.title}>
            <Text style={styles.textstyle}>CHENNAI ECO MOTORS</Text>
        </View>

    <View style={styles.innerdiv}>
      <MenuCard image={require('../../Assets/Images/cart.png')} text='Your Order' Screen="NewOrder"/>
      <MenuCard image={require('../../Assets/Images/twopic.png')} text='Order List'/>
    </View>

      <View style={styles.outerdiv}>
      <MenuCard image={require('../../Assets/Images/threepic.png')} text='Delivery Tracking'/>
      <MenuCard image={require('../../Assets/Images/fourpic.png')} text='Stock Status'/>
    </View>

    <View style={styles.outerdiv}>
      <MenuCard image={require('../../Assets/Images/fivepic.png')} text='Outstanding'/>
      <MenuCard image={require('../../Assets/Images/sixpic.png')} text='Complaints'/>
    </View>

    </ScrollView>
    </View>
  );
};

export default Menu;
