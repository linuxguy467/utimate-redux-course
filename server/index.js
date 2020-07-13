const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const bugs = [
  { id: 1, description: "Bug 1", userId: 1, resolved: true },
  { id: 2, description: "Bug 2", userId: 1 },
  { id: 3, description: "Bug 3", userId: 2 },
  { id: 4, description: "Bug 4" }
];

app.get("/api/bugs", (req, res) => {
  res.json(bugs);
});

app.post("/api/bugs", (req, res) => {
  const bug = { id: Date.now(), resolved: false, ...req.body };
  bugs.push(bug);

  res.json(bug);
});

app.patch("/api/bugs/:id", (req, res) => {
  const index = bugs.findIndex(bug => bug.id === parseInt(req.params.id));
  const bug = bugs[index];
  if ("resolved" in req.body) bug.resolved = req.body.resolved;
  if ("userId" in req.body) bug.userId = req.body.userId;

  res.json(bug);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
