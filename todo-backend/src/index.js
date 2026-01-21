import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
