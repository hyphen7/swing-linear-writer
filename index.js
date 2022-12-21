const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;
const task1 = require('./task1.js');

app.use(Express.json());

app.get('/', (req, res, next) => {
    res.send("Hello, world!");
});

app.post('/api/v1/task1', (req, res, next) => {
    console.log("Start Task1");
    task1().then(() => {
        console.log("End Task1");
        res.json({ message: "Exec Task1" });
    }).catch(error => {
        next(error);
    });
});

app.use((req, res, next) => {
    console.log("Not Found");
    res.status(404).json({ message: "Not Found"});
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log("Express is running.");
});