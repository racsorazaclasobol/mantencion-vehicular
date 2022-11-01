import { staticVehiculos } from '../data/vehiculos'

export const GetVehiculoByOwner = (idOwner) => {

    return staticVehiculos.filter( vehiculo => vehiculo.idOwner === idOwner );
    
}
