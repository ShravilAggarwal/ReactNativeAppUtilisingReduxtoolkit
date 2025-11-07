import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Alert, View } from "react-native"
import NavigationBar from "../navigationBar";
import { useSelector, useDispatch } from "react-redux";
import { incrementBy, decrementBy } from "../store/index"

export default function capturingTaps(){
    const counter: number = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    const[count, setCount] = useState(0);
    return(
        <NavigationBar title = "Counter and Capture">
            <TouchableOpacity onPress={()=>Alert.alert("Warning")}>
                <Text style={styles.button}>Don't press me</Text>
            </TouchableOpacity>
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