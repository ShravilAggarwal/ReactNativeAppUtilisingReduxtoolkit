import React, { useEffect, useState } from "react";
import { FlatList, Text, Modal, View, TouchableOpacity, Image } from "react-native";
import { fetchContacts } from "../store/myContacts";
import NavigationBar from "../navigationBar";
import { useSelector, useDispatch } from "react-redux";
import {addContact, removeContact} from "../store/myContacts"
import MapImage from "../APIs/GeoLocation";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {RootState, AppDispatch} from "../store/store";
import { Dispatch } from "redux";

interface Contact{
    id: number,
    name: string,
    email: string,
    phone: string,
    city: string,
    lat: number,
    lng: number,
}

export default function phoneDirectory(){
    const dispatch = useDispatch<AppDispatch>();
    const {status, error, contacts} = useSelector((state: any) => state.contacts);
    const [contactArr, setContactArr] = useState<Contact[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState<any | null>(null);
    const [addModal, setAddModal] = useState(false);
    useEffect(()=>{
        if (status === "idle"){
            dispatch(fetchContacts());
        }
    }, [status, dispatch])  
    
    const handleAdd=()=>{
        setModalVisible(true); 
        setAddModal(true);
    }

    return(
        <>
            <FlatList 
                data={contacts}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item}) => 
                    <View>
                        <Text style={{padding: 5, fontSize: 24, height: 44}} 
                        onPress={()=>{
                            setSelected(item);
                            setModalVisible(true);
                            setAddModal(false);
                        }}>
                            {item.name}
                        </Text>
                    </View>}
            />

            <Modal 
                visible={modalVisible}
                onRequestClose={()=>setModalVisible(false)}
                transparent={true}
            >
                <View style={{flex:1, justifyContent:"center", alignContent:"center", backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <View style={{width: "100%", height: "50%", backgroundColor:"white", borderRadius:20}}>
                        {!addModal &&(<View style={{marginLeft: 10}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 40, width: 300, marginTop: 10}}>{selected?.name}</Text>
                                <TouchableOpacity
                                    onPress={()=>dispatch(removeContact(selected?.id))}
                                    style={{justifyContent: "center", alignItems: "center", width: 60, height: 60, borderRadius: 20, backgroundColor: "lightgrey"}}
                                >
                                     <Ionicons name="trash" size={24} color="red" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>setModalVisible(false)}
                                    style={{justifyContent: "center", alignItems: "center", width: 60, height: 60, borderRadius: 20, backgroundColor: "lightgrey"}}
                                >
                                    <Text style={{fontSize: 40, width: 30, height: 60}}>✗</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontSize:20}}>{selected?.phone}</Text>
                            <Text style={{fontSize:20}}>{selected?.email}</Text>
                            <Text style={{fontSize:20}}>{selected?.city}{"\n"}</Text>
                            <MapImage
                                lat = {selected?.lat}
                                lng = {selected?.lng}
                            />
                        </View>)}
                        {addModal && (<TouchableOpacity
                            onPress={()=>setModalVisible(false)}
                            style={{justifyContent: "center", alignItems: "center", width: 60, height: 60, borderRadius: 20, backgroundColor: "lightgrey"}}
                        >
                            <Text style={{fontSize: 40, width: 30, height: 60}}>✗</Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
            </Modal>
            
            <TouchableOpacity style={{marginBottom: 20, justifyContent:"center", alignItems:"center", backgroundColor:"lightgrey", width: "20%", alignSelf:"center", borderRadius:20}} onPress={handleAdd}>
                <Text style={{fontSize: 40}}>+</Text>
            </TouchableOpacity>
        </>
    )
}