import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { parsistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: userReducer,
});

const parsistConfig = {
  key: "root",
  storage,
  version: 1,
};

const parsistedReducer = parsistReducer(parsistConfig, rootReducer);

export const store = configureStore({
  reducer: parsistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
