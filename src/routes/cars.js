import express from "express";
import _ from "lodash";

const routes = express.Router();

routes.get("/maismodelos", (req, res) => {
  const result = global.data.map((item) => {
    return { brand: item.brand, count: item.models.length };
  });

  const orderly = result.sort(function (a, b) {
    return b.count - a.count;
  });

  res.status(200).send(orderly[0]);
  res.end();
});

routes.get("/menosmodelos", (req, res) => {
  const result = global.data.map((item) => {
    return { brand: item.brand, count: item.models.length };
  });

  const orderly = result.sort(function (a, b) {
    return a.count - b.count;
  });

  res.status(200).send(orderly[0]);
  res.end();
});

routes.get("/maismodelos/:items", (req, res) => {
  const items = parseInt(req.params.items);
  const result = global.data.map((item) => {
    return { brand: item.brand, count: item.models.length };
  });

  const orderly = result.sort(function (a, b) {
    return b.count - a.count;
  });

  res.status(200).send(_.take(orderly, items));
  res.end();
});

routes.get("/menosmodelos/:items", (req, res) => {
  const items = parseInt(req.params.items);

  const result = global.data.map((item) => {
    return { brand: item.brand, count: item.models.length };
  });

  const orderly = result.sort(function (a, b) {
    return a.count - b.count;
  });

  res.status(200).send(_.take(orderly, items));
  res.end();
});

routes.get("/retornamarca/:brand", (req, res) => {
  const brand = req.params.brand;

  const result = global.data.filter((element) => {
    return element.brand.toUpperCase() === brand.toUpperCase();
  });

  res.status(200).send(result);
  res.end();
});

routes.post("/retornamarca", (req, res) => {
  const brand = req.body.brand;

  const result = global.data.filter((element) => {
    return element.brand.toUpperCase() === brand.toUpperCase();
  });

  res.status(200).send(result);
  res.end();
});

export default routes;
