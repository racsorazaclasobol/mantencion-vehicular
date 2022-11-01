import { GetVehiculoByOwner } from "../helpers"

import { AddVehiculo, VehiculoCard } from "./";

export const VehiculosList = ({idOwner}) => {

  const vehiculos = GetVehiculoByOwner(idOwner);

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        
        { 
          vehiculos.map( vehiculo => 
            ( 
              <VehiculoCard key={ vehiculo.id } {...vehiculo} />
            ) 
          ) 
        }

        <AddVehiculo />

      </div>
    </>
  )
}
