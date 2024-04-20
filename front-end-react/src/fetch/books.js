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
