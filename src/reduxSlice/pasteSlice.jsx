import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPaste: (state, action) => {

        },
        updateToPaste: (state, action) => {

        },
        resetAllPaste: (state, action) => {

        },
        removeFormPaste: (state, action) => {
            
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFormPaste } = pasteSlice.actions

export default pasteSlice.reducer