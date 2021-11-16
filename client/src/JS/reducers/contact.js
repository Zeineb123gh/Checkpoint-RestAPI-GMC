import { GET_ALL_CONTACTS_fAIL, 
    GET_ALL_CONTACTS_LOAD, 
    GET_ALL_CONTACTS_SUCCESS, 
    GET_CONTACT } 
from "../constants/contacts";

const initialState={
    contacts:[],
    isLoad:false,
    isError:false,
    contact:{},
};

const contactReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case GET_ALL_CONTACTS_LOAD:
        return{...state, isLoad:true};
    case GET_ALL_CONTACTS_SUCCESS:
        return{...state, contacts: payload.contacts, isLoad:false};
    case GET_CONTACT:
        return{...state, contact: payload.contact, isLoad:false, isError:false};
    case GET_ALL_CONTACTS_fAIL:
        return{...state, isError:true, isLoad:false};
    default:
        return state;
}
};
export default contactReducer;