import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    outerView:{
        flexDirection:"row",
        // justifyContent:"space-evenly"
    },
    leftView:{
        marginLeft:30,
        
    },
    leftTitle:{
        color:"#C50404",
        fontSize:73,
        textAlign:"center",
        marginTop:13
    },
    leftText:{
        color:"#C50404",
        fontSize:18,
        textAlign:"center",
        marginTop:-15
    },
    leftText2:{
        color:"#515C6F",
        fontSize:14,
        textAlign:"center",
        marginTop:0
    },
    rightView:{
        flexDirection:"column",
        marginLeft:20,
        marginTop:30,
        width:100
    },
    rightView1:{
        flexDirection:"column",
        marginLeft:0,
        marginTop:31,
        width:100
    },
    orderText:{
        color:"#9A9A9A",
        fontSize:13
    },
    orderText1:{
        color:"#000000",
        fontSize:13
    },
    button: {
        width: 110,
        height: 25,
        backgroundColor: '#C61B23',
        marginTop: 10,
        marginLeft: 55,
        borderRadius: 3,
        textAlign: 'center'
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        marginTop: -1,
        fontSize: 18
      },
      button1: {
        width: 110,
        height: 25,
        // backgroundColor: '#C61B23',
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 3,
        textAlign: 'center',
        borderColor:"#EF1C24",
        borderWidth:1
      },
      buttonText1: {
        textAlign: 'center',
        color: '#515C6F',
        marginTop: -1,
        fontSize: 18
      },
      image:{
        width: 58,
        height: 52,
        margin: 20,
        marginLeft: 60,
        // marginTop: 45,
},
titleText: {
    fontSize: 25,
    margin: 20,
    textAlign: 'center',
    marginTop: 25,
    marginLeft:0
  },
 })

export default styles