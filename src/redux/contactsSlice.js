import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handleDeleteContact = (state, action) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
};
const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};
const handleAddContact = (state, action) => {
  state.items.push(action.payload);
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      ),
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  // [addContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  // [deleteContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const idx = state.items.findIndex(item => item.id === action.payload.id);
  //   state.items.splice(idx, 1);
  // },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactsSlice.reducer;
