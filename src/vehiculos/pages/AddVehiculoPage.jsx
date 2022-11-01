import React from 'react'

export const AddVehiculoPage = () => {
  
  
  return (

    <div className="container m-1">
      <form className="row g-3 mt-3">


        <div className="col-12">
          <label className="form-label">Patente</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12">

          <select class="form-select">
            <option selected>Tipo de Vehiculo</option>
            <option value="1">Automovil</option>
            <option value="2">Motocicleta</option>
            <option value="3">Camion</option>
          </select>

        </div>

        <div className="col-12">
          <label className="form-label">Marca</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-6">
          <label className="form-label">Modelo</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-6">
          <label className="form-label">Año</label>
          <input type="text" className="form-control" />
        </div>

      </form>
    </div>

  )
}
