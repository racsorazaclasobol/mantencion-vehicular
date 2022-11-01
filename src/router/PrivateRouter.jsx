import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

export const PrivateRouter = ({ children }) => {

    const { logged } = useContext( AuthContext )

    // Guardo el link de la ultima pagina en la que estaba para cuando vuelva a iniciar sesion
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

  return ( logged )
        ? children
        : <Navigate to='/login' />

}
