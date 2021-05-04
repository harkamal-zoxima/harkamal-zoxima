import {Dimensions, StyleSheet} from 'react-native';

var Width = Dimensions.get("window").width;

const styles = StyleSheet.create({

    outerdiv:{
        // flex:1,
        // display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    image:{
         width: 90, 
         height: 105,
         marginTop:40,
         marginLeft:23
         
    },
    container:{
        width:width/2-10,
        height:250,
        backgroundColor:"#FFFFFF",
        borderWidth:1,
        borderColor:"#00000029",
        marginLeft:30,
        marginTop:30,
    },
    text:{
        textAlign:"center",
        marginTop:35,
        fontSize:19,
        color:"#000000"
    }
})

export default styles