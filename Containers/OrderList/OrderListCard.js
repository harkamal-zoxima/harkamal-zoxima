import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './OrderListCardStyle';

const OrderListCard = () => {
  return (
    <View
      style={{
        width: 355,
        height: 223,
        backgroundColor: '#FFFFFF',
        borderColor: '#7070704F',
        borderWidth: 1,
        margin: 20,
        marginTop: 40,
      }}>
      <View style={styles.outerView}>
        <View style={styles.leftView}>
          <Text style={styles.leftTitle}>5</Text>
          <Text style={styles.leftText}>JAN</Text>
          <Text style={styles.leftText2}>Order Date</Text>
        </View>

        <View style={styles.rightView}>
          <Text style={styles.orderText}>Order No.</Text>
          {/* <Text style={styles.orderAnswer}>OR-135622</Text> */}

          <Text style={styles.orderText}>Order created by</Text>
          {/* <Text style={styles.orderAnswer}>ASM</Text> */}

          <Text style={styles.orderText}>Total Quantity</Text>
          {/* <Text style={styles.orderAnswer}>20</Text> */}

          <Text style={styles.orderText}>Total Amt. Payable</Text>
          {/* <Text style={styles.orderAnswer}>₹12,00,000</Text> */}

          <Text style={styles.orderText}>Remarks</Text>
          {/* <Text style={styles.orderAnswer}>With footmats</Text> */}

          <Text style={styles.orderText}>Requested Date of Delivery</Text>
          {/* <Text style={styles.orderAnswer}>15/04/2021</Text> */}
        </View>

        <View style={styles.rightView1}>
          <Text style={styles.orderText1}>OR-135622</Text>
          <Text style={styles.orderText1}>ASM</Text>
          <Text style={styles.orderText1}>20</Text>
          <Text style={styles.orderText1}>₹12,00,000</Text>
          <Text style={styles.orderText1}>With footmats</Text>
          <Text style={styles.orderText1}>15/04/2021</Text>
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText1}>Reject</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderListCard;
