import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

const itemsReduser = createReducer([], {
  [actions.fetchContactsSuccess]: (state, action) => {
    return action.payload;
  },
  [actions.deleteContactSuccess]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
  [actions.saveContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
});

const isLoadingReduser = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,

  [actions.saveContactRequest]: () => true,
  [actions.saveContactSuccess]: () => false,
  [actions.saveContactError]: () => false,
});

const errorReduser = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.fetchContactsRequest]: () => null,

  [actions.deleteContactError]: (_, action) => action.payload,
  [actions.deleteContactRequest]: () => null,

  [actions.saveContactError]: (_, action) => action.payload,
  [actions.saveContactRequest]: () => null,
});

const filterReducer = createReducer("", {
  [actions.updateFilterAction]: (_, action) => {
    return action.payload;
  },
});

export default combineReducers({
  itemsReduser,
  isLoadingReduser,
  errorReduser,
  filterReducer,
});