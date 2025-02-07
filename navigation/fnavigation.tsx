import React from "react";
import { createStackNavigator, Header } from '@react-navigation/stack';

import Login1 from "@/screen/singUp";


import SinupScreen from "@/screen/login";

const Stack = createStackNavigator();

export default function Navi() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Returant" component={SinupScreen} />
            <Stack.Screen name="Restaurant" component={Login1} />
        </Stack.Navigator>
    );
}