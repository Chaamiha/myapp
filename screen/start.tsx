import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather"; 
import { useNavigation } from "@react-navigation/native"
import Navi from '@/navigation/fnavigation';

const PlantasiaCard = () => {
  const navigation = useNavigation();
  
function Getstart(){
  navigation.navigate("p")
}
  return (
    <View>
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require('../assets/images/st.jpeg'
    )} // Replace with your image path
        style={styles.imageBackground}
        imageStyle={styles.imageStyle} // For borderRadius on the image
    >
        <View style={styles.overlay}> {/* To darken the image and make text pop */}
          <Text style={styles.title}>Plantasia</Text>
          <Text style={styles.subtitle}>Take care of your plants</Text>

          <TouchableOpacity style={styles.button}onPress={Getstart}>
            <Text style={styles.buttonText}>Start now</Text>
           
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%", // Adjust as needed
    height: "100%", // Adjust as needed
    borderRadius: 10, // Match the image borderRadius
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 0, // Space between cards if you have multiple
  },
  imageBackground: {
    flex: 1, // Important: Makes the image fill the container
    justifyContent: 'center', // Center content vertically
    borderRadius: 10, // Match card container borderRadius
    overflow: 'hidden', // Needed for borderRadius on ImageBackground
  },
  imageStyle: {
    borderRadius: 10, // Needed for borderRadius on ImageBackground
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust opacity for desired darkness
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add some padding around the text
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center', 
    
  
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop:600,
    width:200,
    height:50
    
    
  },
  buttonText: {
    color: 'white', // Dark text color
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default PlantasiaCard;