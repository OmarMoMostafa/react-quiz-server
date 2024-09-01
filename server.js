const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Endpoint to serve the questions.json file
app.get("/questions", (req, res) => {
  const questionsFilePath = path.join(__dirname, "questions.json");
  fs.readFile(questionsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Unable to read questions.json" });
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
