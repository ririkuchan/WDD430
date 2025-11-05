import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

// ここを追加
app.use(expressLayouts);
app.set("layout", "./layouts/main");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "My App" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
