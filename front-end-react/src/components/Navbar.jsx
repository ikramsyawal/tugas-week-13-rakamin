import { Link } from 'react-router-dom';
import Login from './Login';

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between">
        <div>
          <Link to="/books" className="btn btn-ghost text-xl">
            Books
          </Link>
          <Link to="/create" className="btn btn-ghost text-xl">
            Create
          </Link>
        </div>

        <Login />
      </div>
    </>
  );
}
