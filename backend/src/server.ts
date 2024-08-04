import express from "express";
import cors from "cors";
import { sample_equipment } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/equipments", (req, res) => {
  res.send(sample_equipment);
});

app.get("/api/equipments/search/:term", (req, res) => {
  const term = req.params.term;
  const results = sample_equipment.filter((equipment) =>
    equipment.name.toLowerCase().includes(term.toLowerCase())
  );
  res.send(results);
});

app.get("/api/equipments/:id", (req, res) => {
  const id = req.params.id;
  const equipment = sample_equipment.find((equipment) => equipment.id === id);
  res.send(equipment);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
