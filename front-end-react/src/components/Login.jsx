import { useNavigate } from 'react-router-dom';
import { login } from '../fetch/auth';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="p-2 flex justify-center mt-4">
      <form onSubmit={handleLogin} className="lg:w-1/4 xs:w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full my-2"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full my-2"
          required
        />
        <button type="submit" className="btn btn-accent text-secondary-content">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
