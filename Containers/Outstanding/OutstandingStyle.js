import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    // fontStyle: 'bold',
    marginTop: 45,
    marginLeft: 15,
    color: 'color',
    textAlign: 'center',
  },
  fstyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },

  button14: {
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
  },
  button25: {
    marginLeft: 2,
    marginTop: 10,
    marginRight: 2,
    width: 100,
    height: 45,
    backgroundColor: '#C61B23',

    borderRadius: 3,
  },
  button36: {
    marginLeft: 2,
    marginTop: 10,
    marginRight: 2,
    width: 0,
    height: 0,
    backgroundColor: '#C61B23',

    borderRadius: 3,
    borderLeftWidth: 45,
    //borderRightWidth: ,
    borderBottomWidth: 18,
    borderTopWidth: 25,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: '#C61B23',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  texts: {
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },
  textinner:{
    fontSize: 22,
    fontStyle: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: 'color',
    textAlign: 'center',
    fontSize: 18,
  },
  textinner1:{
    fontSize: 22,
    fontStyle: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default styles;