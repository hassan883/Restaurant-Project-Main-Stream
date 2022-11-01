const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const connectDB = require('./database/db');


//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);


app.get('/', (req, res)=>{
    res.send("Insided the Server");
})


connectDB();
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Listening on Port : ${port}`);
})
