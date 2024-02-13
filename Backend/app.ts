const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Elanco Activity Monitor API' });
});

require('./Routes/test')(app);

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});