import Navbar from './components/Navbar';
import Books from './pages/Books';
import Register from './components/Register';
import BookForm from './components/BookForm';
import Login from './components/Login';
import Edit from './pages/Edit';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Books />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/create" element={<BookForm />} />
          <Route path="/books/:id" element={<Edit />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
