import { useNavigate } from 'react-router-dom';
import { login } from '../fetch/auth';

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login(e.target.email.value, e.target.password.value);
      localStorage.setItem('token', token.token);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
