import { VehiculosList } from "../components"
import { VehiculosLayout } from "../layout/VehiculosLayout"

export const MisVehiculosPage = () => {
  return (
    <>

      <VehiculosLayout>

        <h1>Mis Vehiculos</h1>
        <hr />

        <VehiculosList idOwner='001' />

      </VehiculosLayout>

    </>
  )
}
