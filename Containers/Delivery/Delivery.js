import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './DeliveryStyle';

const Delivery = () => {
  return (
      <View style={{backgroundColor:"#FFFFFF"}}>
          <View style={{flexDirection:"row",backgroundColor:"#FFFFFF"}}>
    <Image
            source={require('../../Assets/Images/delivery.png')}
            style={styles.image}
          />

          <Text style={styles.titleText}>Delivery Tracking</Text>

    </View>
    <View
      style={{
        width: 355,
        height: 190,
        backgroundColor: '#FFFFFF',
        borderColor: '#7070704F',
        borderWidth: 1,
        margin: 20,
        marginTop: 20,
      }}>
      <View style={styles.outerView}>
        <View style={styles.leftView}>
          <Text style={styles.leftTitle}>25</Text>
          <Text style={styles.leftText}>FEB</Text>
          <Text style={styles.leftText2}>Complaint Date</Text>
        </View>

        <View style={styles.rightView}>
          <Text style={styles.orderText}>Complaint No.</Text>
          {/* <Text style={styles.orderAnswer}>OR-135622</Text> */}

          <Text style={styles.orderText}>Category</Text>
          {/* <Text style={styles.orderAnswer}>ASM</Text> */}

          <Text style={styles.orderText}>Sub Category</Text>
          {/* <Text style={styles.orderAnswer}>20</Text> */}

          <Text style={styles.orderText}>Order No.</Text>
          {/* <Text style={styles.orderAnswer}>₹12,00,000</Text> */}

          <Text style={styles.orderText}>Invoice No.</Text>
          {/* <Text style={styles.orderAnswer}>With footmats</Text> */}

          <Text style={styles.orderText}>Description</Text>
          {/* <Text style={styles.orderAnswer}>15/04/2021</Text> */}
        </View>

        <View style={styles.rightView1}>
          <Text style={styles.orderText1}>TI-10001</Text>
          <Text style={styles.orderText1}>Product issue</Text>
          <Text style={styles.orderText1}>Damage in transit</Text>
          <Text style={styles.orderText1}>OR-16811</Text>
          <Text style={styles.orderText1}>INV-16811</Text>
          <Text style={styles.orderText1}>Foot mat Damaged</Text>
        </View>
      </View>
      
    </View>
    </View>
  );
};

export default Delivery;
