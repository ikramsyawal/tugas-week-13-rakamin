import Navbar from './components/Navbar';
import Books from './pages/Books';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/books" element={<Books />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
