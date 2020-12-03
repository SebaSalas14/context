import React, { useReducer } from 'react';
//Importar context y reducer
import AuthContext from './authContext';
import authReducer from './authReducer';
//Traer utilidades: peticiones al back y autenticación de token
import clientAxios from '../../config/axios';
import authToken from '../../config/token';

import { 
  SUCCESS_REGISTER,
  ERROR_REGISTER
} from '../../types';

const AuthState = ({ children }) => {

  const INITIAL_STATE = {
    token: localStorage.getItem('token') || null,
    user: {},
    alert: '',
    successMessage: '',
    loading: true,
    auth: false
  }

  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  
  const registerUser = async data => {
    try {
      const response = await clientAxios.post('/api/users', data);
      console.log(response);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data
      })
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR_REGISTER,
        payload: error.response.data
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      token: state.token,
      auth: state.auth,
      alert: state.alert,
      loading: state.loading,
      successMessage: state.successMessage,
      user: state.user,
      registerUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export default AuthState;