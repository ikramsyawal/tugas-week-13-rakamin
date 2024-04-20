import { useState, useEffect } from 'react';
import { getBooks } from '../fetch/books';

function DeleteButton() {
  return <button type="button">Delete</button>;
}

function UpdateButton() {
  return <button type="button">Update</button>;
}

function Books() {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('token');

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data.books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-x">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Image</th>
            {token && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
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
                <td className="flex gap-2">
                  <UpdateButton />
                  <DeleteButton />
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
