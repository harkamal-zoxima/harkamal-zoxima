import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// import styles from './OutstandingStyle';

const Outstanding = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 45,
            marginLeft: 15,
            // color: 'color',
            textAlign: 'center',
          }}>
          Outstanding
        </Text>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity
          style={{
            marginLeft: 5,
            marginTop: 10,
            marginRight: 5,
            width: 0,
            height: 0,
            backgroundColor: '#C61B23',
            borderRadius: 3,
            // borderLeftWidth: ,
            borderRightWidth: 45,
            borderBottomWidth: 18,
            borderTopWidth: 25,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: '#C61B23',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}></TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 2,
            marginTop: 10,
            marginRight: 2,
            width: 80,
            height: 45,
            backgroundColor: '#C61B23',

            borderRadius: 3,
          }}>
          <Text style={{textAlign: 'center', color: 'white', marginTop: 10}}>
            JANUARY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 2,
            marginTop: 10,
            marginRight: 2,
            width: 0,
            height: 0,
            backgroundColor: '#C61B23',

            borderRadius: 3,
            borderLeftWidth: 45,
            borderBottomWidth: 18,
            borderTopWidth: 25,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: '#C61B23',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}></TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 2,
            marginTop: 10,
            marginRight: 2,
            width: 0,
            height: 0,
            backgroundColor: '#C61B23',
            borderRadius: 3,
            borderRightWidth: 45,
            borderBottomWidth: 18,
            borderTopWidth: 25,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: '#C61B23',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}></TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 2,
            marginTop: 10,
            marginRight: 2,
            width: 90,
            height: 45,
            backgroundColor: '#C61B23',
            borderRadius: 3,
          }}>
          <Text style={{textAlign: 'center', color: 'white', marginTop: 10}}>
            2021
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 10,
            marginTop: 10,
            marginRight: 5,
            width: 90,
            height: 45,
            backgroundColor: '#C61B23',

            borderRadius: 3,
            borderLeftWidth: 45,
            borderBottomWidth: 18,
            borderTopWidth: 25,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: '#C61B23',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}></TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 100,
          marginLeft: 15,
          marginRight: 10,
          textAlign: 'center',
          widht: 25,
          height: 70,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 22,
              fontStyle: 'bold',
              marginTop: 10,
              marginLeft: 10,
              color: 'color',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Outstanding on dealer
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontStyle: 'bold',
              marginTop: 10,
              marginLeft: 75,
              color: 'red',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Rs2,00,000
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 25,
          marginLeft: 15,
          marginRight: 10,
          textAlign: 'center',
          widht: 25,
          height: 70,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 22,
              fontStyle: 'bold',
              marginTop: 10,
              marginLeft: 10,
              color: 'color',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Outstanding on Hero Electric
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontStyle: 'bold',
              marginTop: 10,
              marginLeft: 15,
              color: 'red',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Rs1,00,000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Outstanding;
