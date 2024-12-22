import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: NotedState = {
  notes: [],
  isLoading: false
};

const notedSlice = createSlice({
  name: 'noted',
  initialState,
  reducers: {
    updateNoted: (state, action: PayloadAction<NotedItem>) => {
      state.notes.push(action.payload);
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { updateNoted } = notedSlice.actions;
export default notedSlice.reducer;
