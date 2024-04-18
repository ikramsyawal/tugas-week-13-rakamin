import bookData from '../dummy-data/bookData';

function Books() {
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
          </tr>
        </thead>
        <tbody>
          {bookData.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>
                <img
                  className="h-20"
                  src="https://m.media-amazon.com/images/I/61+UnPWXaXL._AC_SX679_.jpg"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
