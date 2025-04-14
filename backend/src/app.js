import express from "express";
import cors from "cors";
import helloRoutes from "./routes/helloRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();

// Middleware setup
app.use(cors()); // allows requests from any origin
app.use(express.json());

// Routes setup
app.use("/api/hello", helloRoutes);
app.use("/api/account", accountRoutes);

export default app;
