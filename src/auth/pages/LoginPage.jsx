import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();
  //Obtengo la ultima ruta almacenada en caso de haber estado con la sesion iniciada
  const lastPath = localStorage.getItem('lastPath') || '/';

  const handleLogin = () => {

    login( 'Oscar Alcázar' );
    navigate(lastPath, {replace: true});

  }

  return (
    <>
      <div className="container">
        <h1> LoginPage </h1>
        <hr />

        <button 
          className="btn btn-primary"
          onClick={ handleLogin }
        >
          Ingresar
        </button>
      </div>
        
    </>
  )
}
