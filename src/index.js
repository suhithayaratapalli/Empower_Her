import express from "express";
import todoRouter from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// App-level logging middleware
app.use(loggerMiddleware);

// Routes
app.use("/todos", todoRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
