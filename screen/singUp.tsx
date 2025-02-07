import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Icon from "react-native-feather"; 
function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#ADD8E6', width: 350, height: 450, borderRadius: 20, padding: 20,}}>
        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 30, margin: 10, paddingLeft: 15 }}
          placeholder="Enter your name"
          placeholderTextColor="red"
        />
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
        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 30, margin: 10, paddingLeft: 15 }}
          placeholder="Reenter your password"
          placeholderTextColor="red"
        />

       
        
        <Sinin/>
        <BotomeSection/>
      </View>
     
    </View>
    
  );
}


function Sinin() {
  return (
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
      
      <View style={{ backgroundColor: 'yellow', width: 50, height: 50, marginRight: 30,borderRadius:100,marginTop:-25, }}>
     <Icon.Search width={80} height={28} color={'blue'} ></Icon.Search>
      </View>
      </View>
    </View>
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

export default function Login1() {
 return(<View style={{ flex: 1 }}>
     
       <Text style={{ fontSize: 35, color: 'yellow', paddingTop: 130, paddingLeft: 40, fontWeight: '600' }}>
         Welcome to sri lanka best traveling app
       </Text>
 
       <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
    
         <Login />
         
       </KeyboardAwareScrollView>
       </View>
 );
}