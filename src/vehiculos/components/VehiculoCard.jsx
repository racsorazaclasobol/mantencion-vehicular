import { useNavigate } from "react-router-dom";

export const VehiculoCard = ({ id, idOwner, modelo, patente, estado, kilometraje }) => {

    const navigate = useNavigate();
    
    const carImageUrl = `/assets/coche.png`;


    const handleVerVehiculo = () => {
        navigate(`/detailVehiculo?pat=${ patente }`);
    }

    return (
        <>
            <div className="col">
                <div className="card" style={{ cursor:'pointer' }}>
                    
                    <div className="row no-glutters m-1 d-flex">
                        <div className="col-4">
                            <img src={ carImageUrl } alt={ modelo } style={{ width:'100px' }} className="card-img" />
                        </div>
                        <div className="col-8">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <h5 className="card-title">{ patente }</h5> </li>
                                <li className="list-group-item"> 
                                    <p>{ modelo } </p>
                                </li>
                                <li className="list-group-item"> Estado: { estado }  </li>
                                <li className="list-group-item"> Kilometraje: { kilometraje } kms  </li>
                                                           

                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={ handleVerVehiculo }
                                >Administrar</button>
                            </ul>
                        </div>   
                    </div>

                </div>
            </div>
        
        </>

    )
}
