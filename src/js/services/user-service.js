const UrlBase = 'https://projeto-nuvem-back.onrender.com/users';

const userLogin = async (email, password) => {
    const user = await axios.post(`${UrlBase}/sign-in`, {
      email,
      password
    });

    if (!user) {
      throw new Error('Usuario ou senha invalida');
    }


    return 200
  };


const register = async (name, email, password) => {
    const user = await axios.post(`${UrlBase}/`, {
    name,
        email,
        password
});
return 200
};




export const userServices = {
    userLogin,
    register,
};
