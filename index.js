import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

import userRoutes from './routes/users.js'



app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/user', userRoutes);


const CONNECTION_URL="mongodb+srv://TrusteeApp:TrusteeApp@trusteeapp.7cbppj5.mongodb.net/"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message))



