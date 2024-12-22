import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: NotedState = {
  notes: [],
  folders: [],
  isLoading: false,
  isOpenModalFolder: false
};

const notedSlice = createSlice({
  name: 'noted',
  initialState,
  reducers: {
    updateFolders: (state, action: PayloadAction<FolderItem>) => {
      state.folders.push(action.payload);
      state.isOpenModalFolder = false;
    },
    updateNoted: (state, action: PayloadAction<NotedItem>) => {
      state.notes.push(action.payload);
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateModalFolder: (state, action: PayloadAction<boolean>) => {
      state.isOpenModalFolder = action.payload;
    }
  }
});

export const { updateNoted, updateFolders, updateModalFolder } =
  notedSlice.actions;
export default notedSlice.reducer;
