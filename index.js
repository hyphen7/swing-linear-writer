const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/api/v1/task1', (req, res) => {
    res.send("Run Task1");
});

app.listen(PORT, ()=>{
    console.log("Express is running.");
});