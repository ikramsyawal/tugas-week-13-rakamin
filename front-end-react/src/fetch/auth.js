import instance from '../lib/axios';

export const login = async (email, password) => {
  try {
    const response = await instance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await instance.post('/register', {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};
