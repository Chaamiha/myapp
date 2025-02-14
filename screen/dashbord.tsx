import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native"

const PlantShopDashboard = () => {
  const navigation = useNavigation();
  function Plant1(){
    return(
      navigation.navigate('chaami1')
    );
  }
  function Plant2(){
    return(
      navigation.navigate('chaami2')
    );
  }
  function Plant3(){
    return(
      navigation.navigate('chaami3')
    );
  }
  function Plant4(){
    return(
      navigation.navigate('chaami4')
    );
  }
  function Plant5(){
    return(
      navigation.navigate('chaami5')
    );
  }
  function Plant6(){
    return(
      navigation.navigate('chaami6')
    );
  }
  function Plant7(){
    return(
      navigation.navigate('chaami7')
    );
  }
  function Plant8(){
    return(
      navigation.navigate('chaami8')
    );
  }
  function Plant9(){
    return(
      navigation.navigate('chaami9')
    );
  }
  function Plant10(){
    return(
      navigation.navigate('chaami10')
    );
  }
  function Plant11(){
    return(
      navigation.navigate('chaami11')
    );
  }
  function Plant12(){
    return(
      navigation.navigate('chaami12')
    );
  }


  return (
    <View style={styles.container}>
      <View style={{height:65,width:"100%",backgroundColor:"ash"}}>
      <Text style={{fontSize:40,marginLeft:120,color:"green",fontFamily:""}}>Plants</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={Plant1}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.7NKTqzVMJ0zuqV7PcfL2-QAAAA?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>OKRA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant2}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.yBzL6iBdcSxjStxDXEJMWQHaGA?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant3}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.N1POqDDpOvGjuujp1aCCNwHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 3</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={Plant4}>
          <Image source={{ uri: 'https://homesteadandchill.com/wp-content/uploads/2023/03/grow-cucumber-plants-train-trellis-hanging-fruit-straight-vines-600x800.jpeg' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant5}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.92wKas9Hnu_RdYMTgZOeDAHaL4?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}onPress={Plant6}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.FHi2YCWwdzEezgf6fdV9WgHaJ4?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 6</Text>
        </TouchableOpacity>
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={Plant7}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.C189N3LDsELnCnA9Q97mNAHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant8}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.LgwP_CvMdp2j1EeB4Gbd6QHaG-?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant9}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.Ly0DYKI1p9vZkxx9KvkVjQHaE8?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 9</Text>
        </TouchableOpacity>
      </View>

      {/* Fourth Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={Plant10}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.4H5-Bf9McDwtjn8wkneFeQHaFj?w=1504&h=1128&rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant11}>
          <Image source={{ uri: 'https://th.bing.com/th/id/R.8dadd7f72f9793f2e6d91e30ea7e4243?rik=WVorjAEQJF8imA&pid=ImgRaw&r=0' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 11</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={Plant12}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.6VC4S5AMGrY8Ei6MAgXjggHaE8?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.cardText}>Plant 12</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: '30%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PlantShopDashboard;
