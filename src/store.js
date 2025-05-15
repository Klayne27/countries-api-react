import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
import themeReducer from './themeSlice'

const store = configureStore({
    reducer: {
        data: dataReducer,
        theme: themeReducer
    }
})

export default store