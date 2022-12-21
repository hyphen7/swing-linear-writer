const axios = require('axios');

module.exports = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Task1 Execute");
}