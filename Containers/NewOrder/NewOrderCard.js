import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './NewOrderCardStyle';
import {Picker} from '@react-native-picker/picker';
// import NewOrder from './NewOrder';

const NewOrderCard = ({image,title,ndp}) => {
  return (
    <View
      style={{
        backgroundColor: '#F4F4F4E8',
        height: 234,
        width: 326,
        marginLeft: 30,
        marginTop: 30,
        borderColor:"#00000026",
        borderWidth:1
      }}>
      <View style={{flexDirection: 'row',justifyContent:"space-around"}}>
        <Image
          source={image}
          style={{width: 139, height: 142, marginTop: 20, marginLeft: 5}}
        />
        <View style={{flexDirection: 'column',marginTop:20}}>
          <Text style={styles.text}>{title}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.fadedText}>NDP:</Text>
            <Text>{ndp}</Text>
          </View>

          <Text>Color</Text>

          <View
            style={{
              borderWidth: 2,
              borderColor: '#70707078',
              width: 120,
              textAlign: 'center',
              //   marginLeft: 30,
              //   marginTop: 20,
              borderRadius: 2,
              height: 30,
              color: '#9A9A9A',
            }}>
            <Picker
              style={{
                marginLeft: -15,
                marginTop: -13,
                color: '#9A9A9A',
                fontSize: 10,
              }}
              selectedValue="Select color...">
              <Picker.Item label="Select color..."></Picker.Item>
              <Picker.Item label="blue"></Picker.Item>
              <Picker.Item label="yellow"></Picker.Item>
            </Picker>
          </View>

          <Text>Quantity</Text>

          <View
            style={{
              borderWidth: 2,
              borderColor: '#70707078',
              width: 120,
              textAlign: 'center',
              //   marginLeft: 30,
              //   marginTop: 20,
              borderRadius: 2,
              height: 30,
              color: '#9A9A9A',
            }}>
            
            <TextInput
            style={{
              marginLeft: -2,
              marginTop: -7,
              color: '#9A9A9A',
              fontSize: 15,
            }}
            ></TextInput>

          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => this.props.navigation.navigate('Menu')}
        >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewOrderCard;



{/* <Picker
              style={{
                marginLeft: -15,
                marginTop: -13,
                color: '#9A9A9A',
                fontSize: 10,
              }}
              selectedValue="Enter qty...">
              <Picker.Item label="Enter qty..."></Picker.Item>
              <Picker.Item label="blue"></Picker.Item>
              <Picker.Item label="yellow"></Picker.Item>
            </Picker> */}