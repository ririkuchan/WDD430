import express from "express";
const app = express();

// Render とローカルの両方で動くようにする
const PORT = process.env.PORT || 3000;

// EJSを使う設定
app.set("view engine", "ejs");
app.set("views", "./views");

// publicフォルダを静的ファイル(CSS, 画像など)として使えるようにする
app.use(express.static("public"));

// ルート "/" にアクセスしたときホームページを返す
app.get("/", (req, res) => {
  res.render("index", { title: "My App" });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
