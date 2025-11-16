import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';


export const fetchContacts = createAsyncThunk( 
    "contacts/fetchContacts", async()=>{
        const response = await fetch(`${BASE_API_URL}/users`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}:`, error);
        }
        const data = await response.json();
        return data;
    }
)


const contactReducer = createSlice({
    name: "contacts",
    initialState: {
        error: null,
        contacts: [],
        status: "idle" // idle || succeeded || loading || failed
    },
    reducers: {
        addContact : (state, actions) => {
            const newContact={
                id: actions.payload.id ?? Date.now(),
                name: actions.payload.name,
                email: actions.payload.email,
                phone: actions.payload.phone,
                city: actions.payload.address.city,
                lat: actions.payload.address.geo.lat,
                lng: actions.payload.address.geo.lng,
            }
            state.contacts.push(newContact);
        },
        removeContact : (state, actions) => {
            return state.filter((contact) => contact.id !== actions.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, actions) => {
                state.status = "succeeded";
                state.contacts = actions.payload;
            })
            .addCase(fetchContacts.rejected, (state, actions) => {
                state.status = "failed";
                state.error = actions.error.message;
            })
            .addCase(fetchContacts.pending, (state) => {
                state.status = "loading";
            })
    }
})

export const {addContact, removeContact} = contactReducer.actions;
export default contactReducer.reducer;