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
      <div className="navbar bg-base-100 flex justify-between">
        <div>
          <Link to="/" className="btn btn-ghost text-xl">
            Books
          </Link>
          <Link to="/create" className="btn btn-ghost text-xl">
            Create
          </Link>
        </div>
        <div>
          <Link to="/register" className="btn btn-ghost text-xl">
            Register
          </Link>
          {isLogin ? (
            <Link className="btn btn-ghost text-xl" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-ghost text-xl">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
