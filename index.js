import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 5500;


app.get('/', (req, res) => {
    return res.json("Hello from the action service !");
});

app.listen(PORT, ()=> {
    console.log("Action is service is running on port: ", PORT);
});