import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'auth',
   initialState: { 
        status: 'checking' // 'checking', 'non-authenticated', 'authenticated' 
    },
   reducers: {
        login: (state, { payload }) => {
            state.status        = 'Authenticated';
            state.uid           = payload.uid;
            state.email         = payload.email;
            state.displayName   = payload.displayName;
            state.photoURL      = payload.photoURL;
            state.errorMessage  = payload.errorMessage;
        },

        logout: (state, { payload }) => {
            state.status        = 'not-authenticated'; 
            state.uid           = null;
            state.email         = null;
            state.displayName   = null;
            state.photoURL      = null;
            state.errorMessage  = payload?.errorMessage;
        },

        checkingCredentials: (state) => {
            state.status = 'checking'
        },       
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions