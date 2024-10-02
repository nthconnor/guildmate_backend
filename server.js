import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import guildRoutes from "./routes/guildRoutes.js"
import connectToMongo from "./models/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes)
app.use('/api/guilds', guildRoutes)


connectToMongo();
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
