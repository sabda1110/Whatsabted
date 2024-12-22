import { configureStore } from '@reduxjs/toolkit';
import notedReducer from '@/app/model/slices/noted';
import userReducer from '@/app/model/slices/user';

const store = configureStore({
  reducer: {
    noted: notedReducer,
    user: userReducer
  }
});

console.log('Init : ', store.getState());

store.subscribe(() => console.log('Update:', store.getState()));

export default store;
