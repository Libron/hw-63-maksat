import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://webinar32-340c9.firebaseio.com/'
});

export default instance;