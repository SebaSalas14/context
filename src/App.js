import AuthState from './context/auth/authState';
import Register from './components/Register';

function App() {
  return (
    <>
      <AuthState>
        <Register />
      </AuthState>
      <Login />
    </>
  );
}

export default App;
