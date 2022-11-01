import { useNavigate } from "react-router-dom"

export const AddVehiculo = () => {

    const navigate = useNavigate();

    const handleAddVehiculo = () => {

        navigate('/addVehicle');

    }

  return (
    <>
    <div className="col">
        <div className="card" style={{ cursor:'pointer' }}>
            
            <div className="row no-glutters d-flex justify-content-center align-items-center">
                <div 
                    className="col-12 text-center"
                    onClick={ handleAddVehiculo }    
                >
                    <i className="bi bi-file-plus " style={{ fontSize:'100px', color:'gray' }}></i>
                </div>
            </div>

        </div>
    </div>

</>
  )
}
