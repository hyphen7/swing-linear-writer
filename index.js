const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, ()=>{
    console.log("Express is running.");
});