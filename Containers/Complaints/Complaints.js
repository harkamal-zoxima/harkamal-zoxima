import * as React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './ComplaintsStyle'
import ComplaintsCard from './ComplaintsCard'

function Tab1() {
  return (
    <ComplaintsCard />
  );
}

function Tab2() {
  return (
    <ComplaintsCard />
  );
}


const Tab = createMaterialTopTabNavigator();

export default function Complaints() {
  return (
    <>
    <View style={{flexDirection:"row",backgroundColor:"#FFFFFF"}}>
    <Image
            source={require('../../Assets/Images/complaint.png')}
            style={styles.image}
          />

          <Text style={styles.titleText}>Complaints</Text>

    </View>



    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 15,color:'white'},
          tabStyle: {width: 200,height:50},
          style: {backgroundColor: '#C50404',},
        }}>
        <Tab.Screen name="Pending" component={Tab1} />
        <Tab.Screen name="Resolved" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
