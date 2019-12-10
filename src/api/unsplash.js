//configuration of axion so that we can access the api
import axios from 'axios';


export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d55ddd052d0efdc689a4a847bbad89c4f247d6940a1c5d26eb2d1a0fcebab9ea'

    }

});