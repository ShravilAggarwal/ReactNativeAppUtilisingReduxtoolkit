import React, { useEffect, useState } from "react";
import { FlatList, Text, Modal } from "react-native";
import { fetchContacts } from "../APIs/contacts";
import NavigationBar from "../navigationBar";
import {  } from "../components/contactModal"

export default function phoneDirectory(){
    const [contacts, setContacts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    useEffect(()=>{
        async function getContacts(){
            const data = await fetchContacts();
            const contactList = data.map((contacts: any)=>{
                return contacts.name;
            })
            setContacts(contactList);
        }
        getContacts();
    }, [])  
    
    return(
        <NavigationBar title="Phone">
            <FlatList 
                data={
                    contacts.map((name: string, id: number) => ({key: id, name: name}))
                }
                renderItem={({item}) => 
                    <Text style={{padding: 5, fontSize: 24, height: 44}} 
                    onPress={()=>{
                    setSelected(item.key);
                    setModalVisible(true);}}>
                        {item.name}
                    </Text>}
            />
        </NavigationBar>
    )
}