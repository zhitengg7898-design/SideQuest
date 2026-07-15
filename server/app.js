import express from "express";

import { getDatabase } from "./config/database.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/api/health", (request, response) => {
  response.json({
    status: "ok",
    message: "SideQuest API is running.",
  });
});

app.get("/api/health/database", async (request, response, next) => {
  try {
    const database = getDatabase();

    await database.command({ ping: 1 });

    response.json({
      status: "ok",
      message: "SideQuest is connected to MongoDB.",
      database: database.databaseName,
    });
  } catch (error) {
    next(error);
  }
});

app.use((error, request, response, next) => {
  console.error(error);

  response.status(500).json({
    status: "error",
    message: "An unexpected server error occurred.",
  });
});

export default app;