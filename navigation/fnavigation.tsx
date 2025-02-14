import React from "react";
import { createStackNavigator, Header } from '@react-navigation/stack';

import Login1 from "@/screen/singUp";
import PlantasiaCard from "@/screen/start";
import  PlantShopDashboard from "@/screen/dashbord";


import SinupScreen from "@/screen/login";
import ProductDetails1 from "@/screen/bandakka";
import ProductDetails2 from "@/screen/tometo";
import ProductDetails3 from "@/screen/tometo";
import ProductDetails4 from "@/screen/cucumber";
import ProductDetails5 from "@/screen/brinjol";
import ProductDetails6 from "@/screen/plant6";
import ProductDetails7 from "@/screen/plant";
import ProductDetails8 from "@/screen/plant8";
import ProductDetails9 from "@/screen/plant9";
import ProductDetails10 from "@/screen/plant10";
import ProductDetails11 from "@/screen/plant11";
import ProductDetails12 from "@/screen/plant12";

const Stack = createStackNavigator();

export default function Navi() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="start" component={PlantasiaCard} />
            <Stack.Screen name="p"component={Login1}/>
            <Stack.Screen name="b"component={SinupScreen} />
            <Stack.Screen name="chaami"component={PlantShopDashboard}/>
            <Stack.Screen name="chaami1"component={ProductDetails1}/>
            <Stack.Screen name="chaami2"component={ProductDetails2}/>
            <Stack.Screen name="chaami3"component={ProductDetails3}/>
            <Stack.Screen name="chaami4"component={ProductDetails4}/>
            <Stack.Screen name="chaami5"component={ProductDetails5}/>
            <Stack.Screen name="chaami6"component={ProductDetails6}/>
            <Stack.Screen name="chaami7"component={ProductDetails7}/>
            <Stack.Screen name="chaami8"component={ProductDetails8}/>
            <Stack.Screen name="chaami9"component={ProductDetails9}/>
            <Stack.Screen name="chaami10"component={ProductDetails10}/>
            <Stack.Screen name="chaami11"component={ProductDetails11}/>
            <Stack.Screen name="chaami12"component={ProductDetails12}/>

          
          
        </Stack.Navigator>
    );
}