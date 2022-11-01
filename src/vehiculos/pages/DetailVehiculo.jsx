import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetVehiculoByPatente } from '../helpers';

export const DetailVehiculo = () => {

    const imageUrl = `/assets/coche.png`;
    
    const location = useLocation();
    const navigation = useNavigate();

    const { pat = '' } = queryString.parse(location.search);

    const vehiculo = GetVehiculoByPatente(pat);
    const { id, idOwner, estado, kilometraje, modelo, patente, repuestos } = vehiculo[0];

    const handleEditRepuesto = () => {

    }

    const handleBack = () => {
        navigation(-1)
    }
          
    return (
    <>
        <div className='row'>
            <div className="col-4 card" style={{width: '18rem'}}>
                <img src={ imageUrl } style={{ width:'100px'}} className="card-img-top mx-auto d-block" alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">{ patente }</h5>
                </div>

                <ul className="list-group">
                    { 
                        repuestos.map( repuesto => 
                            (
                                <li key={ repuesto.nombre } className="list-group-item d-flex justify-content-between"> 
                                    <p>{ repuesto.nombre }</p>

                                    <button 
                                        className='btn btn-outline-info'
                                        onClick={ handleEditRepuesto }
                                    > Editar </button>
                                </li>
                            )
                        )                
                    }       
                </ul>
                <div className="card-body d-flex justify-content-between">
                    <button onClick={ handleBack } className="btn btn-outline-primary">Volver</button>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className='col-8'>
                aaa
            </div>
        </div>
       
    </>
  )

}
