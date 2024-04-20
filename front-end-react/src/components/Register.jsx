import { useState } from 'react';
import { register } from '../fetch/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      await register(
        event.target.name.value,
        event.target.email.value,
        password,
      );
      navigate('/login');
      Swal.fire({
        icon: 'success',
        title: 'Register successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-center mt-4 p-2">
      <form onSubmit={handleSubmit} className="lg:w-1/4 xs:w-full">
        <label>Name:</label>
        <input
          type="name"
          name="name"
          placeholder="Enter your name"
          className="input input-bordered w-full my-2"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full my-2"
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full my-2"
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input input-bordered w-full my-2"
        />

        {password !== confirmPassword && <p>The password does not match</p>}

        <button type="submit" className="btn btn-accent text-secondary-content">
          Register
        </button>
      </form>
    </div>
  );
}
