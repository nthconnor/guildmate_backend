import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import connectToMongo from "./models/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/auth', authRoutes)


connectToMongo();
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
