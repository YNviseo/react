
const axios = require('axios');

module.exports = {
    getUser : async function () {
       return await  axios.get('https://randomuser.me/api');
    }
}