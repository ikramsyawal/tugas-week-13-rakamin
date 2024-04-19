export default function BookForm() {
  return (
    <div className="p-2">
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="author"
          />
        </div>
        <div>
          <label htmlFor="publisher">Publisher</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="publisher"
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="year"
          />
        </div>
        <div>
          <label htmlFor="pages">Pages</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full my-2"
            id="pages"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
        </div>
        <input type="file" id="image" />
      </form>
    </div>
  );
}
