import axios from 'axios';


const instance = axios.create ({
    baseURL : 'https://my-burger-app-16dc3.firebaseio.com/'
    
});


export default instance;