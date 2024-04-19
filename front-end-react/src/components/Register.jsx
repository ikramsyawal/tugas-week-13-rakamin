import { useState } from 'react';
import { register } from '../fetch/auth';
export default function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    await register({
      name: event.target.name.value,
      email: event.target.email.value,
      password,
    });
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="name" name="name" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {password !== confirmPassword && <p>The password does not match</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
