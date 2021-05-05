import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MenuStyles';
import {useNavigation} from 'react-navigation-hooks';

const MenuCard = ({image,text,Screen}) => {
    const {navigate} = useNavigation();
    
  return (
    <View >
      <TouchableOpacity style={styles.container} onPress={()=>navigate(Screen)} >
        <Image
          style={styles.image}
          source={image}
        />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default MenuCard;