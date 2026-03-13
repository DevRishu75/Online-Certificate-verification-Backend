import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import courseRoutes from "./routes/course.routes.js";
import certificateRoutes from "./routes/certificate.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// serve frontend files
app.use(express.static("public"));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/certificates", certificateRoutes);

// root route (important for Render health check)
app.get("/", (req, res) => {
  res.send("Server is running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.error("MongoDB connection error ❌", err));

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
app.get("/", (req,res)=>{
res.send("API Running");
});