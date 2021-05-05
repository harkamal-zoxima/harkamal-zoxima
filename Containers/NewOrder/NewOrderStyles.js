import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 20,
    marginLeft: 40,
    // marginTop: 45,
  },
  title: {
    // flex:1,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 25,
    margin: 20,
    textAlign: 'center',
    marginTop: 25,
  },
  input: {
    borderWidth: 2,
    borderColor: '#70707078',
    width: '40%',
    // textAlign: 'center',
    borderRadius: 2,
    height: 45,
    color: '#9A9A9A',
    marginLeft:30,
    paddingLeft:10
  },
  secondView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  thirdView: {
    flexDirection: 'row',
  },
  leftText: {
    marginLeft: 38,
    fontSize: 15,
    marginTop: 20,
  },
  rightText: {
    marginLeft:62,
    fontSize: 15,
    marginTop: 20,
  },
});

export default styles;
