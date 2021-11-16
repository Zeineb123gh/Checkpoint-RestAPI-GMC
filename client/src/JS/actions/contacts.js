import { GET_ALL_CONTACTS_fAIL, 
  GET_ALL_CONTACTS_LOAD, 
  GET_ALL_CONTACTS_SUCCESS, 
  GET_CONTACT } from "../constants/contacts"
import axios from "axios"


export const getAllContacts=()=> async(dispatch)=>{
    dispatch({type:GET_ALL_CONTACTS_LOAD});
    try {
      let result = await axios.get("/api/contact");
      dispatch({type:GET_ALL_CONTACTS_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch ({type:GET_ALL_CONTACTS_fAIL});
    } 
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_ALL_CONTACTS_fAIL });
  }
};

export const addContact= (contact, history)=> async(dispatch)=>{
  try {
    await axios.post("/api/contact", contact)
    history.push("/contacts")
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({type:GET_ALL_CONTACTS_fAIL})
  };
}

export const getContact=(id)=> async(dispatch)=>{
    dispatch({type:GET_ALL_CONTACTS_LOAD})  
  try {
    let {data} = await axios.get(`/api/contact/${id}`);
dispatch({type:GET_CONTACT, payload:data})
  } catch (error) {
   dispatch ({type:GET_ALL_CONTACTS_fAIL}); 
  };
}

export const editContact = (id, contact, history) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, contact);
    dispatch(getAllContacts());
    alert("Contact Updated")
    history.push("/contacts");
  } catch (error) {
    dispatch({ type: GET_ALL_CONTACTS_fAIL });
  }
};