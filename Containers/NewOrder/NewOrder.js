import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './NewOrderStyles';
import {Picker} from '@react-native-picker/picker';
import NewOrderCard from './NewOrderCard';

class NewOrder extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View style={styles.title}>
          <Image
            source={require('../../Assets/Images/twopic.png')}
            style={styles.image}
          />
          <Text style={styles.titleText}> New Order</Text>
          <Image
            source={require('../../Assets/Images/cartOne.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.secondView}>
          <Text style={styles.leftText}>Product Category</Text>
          <Text style={styles.rightText}>Product</Text>
        </View>

        <View style={styles.thirdView}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#70707078',
              width: "35%",
              textAlign: 'center',
              marginLeft: 30,
            //   marginTop: 20,
              borderRadius: 2,
              height: 45,
              color: '#9A9A9A',
            }}>
            <Picker
              style={{marginTop: -5, color: '#9A9A9A'}}
              selectedValue="All">
              <Picker.Item label="All"></Picker.Item>
              <Picker.Item label="Low speed"></Picker.Item>
              <Picker.Item label="High speed"></Picker.Item>
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search product..."></TextInput>
        </View>

        <NewOrderCard image={require('../../Assets/Images/activa.png')} title="Optima" ndp="₹41,770"/>
        <NewOrderCard image={require('../../Assets/Images/activa2.png')} title="Photon" ndp="₹85,770"/>

        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    );
  }
}

export default NewOrder;
