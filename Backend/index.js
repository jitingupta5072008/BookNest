import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./util/db.js";
import bookRoutes from './routes/book.route.js'
dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman or server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// Example route
app.use("/api/v1",bookRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Connect to MongoDB (optional for now)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
