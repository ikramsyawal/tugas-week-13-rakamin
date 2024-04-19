import instance from '../lib/axios';

export const login = async (params) => {
  const { email, password } = params;
  const response = await instance({
    method: 'POST',
    url: '/login',
    data: {
      email,
      password,
    },
  });

  const { data } = response;
  return data;
};

export const register = async (params) => {
  const { name, email, password } = params;
  try {
    const response = await instance({
      method: 'POST',
      url: '/register',
      data: {
        name,
        email,
        password,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
