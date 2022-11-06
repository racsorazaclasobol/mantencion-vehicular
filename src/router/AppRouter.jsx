import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { VehiculosRouter } from "../vehiculos"


export const AppRouter = () => {

  const { status } = useCheckAuth();  

  if( status === 'checking' ) { 
    return ( <CheckingAuth /> )
  }

  
  return (
    <>
      <Routes>

        {
          ( status === 'Authenticated' )
          ? <Route path='/*' element={ <VehiculosRouter /> } />
          : <Route path='/auth/*' element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />

          {/* //Login y registro */}
          {/* <Route path='/auth/*' element={ <AuthRoutes /> } /> */}

          {/* //JournalAll */}
          {/* <Route path='/*' element={ <VehiculosRouter /> } /> */}
        
      </Routes>
    </>
  )
}
