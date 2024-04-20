import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLogin(false);
    window.location.reload();
    navigate('/');
  }

  return (
    <>
      <div className="navbar bg-primary flex justify-between">
        <div>
          <Link to="/" className="btn btn-ghost text-xl text-secondary-content">
            Books
          </Link>
          <Link
            to="/create"
            className="btn btn-ghost text-xl text-secondary-content"
          >
            Create
          </Link>
        </div>
        <div>
          <Link
            to="/register"
            className="btn btn-ghost text-xl text-secondary-content"
          >
            Register
          </Link>
          {isLogin ? (
            <Link
              className="btn btn-ghost text-xl text-secondary-content"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-ghost text-xl text-secondary-content"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
