import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, TextField, Typography, Link } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const initialForm = { email: 'oscar@gmail.com', password: '123456' };

const formValidation = {
  email:        [ (value) => value.includes('@'), 'El correo debe tener una @'],
  password:     [ (value) => value.length >= 6 , 'El debe tener mas de 6 caracteres'],
}

export const LoginPage = () => {

  const dispatch    = useDispatch();
  const { status, errorMessage }  = useSelector( state => state.auth );

  const { formState, email, password, onInputChange, isFormValid, emailValid, passwordValid } = useForm( initialForm, formValidation );

  const isAuthenticated = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword(formState) );
  }
  
  const onGoogleSignIn = () => {
    
    dispatch( startGoogleSignIn() );

  }

  return (
    <>

        <AuthLayout title='Login'>
          <form onSubmit={ onSubmit } >
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder='correo@gmail.com'
                  fullWidth
                  value={ email }
                  name="email"
                  onChange={ onInputChange }
                  />
              </ Grid>

              <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Contraseña"
                  type="password"
                  placeholder='********'
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{  mb:2, mt: 1 }}>
                <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                    <Alert severity='error' > { errorMessage } </Alert>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button type='submit' variant='contained' fullWidth disabled={ isAuthenticated }> 
                    Login
                  </Button>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                      variant='contained' 
                      fullWidth 
                      onClick={ onGoogleSignIn } 
                      disabled={ isAuthenticated }
                  >
                    <Google />

                    <Typography sx={{ ml: 1 }}> Google </Typography>
                    
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
              
            </Grid>
          </form>

        </AuthLayout>

    </>
  )
}
