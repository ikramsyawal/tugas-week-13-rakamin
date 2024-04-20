import { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../fetch/books';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function DeleteButton(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      type="button"
      className="btn btn-error text-secondary-content"
      onClick={onClick}
    >
      Delete
    </button>
  );
}

function UpdateButton(props) {
  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={`/books/${props.id}`}
      type="button"
      className="btn btn-accent text-secondary-content"
    >
      Update
    </Link>
  );
}

function Books() {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  async function handleDelete(bookId) {
    try {
      await deleteBook(bookId);
      navigate('/');
      Swal.fire({
        icon: 'success',
        title: 'Book deleted successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data.books.sort((a, b) => b.id - a.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table-zebra table-lg w-full">
        <thead>
          <tr>
            <th className="text-left">No</th>
            <th className="text-left">Title</th>
            <th className="text-left">Author</th>
            <th className="text-left">Publisher</th>
            <th className="text-left">Year</th>
            <th className="text-left">Pages</th>
            <th className="text-left">Image</th>
            {token && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="text-left">{index + 1}</td>
              <td className="text-left">{book.title}</td>
              <td className="text-left">{book.author}</td>
              <td className="text-left">{book.publisher}</td>
              <td className="text-left">{book.year}</td>
              <td className="text-left">{book.pages}</td>
              <td>
                <div className="h-10">
                  {book.image && (
                    <img
                      src={`http://localhost:8000/${book.image}`}
                      style={{ maxHeight: '100%', width: 'auto' }}
                    />
                  )}
                </div>
              </td>
              {token && (
                <td className="flex justify-center gap-2">
                  <UpdateButton id={book.id} />
                  <DeleteButton onClick={() => handleDelete(book.id)} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
