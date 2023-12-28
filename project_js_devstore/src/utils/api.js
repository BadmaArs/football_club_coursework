import axios from "axios";

const params = {
    headers: {
        Authorization: 'bearer' + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(
            process.env.REACT_APP_DEV_URL + url, 
            params
        );
        console.log('Запрос успешно прошел')
        return data;
    } catch (error) {
        console.log('Сработал catch', error);
        return error;
    }
}
export const fetchNewUserApi = async (newUser) => {
    console.log(newUser)
    try {
        const {user} = await axios.post(
            process.env.REACT_APP_DEV_URL + '/api/auth/local/register', 
            newUser, 
            params
        )
        alert("Пользователь успешно зарегистрирован")
        console.log('запрос успешно обработан', user)
        return(user)
    }
    catch(error) {
        console.log('Регистрация не удалась', error)
    }
}