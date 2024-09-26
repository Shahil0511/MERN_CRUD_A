import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import todoRoutes from "./routes/TodoRoutes.js";
import cors from "cors";


const app = express();
app.use(express.json());


app.use(cors());
const port = process.env.PORT || 8000;
dotenv.config();
connectDB();

app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`server is Running on port ${port}`);
});
