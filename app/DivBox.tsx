import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface DivBoxProps{
    index: number,
    color: string,
}

export default function DivBox({ index, color }: DivBoxProps){
    return(
        <View style={[styles.container, {backgroundColor: color.toLowerCase()}]}>
            <Text>Div Box {index}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
})