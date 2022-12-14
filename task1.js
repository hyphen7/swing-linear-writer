const axios = require('axios');

module.exports = async () => {
    const result = await axios.get('https://pink-healthy-cocoon.cyclic.app/');
    console.log(result.data);
}