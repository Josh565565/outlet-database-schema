const express = require('express');
// const cors = require('cors');
const db = require('./models');

const app = express();

// var corsOptions = {
//     origin: "http://localhost:8080"
// };

// Middlewares
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing API
app.get('/', (req, res) => {
    res.json({ message: "Hello World!" });
});

const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to sync database:', err);
});
