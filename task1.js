const axios = require('axios');

module.exports = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const result = await axios.get('https://pink-healthy-cocoon.cyclic.app/');
    console.log(result.data);
}