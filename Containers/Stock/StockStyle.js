import {Dimensions, StyleSheet} from 'react-native';
import { Row } from 'react-native-table-component';

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white'
    },
    innerContainer1: { 
        display: "flex", 
        flexDirection: "row" 
    },
    innerContainer2: { 
        marginTop:20,
        padding: 2, 
        paddingTop: 2, 
        backgroundColor: '#fff', 
        borderWidth: 3,
        marginLeft:10,
        marginRight:10,
        borderColor: "#C61B23"
     },
    head: { 
        height: 60, 
        backgroundColor: '#C61B23', 
        color: 'white',
     },
    text: { 
        margin: 8,
        color: 'white'
     },
     text1: { 
        margin: 8,
     },
     text2: { 
        margin: 8,
        color: 'white'
     },
     bottom: {
        backgroundColor: '#C61B23', 
        color: 'white'
     },
     tableStyle: {
         borderColor: '#c8e1ff',
     },
     image: { 
         width: 80, 
         height: 80, 
         marginTop: 20, 
         marginLeft: 60 
     },
     imageText: { 
         fontSize: 35, 
         fontWeight: "bold", 
         marginTop: 40, 
         marginLeft: 20 
     },
  });
  
  export default styles;