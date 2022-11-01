import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { VehiculosRouter } from "../vehiculos"
import { PrivateRouter, PublicRouter } from "./"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        <Route 
          path = 'login' 
          element = { 
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          } 
        />

        <Route 
          path = '/*' 
          element = { 

            <PrivateRouter>
              <VehiculosRouter /> 
            </PrivateRouter>

          } 
        />
      </Routes>
    </>
  )
}
