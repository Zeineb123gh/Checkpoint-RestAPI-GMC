import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllContacts } from '../JS/actions/contacts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ContactCard from '../Comonents/ContactCard' 

const ContactList = () => {
    const contacts = useSelector(state => state.contactReducer.contacts)
    const isLoad = useSelector(state => state.contactReducer.isLoad)
    const isError = useSelector(state => state.contactReducer.isError)
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch(getAllContacts());
    },[dispatch]);
    return (
        <div>
            {isLoad? (
             <Box sx={{ display: 'flex' }}>
             <CircularProgress />
             </Box>
             ) : isError? (
                <p>Can not fetch the data</p>
             ) :!contacts.length? (
                <p> No contact to show</p> 
             ) : (
                <div style={{display: "flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                    {contacts.map((el)=> <ContactCard contact={el} key={el._id}/>)}
                </div>
            )}     
        </div>
    );
}

export default ContactList;
