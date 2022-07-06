const axios = require('axios').default;

async function signin() {
    try {
        const response = await axios.get('/sessions')
        return response
    } catch (error) {
        return {status: false, message: error.message};
    }
}

async function createUser() {
    try {
        const response = await axios.get('/fetchData')
        return response
    } catch (error) {
        return {status: false, message: error.message};
    }
}
