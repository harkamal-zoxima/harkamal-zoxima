import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MenuStyles';

const Menu = ({image,text}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source={image}
        />

        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;