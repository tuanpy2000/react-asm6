import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: rootReducer,
    middleware
});

export default store;