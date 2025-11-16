import { useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, removeTodo } from "../store/todo";

import NavigationBar from "../navigationBar";


export default function tasks(){
    const[showModal, setShowModal] = useState(false);
    const[input, setInput] = useState('');
    const todos: any = useSelector((state: any) => state.todo.todos);
    const dispatch = useDispatch();
    const handleAdd = () => {
        setShowModal(true);
    };
    const handleSubmit = () => {
        setShowModal(false);
        if(input.trim().length === 0) return;
        dispatch(addTodo(input));
    }
    return(
        <NavigationBar title="To-Dos">       
            <View style={{marginVertical: 20}}>
                {!showModal
                   ?<FlatList 
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: 10,
                                backgroundColor: "#e5e5f0",
                                marginVertical: 5,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{fontSize: 18, alignSelf: "center", }}>{item.text}</Text>
                            <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
                                <Text style={{ color: "red", alignSelf: "center", marginVertical: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}/>
                   :<Modal>
                    <TextInput 
                        placeholder="Type in next to-do task"
                        placeholderTextColor="grey"
                        onChangeText={(text)=>setInput(text)}
                        onSubmitEditing={handleSubmit}
                    />
                  </Modal>
                } 
            </View>
            <TouchableOpacity onPress={handleAdd} style={{ width: 100, alignSelf: "center" }}>
                <Text style={{ alignSelf: "center" }}>Add More</Text>
            </TouchableOpacity>
        </NavigationBar>
    )
}