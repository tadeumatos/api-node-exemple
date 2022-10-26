import express from "express";
import carsRouter from "./routes/cars.js";
import { promises as fs } from "fs";

const app = express();
global.data = [];

const { readFile, writeFile } = fs;

app.use(express.json());
app.use(carsRouter);

app.listen(3000, async () => {
  try {
    global.data = JSON.parse(await readFile("src/data/car-list.json"));
    console.log("Server started!!");
  } catch (error) {
    console.log(error);
  }
});
