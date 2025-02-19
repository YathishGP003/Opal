"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FolderReducer from "./slices/folders";
import WorkSpaceReducer from "./slices/workspaces";

import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  FolderReducer,
  WorkSpaceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
