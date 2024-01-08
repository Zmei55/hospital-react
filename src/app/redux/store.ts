import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "app/redux/appSlice";
import authReducer from "entities/Auth/redux/authSlice";
import userReducer from "entities/User/redux/userSlice";
import requestReducer from "entities/Request/redux/requestSlice";
import patientReducer from "entities/Patient/redux/patientsSlice";
import serviceReducer from "entities/Service/redux/servicesSlice";
import addressReducer from "entities/Address/redux/addressesSlice";
import { api } from "./api";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "authReducer",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    app: appReducer,
    auth: persistedAuthReducer,
    user: userReducer,
    request: requestReducer,
    patients: patientReducer,
    services: serviceReducer,
    addresses: addressReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
