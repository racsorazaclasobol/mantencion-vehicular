import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth";

export const NavBar = () => {
  
  const navigate = useNavigate();
  const { user, logout } = useContext( AuthContext );

  const onLogout = () => {

    logout();

    navigate('/login', { replace:true });
    
  }

  return (

    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 rounded">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <NavLink 
                    className="nav-item nav-link"
                    to="/misVehiculos"
                    >
                    Mis Vehiculos
                </NavLink>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span
                        className="nav-link nav-item text-info" 
                    >
                        { user?.name }
                    </span>

                    <button
                        className="nav-link nav-item btn"
                        onClick={ () => onLogout()}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </div>
      </nav>
  </>
  )
}
