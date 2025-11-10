import React, { useEffect, useState } from "react";
import { FlatList, Text, Modal, View, TouchableOpacity, Image } from "react-native";
import { fetchContacts } from "../APIs/contacts";
import NavigationBar from "../navigationBar";
import {  } from "../components/contactModal"


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
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState<Contact | null>(null);
    useEffect(()=>{
        async function getContacts(){
            const data = await fetchContacts();
            const contactList = data.map((contacts: any)=>{
                return {
                    name: contacts.name,
                    email: contacts.email,
                    phone: contacts.phone,
                    city: contacts.address.city,
                    id: contacts.id,
                    lat: contacts.address.geo.lat,
                    lng: contacts.address.geo.lng,
                }
            })
            setContacts(contactList);
        }
        getContacts();
    }, [])  
    
    return(
        <>
            <FlatList 
                data={contacts}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item}) => 
                    <Text style={{padding: 5, fontSize: 24, height: 44}} 
                    onPress={()=>{
                        setSelected(item);
                        setModalVisible(true);
                    }}>
                        {item.name}
                    </Text>}
            />

            <Modal 
                visible={modalVisible}
                onRequestClose={()=>setModalVisible(false)}
                transparent={true}
            >
                <View style={{flex:1, justifyContent:"center", alignContent:"center", backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <View style={{width: "100%", height: "50%", backgroundColor:"white", borderRadius:20}}>
                        <View style={{marginLeft: 10}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 40, width: 300, marginTop: 10}}>{selected?.name}</Text>
                                <TouchableOpacity
                                    onPress={()=>setModalVisible(false)}
                                    style={{justifyContent: "center", alignItems: "center", width: 60, height: 60, borderRadius: 20, backgroundColor: "lightgrey"}}
                                >
                                    <Text style={{fontSize: 40, width: 30, height: 60}}>✗</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontSize:20}}>{selected?.phone}</Text>
                            <Text style={{fontSize:20}}>{selected?.email}</Text>
                            <Text style={{fontSize:20}}>{selected?.city}</Text>
                             <Image
                                source={{
                                uri: `https://maps.googleapis.com/maps/api/staticmap?center=${selected?.lat},${selected?.lng}&zoom=14&size=400x200&markers=color:red%7C${selected?.lat},${selected?.lng}&key=YOUR_API_KEY`
                                }}
                                style={{ width: "100%", height: 200, marginTop: 10, borderRadius: 10 }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}