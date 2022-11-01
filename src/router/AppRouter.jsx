import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { VehiculosRouter } from "../vehiculos"

export const AppRouter = () => {
  return (
    <>
      <Routes>

          {/* //Login y registro */}
          <Route path='/auth/*' element={ <AuthRoutes /> } />

          {/* //JournalAll */}
          <Route path='/*' element={ <VehiculosRouter /> } />
        
      </Routes>
    </>
  )
}
