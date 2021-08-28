import { createSelector } from "@reduxjs/toolkit";

export const getFilterReducer = (state) => state.contacts.filterReducer;

export const getItems = (state) => state.contacts.itemsReduser;

export const getVisibleContacts = createSelector(
  [getFilterReducer, getItems],
  (filter, items) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);