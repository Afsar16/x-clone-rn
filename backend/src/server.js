import express from 'express'; 
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express(); 

connectDB(); // Connect to the database 

app.get("/", (req, res) => {
    res.send("Welcome to the X Clone API");
});

app.listen(ENV.PORT, () => {    
    console.log('Server is running on PORT:', ENV.PORT);  
}); 

