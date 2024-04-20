import { useState } from 'react';
import { createBook } from '../fetch/books';

export default function BookForm() {
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      alert('Please upload an image');
      return;
    }
    const formData = new FormData(e.target);

    try {
      await createBook(formData);
      e.target.reset();
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="title"
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
        </div>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="author"
            required
          />
        </div>
        <div>
          <label htmlFor="publisher">Publisher</label>
        </div>
        <div>
          <input
            type="text"
            name="publisher"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="publisher"
            required
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
        </div>
        <div>
          <input
            type="number"
            name="year"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="year"
            required
          />
        </div>
        <div>
          <label htmlFor="pages">Pages</label>
        </div>
        <div>
          <input
            type="number"
            name="pages"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="pages"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
        </div>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => {
            const file2 = e.target.files[0];
            setFile(URL.createObjectURL(file2));
          }}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
