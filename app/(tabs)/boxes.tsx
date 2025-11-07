import React from "react";
import { View, Text } from "react-native";
import NavigationBar from "../navigationBar";
import DivBox from "../DivBox";
import { Dimensions } from "react-native";

export default function boxes(){
    const height = Dimensions.get("window").height/2 - 128;
    return(
        <NavigationBar title="Boxes">
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: height}}>
                <DivBox index={1} color="red" />
                <DivBox index={2} color="blue" />
                <DivBox index={3} color="green" />
                <DivBox index={4} color="yellow" />  
            </View>  
        </NavigationBar>
    )
}