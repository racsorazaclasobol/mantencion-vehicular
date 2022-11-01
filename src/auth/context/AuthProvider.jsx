import { useReducer } from 'react'

import { types } from '../types/types'
import { AuthContext, authReducer } from './'

const initialState = {};

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user, //la doble negacion devuelve u true/false dependiendo de si existen elementos dentro del logged
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState, init);

    const onLoginUser = (name = '') => {
        
        const user = { id: 'ABC', name: name } 

        const action = { 
            type: types.login,
            payload: user //payload en español es carga util
         };

        //guardar sesion en localstorage
        localStorage.setItem('user', JSON.stringify(user));

        dispatch( action );
    }

    const onLogoutUser = () => {

        const action = { 
            type: types.logout
         };

        //eliminar sesion en el localstorage
        localStorage.removeItem('user');

        dispatch( action );

    }

    return (
        <>
            <AuthContext.Provider value={{ 
              ...authState, 
              login: onLoginUser,
              logout: onLogoutUser, }}>
                { children }
            </AuthContext.Provider>
        </>
      )
}
