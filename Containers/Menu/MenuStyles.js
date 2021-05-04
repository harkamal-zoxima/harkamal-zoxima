import {Dimensions, StyleSheet} from 'react-native';

var Width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    title:{
        backgroundColor:"#C50404",
        height:50,
        marginTop:10,
        width:"90%",
        marginLeft:"5%",
        borderRadius:10
    },
    textstyle:{
        fontSize:20,
        color:"white",
        textAlign:"center",
        marginTop:10,
    },
    outerdiv:{
        flex:1,
        flexDirection:'row',
    },
    image:{
         width: 90, 
         height: 105,
         marginTop:40,
         marginLeft:23
    },
    container:{
        width:Width/2-45,
        height:250,
        backgroundColor:"#FFFFFF",
        borderWidth:1,
        borderColor:"#00000029",
        marginLeft:30,
        // marginTop:15,
        marginBottom:30
    },
    innerdiv:{
        flex:1,
        flexDirection:'row',
        marginTop:20
    },
    text:{
        textAlign:"center",
        marginTop:35,
        fontSize:19,
        color:"#000000"
    }
})

export default styles