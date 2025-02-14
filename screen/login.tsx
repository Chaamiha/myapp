import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Icon from "react-native-feather"; 
import { useNavigation } from "@react-navigation/native"
function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',padding:75 }}>
      <View style={{ backgroundColor: 'green', width: 350, height: 350, borderRadius: 20, padding: 20,}}>
        
        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 30, margin: 10, paddingLeft: 15 }}
          placeholder="Enter email"
          placeholderTextColor="red"
        />
        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 20, margin: 10, paddingLeft: 15 }}
          placeholder="Enter password"
          placeholderTextColor="red"
          secureTextEntry={true}
        />
      

       
        
        <Sinin/>
        <BotomeSection/>
      </View>
     
    </View>
    
  );
}


function Sinin() {
 
   const navigation = useNavigation();
  function GotoLogin() {
     return(
     navigation.navigate('chaami')
     );
   }
 
  return (
    <TouchableOpacity  onPress={GotoLogin}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Text Section */}
      <View style={{ width: 80, height: 60, marginLeft: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>SIGN IN</Text>
      </View>

      {/* Red Box Section */}
      <View
        style={{

          width: 100,
          height: 100,
          alignItems: 'flex-end',
          justifyContent: 'center',
          margin:10,
          flex:1,
         
          
        }}
      >
      
      <View style={{ backgroundColor: 'yellow', width: 50, height: 50, marginRight: 30,borderRadius:100,marginTop:-25,justifyContent:'center',alignItems:"center" }}>
     <Icon.ArrowRight width={80} height={28} color={'blue'} ></Icon.ArrowRight>
      </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

function BotomeSection() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Text Section */}
      <View style={{ width: 80, height: 60, marginLeft: 30 }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'black' }}>SIGN UP</Text>
      </View>

      {/* Red Box Section */}
      <View
        style={{

          width: 100,
          height: 100,
          alignItems: 'flex-end',
          justifyContent: 'center',
          margin:-15,
          flex:1,
          
          
        }}
      >
      
      <View style={{  width: 120, height: 50, marginRight: 30,marginTop:-25, }}>
        <Text style={{fontWeight:'bold',fontSize:13,paddingTop:9}}>FOGET PASSWORD</Text>
      </View>
      </View>
    </View>
  );
}

import { ImageBackground } from 'react-native';

export default function SinupScreen() {
  return (
    <ImageBackground 
    source={{ uri: "https://th.bing.com/th/id/OIP.Dm32-cKerld0-P_pN_op6wAAAA?w=195&h=261&rs=1&pid=ImgDetMain" }} 
      style={{ flex: 1 }}
    >
      <Text style={{ fontSize: 28, color: 'yellow', paddingTop: 130, paddingLeft: 40, fontWeight: '600' }}>
        Welcome to Sri Lanka's Apartment Cultivation App
      </Text>

      <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
        <Login />
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
