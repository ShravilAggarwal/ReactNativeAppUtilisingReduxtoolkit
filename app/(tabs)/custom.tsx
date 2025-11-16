import React, { useRef } from "react";
import { Text, TouchableOpacity, StyleSheet, Alert, TextInput, Keyboard, View } from "react-native";
import NavigationBar from "../navigationBar";

export default function CustomScreen() {
    const [focus, setFocus] = React.useState(false);
    const [name, setName] = React.useState("");
    return(
        <NavigationBar title="Custom Component">
            <TextInput style={[styles.input, focus && styles.inputFocused]} 
                placeholder="What's your name?" 
                onPress={()=>{setFocus(true)}}
                onChangeText={(text)=>{setName(text); setFocus(true)}}
                onSubmitEditing={()=>{setFocus(false)}}
            />
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{Alert.alert(`hello, ${name}`); 
                    Keyboard.dismiss(); setFocus(false)}} 
                >
                    <Text>Say Hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{Alert.alert(`goodbye, ${name}`); 
                    Keyboard.dismiss(); setFocus(false);}} 
                >
                    <Text>Say Goodbye</Text>
                </TouchableOpacity>
            </View>
        </NavigationBar>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "#FF637C",
        borderWidth: 1,
        borderColor: "#F9A8B6",
        borderStyle: "solid",
        marginHorizontal: 10,
        alignSelf: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "95%",        
        alignSelf: "center", 
        margin: 10,
        marginBottom: 50,
        padding: 10,
        height: 40,
    },
    inputFocused: {
        borderColor: "blue",
    }
});