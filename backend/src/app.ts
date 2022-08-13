import express from "express";

const app = express();
const PORT = 3001;
const HOST = "0.0.0.0";

app.use(express.json());

app.listen(PORT, HOST, () => {
  console.log(`running at ${HOST}:${PORT}`);
});
