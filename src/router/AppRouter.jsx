import { Navigate, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { VehiculosRouter } from "../vehiculos"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { login, logout } from "../store/auth"
import { FirebaseAuth } from "../firebase/config"

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
        
    onAuthStateChanged( FirebaseAuth, async( user ) => {
    if( !user ) return dispatch( logout() );

    const { uid, email, displayName, photoURL } = user;
    dispatch( login({ uid, email, displayName, photoURL }) )

    });

  }, [])
  
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
