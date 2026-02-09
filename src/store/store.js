import { configureStore } from "@reduxjs/toolkit";
import pasteSliceReducer  from "../reduxSlice/pasteSlice";

export const store = configureStore({
    reducer: {
        paste: pasteSliceReducer
    }
})