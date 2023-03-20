import { configureStore } from '@reduxjs/toolkit';
import modal from './modalSlice';

export const store = configureStore({
  reducer: { modal: modal.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
