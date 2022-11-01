import { staticVehiculos } from '../data/vehiculos'

export const GetVehiculoByPatente = (patente) => {

    return staticVehiculos.filter( vehiculo => vehiculo.patente === patente );

}
