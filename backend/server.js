import app from "./src/app.js";
import dotenv from "dotenv";
import prisma from "./prisma/client.js";

dotenv.config(); // loads .env variables into process.env

const PORT = process.env.PORT || 3001;

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://localhost:${PORT}/api/hello)`);
});

// Gracefully handle server shutdown
process.on("SIGINT", async () => {
  console.log("Closing Prisma connection...");
  await prisma.$disconnect(); // Disconnect Prisma
  server.close(() => {
    console.log("Server closed gracefully");
    process.exit(0); // Exit the process after server is closed
  });
});
