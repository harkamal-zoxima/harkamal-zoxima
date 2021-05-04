import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MenuStyles';

const MenuCard = (props) => {
  return (
    <View >
      <TouchableOpacity style={styles.container} onPress={()=>props.navigation?.navigate(props.Screen)}>
        <Image
          style={styles.image}
          source={props.image}
        />
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default MenuCard;