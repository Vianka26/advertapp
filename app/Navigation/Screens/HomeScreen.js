import React from "react";
import { View, Text } from "react-native";

// have to have this inorder for something to dispaly on screen
export default function HomeScreen({navigation}){
   return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>


   );
}