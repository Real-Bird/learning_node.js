import express from "express";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("index", { title: "Express" });
// });

router.get("/", (req, res, next) => {
  res.locals.title = "Express";
  res.render("index");
});

export default router;
