import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../navigationBar";
import { decrementBy, incrementBy } from "../store/index";

export default function capturingTaps(){
    const counter: number = useSelector((state: any) => state.counter.counter);
    const dispatch = useDispatch();
    const[count, setCount] = useState(0);
    return(
        <NavigationBar title = "Counter and Capture">
            <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 20, backgroundColor: "transparent"}}>
            <TouchableOpacity onPress={()=>{if(counter===0) return; dispatch(decrementBy(1));}}>
                <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
                <Text style={styles.btn}>{counter}</Text>
            <TouchableOpacity onPress={()=>{dispatch(incrementBy(1));}}>
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
            </View>
        </NavigationBar>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        padding: 10,
        borderRadius: 5,
        fontSize: 28,
        marginTop: 10,
        backgroundColor: "pink",
    },
    btn: {
        fontSize: 100,
    },
    btnactive: {
        backgroundColor: "black",
    },
})