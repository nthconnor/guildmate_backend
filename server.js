import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// test
app.get("/", (req, res) => {
    res.send("test route");
})

// middleware
app.use('/api/auth', authRoutes)



app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))