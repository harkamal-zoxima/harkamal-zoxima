import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
  import styles from './LoginStyles'
  
class Login extends React.Component{
    render(){
        return(
            <View>
                <Image
                    source={{
                        uri:
                            'https://zoxima.s3.us-east-2.amazonaws.com/hero-logo-vertical%402x.png',
                    }}
                    style={styles.image}
                />
                <TextInput style={styles.text} placeholder="Username"></TextInput>
                <TextInput style={styles.text} secureTextEntry={true} placeholder="Password"></TextInput>

                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Menu")}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default Login;