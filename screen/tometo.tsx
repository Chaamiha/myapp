import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Svg, Path } from "react-native-svg";

const ProductDetails3 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://th.bing.com/th/id/OIP.mEfRGYpbJS_UZkgVLhkAdAHaE5?rs=1&pid=ImgDetMain" }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>TOMATTO PLANT</Text>
        <View style={styles.ratingContainer}>
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="gold">
            <Path d="M12 .587l3.668 7.431 8.2 1.191-5.933 5.784 1.401 8.17L12 18.896l-7.336 3.867 1.401-8.17-5.933-5.784 8.2-1.191L12 .587z" />
          </Svg>
          <Text style={styles.ratingText}>Growing TOMATTO Plant</Text>
        </View>

        <Text style={styles.description}>
        Growing Okra in Apartments (Small Spaces)
1. Best Ways to Grow Okra
Container Gardening – Use pots, grow bags, or hanging pots on your balcony.
Vertical Gardening – Use wall planters, PVC pipe systems, or multi-tier shelves to save space.
2. Managing Heat for Better Growth
Use shade nets to control excessive sunlight.
Try self-watering pots to keep soil moisture balanced.
Add coconut husk mulch to retain soil moisture.
Use a mist spray to increase humidity.
Indoor gardening? Try LED grow lights or a hydroponic system for better results.
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Size</Text>
            <Text style={styles.infoValue}>Medium</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Plant</Text>
            <Text style={styles.infoValue}>TOMATTO</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Height</Text>
            <Text style={styles.infoValue}>12.6"</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Humidity</Text>
            <Text style={styles.infoValue}>82%</Text>
          </View>
        </View>

        <Text style={styles.price}>More Details</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>011-2275987</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#777",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  infoBox: {
    alignItems: "center",
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: "#999",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2E8B57",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default ProductDetails3;
