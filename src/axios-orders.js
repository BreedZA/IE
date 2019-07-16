import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-project-3b490.firebaseio.com/'
});

export default instance;
