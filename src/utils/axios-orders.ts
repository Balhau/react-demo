import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-af432.firebaseio.com/'
})

export default instance;