import { useContext, useState } from 'react';
import authContext from '../context/auth/authContext';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = data;
  const { registerUser, successMessage, alert } = useContext(authContext);
  console.log('Aleeert =>', alert)
  const handleOnChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    registerUser(data);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      {successMessage ? <div style={{ backgroundColor: 'green', color: 'white' }}>{successMessage}</div> : null}
      {alert && <div style={{ backgroundColor: 'red', color: 'white' }}>{alert}</div>}
      <input type="text" name="name" value={name} onChange={handleOnChange} />
      <input type="email" name="email" value={email} onChange={handleOnChange} />
      <input type="password" name="password" value={password} onChange={handleOnChange} />
      <input type="submit" value="Enviar" />
    </form>
  );
}
 
export default Register;