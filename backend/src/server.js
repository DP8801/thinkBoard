import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
    cors({
        origin: "http://localhost:5173", 
    })
)
app.use(express.json())
app.use(ratelimiter)
// our custom middleware
// app.use((req, res, next) => {
//     console.log(`Request method ${req.method} and uri is ${req.url}`);
//     next();
// })
// app 

app.use("/api/notes", notesRoutes)

// GET /api/notes

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server test: ", PORT);
    });
})

