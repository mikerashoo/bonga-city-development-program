 
import React, { useReducer } from "react"; 
import { CHANGE_LANGUAGE_ACTION } from "./actions";
 
export const initialState = { 
  selectedLanguage: "eng", 
};
 
export const translationReducer = (initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE_ACTION:
      console.log("Reducer called ---------", action.selectedLanguage);
      return {
        ...initialState,
       selectedLanguage: action.selectedLanguage
      };
    
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};