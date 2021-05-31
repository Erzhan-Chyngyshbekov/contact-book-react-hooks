import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  contactsList: [],
  editTodoId: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CONTACTS_LIST":
      return {
        ...state,
        contactsList: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contactsList: [...state.contactsList, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contactsList: state.contactsList.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "CHANGE_EDIT_ID":
      return {
        ...state,
        editTodoId: action.payload,
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contactsList: state.contactsList.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export const contactBookContext = React.createContext();

const URL = "http://localhost:8000";

export default function ContactBookContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchContacts = async () => {
    const response = await axios.get(`${URL}/contacts`);
    console.log(response.data);

    const contacts = response.data;

    dispatch({
      type: "SET_CONTACTS_LIST",
      payload: contacts,
    });
  };

  const createContact = async (contact) => {
    const { data } = await axios.post(`${URL}/contacts`, contact);

    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });
  };

  const deleteContact = async (id) => {
    await axios.delete(`${URL}/contacts/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  const changeEditId = (id) => {
    dispatch({
      type: "CHANGE_EDIT_ID",
      payload: id,
    });
  };

  const changeContact = async (id, fullName, email, phoneNumber) => {
    const { data } = await axios.patch(`${URL}/contacts/${id}`, {
      fullName,
      email,
      phoneNumber,
    });
    console.log(data);

    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });

    changeEditId(null);
  };

  return (
    <contactBookContext.Provider
      value={{
        contactsList: state.contactsList,
        editId: state.editTodoId,
        fetchContacts,
        createContact,
        deleteContact,
        changeEditId,
        changeContact,
      }}
    >
      {props.children}
    </contactBookContext.Provider>
  );
}
