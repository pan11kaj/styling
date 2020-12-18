import React,{ Component } from "react";
import {View,TouchableOpacity,Text} from 'react-native';

export default class LogOut extends Component{
render(){
    return(
        <View>
        <TouchableOpacity style={{width:60,backgroundColor:'yellow',marginTop:300,borderRadius:20,alignItems:'center'}} onPress={()=>{
            this.props.navigation.navigate('login')
             
        }}>
            <Text>
          Logout
            </Text>
        </TouchableOpacity></View>
    )
}
}