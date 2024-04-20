import instance from '../lib/axios';

export const getBooks = async () => {
  const response = await instance({
    method: 'GET',
    url: '/books',
  });
  const { data } = response;
  return data;
};

export const createBook = async (formData) => {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export const getBookById = async (id) => {
  try {
    const response = await instance.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export const editBook = async (id, title, author, publisher, year, pages) => {
  try {
    const response = await instance.put(`/books/${id}`, {
      title,
      author,
      publisher,
      year,
      pages,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};
