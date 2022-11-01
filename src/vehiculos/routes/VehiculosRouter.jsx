import { Navigate, Route, Routes } from "react-router-dom"

import { NavBar } from "../../ui/components/NavBar"

import { AddVehiculoPage, DetailVehiculo, MisVehiculosPage, VehiculoPage } from "../pages"

export const VehiculosRouter = () => {
  return (

    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="misVehiculos" element={ <MisVehiculosPage /> } />
          <Route path="vehiculo" element={ <VehiculoPage /> } />
          <Route path="detailVehiculo" element={ <DetailVehiculo /> } />
          <Route path="addVehicle" element={ <AddVehiculoPage  /> } />


          <Route path="/" element={ <Navigate to="/misVehiculos" />} />
        </Routes>
      </div>
    </>

  )
}
