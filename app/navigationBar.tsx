import React, { ReactNode, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type NavigationBarProps={
    title?: String,
    onBackPress?: () => void,
    children?: ReactNode
}

export default function NavigationBar({ title, children }: NavigationBarProps){
    const insets = useSafeAreaInsets();
    const[showNavbar, setShowNavbar] = useState(false);
    const onBackPress = () => {
        console.log("GO BACK")
    }
    
    return(
        <View style={{flex: 1}}>
            {showNavbar &&
                <Pressable style={{
                    flexDirection: "row",
                    paddingTop: insets.top,
                    paddingBottom: (insets.bottom-10),
                    backgroundColor: "white",   
                }} onPress={e=>{e.stopPropagation()}}>
                    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                        <Ionicons name={"chevron-back"} 
                        size={28} 
                        color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </Pressable>
            }
            <Pressable>
                {children}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        width: 28,
        alignItems: "center",
    },
    navbar: {
        backgroundColor: "black",
    },
    title: {
        position: "absolute",
        paddingTop: "12%",
        paddingLeft: 30,
        fontSize: 20,
    }
})