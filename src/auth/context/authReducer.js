import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  
    switch (action.type) {
        case types.login:
            return {
                ...state, //En caso de tener otras configuraciones que no quiero que se modifiquen, se barre su contenido y despues se modifica lo que queremos cambiar
                logged: true,
                user: action.payload
            }
            
        case types.logout:
            return {
                logged: false,
            }
    
        default:
            return state;
    }
    
}
