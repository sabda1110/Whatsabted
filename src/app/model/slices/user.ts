import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
