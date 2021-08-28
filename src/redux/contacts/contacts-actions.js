
import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const saveContactRequest = createAction("contacts/saveContactRequest");
const saveContactSuccess = createAction("contacts/saveContactSuccess");
const saveContactError = createAction("contacts/saveContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const updateFilterAction = createAction("updateFilter");

export default {
  saveContactRequest,
  saveContactSuccess,
  saveContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateFilterAction,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
};