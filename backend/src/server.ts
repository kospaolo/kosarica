import express from "express";
import cors from "cors";
import { sample_equipment, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use(express.json());

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

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    res.status(401).send({ message: "Invalid email or password" });
    return;
  }
  res.send(generateToken(user));
});

const generateToken = (user: any) => {
  const token = jwt.sign(
    { id: user.id, email: user.email, isAdmin: user.isAdmin },
    "secretkey",
    { expiresIn: "1h" }
  );
  user.token = token;
  return user;
};

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
