import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, editBook } from '../fetch/books';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Edit() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue =
      name === 'year' || name === 'pages' ? parseInt(value, 10) : value;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: newValue,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editBook(
        id,
        book.title,
        book.author,
        book.publisher,
        book.year,
        book.pages,
      );
      Swal.fire({
        icon: 'success',
        title: 'Book updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchBook() {
      try {
        const data = await getBookById(id);
        setBook(data.book);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <>
      {book && (
        <div className="p-2">
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={book.title}
              className="input input-bordered w-full my-2"
              onChange={handleChange}
            />
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={book.author}
              className="input input-bordered w-full my-2"
              onChange={handleChange}
            />
            <label>Publisher:</label>
            <input
              type="text"
              name="publisher"
              value={book.publisher}
              className="input input-bordered w-full my-2"
              onChange={handleChange}
            />
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={book.year}
              className="input input-bordered w-full my-2"
              onChange={handleChange}
            />
            <label>Pages:</label>
            <input
              type="number"
              name="pages"
              value={book.pages}
              className="input input-bordered w-full my-2"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-accent text-secondary-content"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
}
