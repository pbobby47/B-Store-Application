const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownerRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();

const db = require("./config/mongooseConnection");
// console.log(db);

app.use(express.json());
// This middleware parses incoming JSON payloads (i.e., Content-Type: application/json) and makes the parsed data available on req.body
app.use(express.urlencoded({ extended: true }));
// This middleware parses URL-encoded data sent through HTML forms and makes it available on req.body.
// extended: false → Parses simple key-value pairs (querystring library).
// extended: true → Parses rich objects and arrays (qs library).
// If form sends
// user[name]=bobby&user[age]=25
// With extended: false → ❌ Doesn't parse nested data well.
// With extended: true → ✅ req.body.user = { name: 'bobby', age: '25' }
app.use(cookieParser());
// It parses cookies from the Cookie header in incoming requests and makes them available as a JavaScript object on req.cookies.
app.use(express.static(path.join(__dirname, "public")));
// This middleware serves static files (like HTML, CSS, JS, images) from a specific folder—here, it's the public folder.
// 🔍 Breakdown:
// express.static(...) → Serves static assets.
// path.join(__dirname, "public") → Resolves the absolute path to the public directory.
// __dirname → The current directory of the file.

app.set("view engine", "ejs");
// This line tells your Express.js app to use EJS (Embedded JavaScript) as the template engine for rendering dynamic HTML pages.
// EJS stands for Embedded JavaScript. It allows you to write HTML pages that include dynamic content using JavaScript-like syntax.

// ROUTES Mounting
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello Bobby");
});

app.listen(8000, () => {
  console.log("server has started");
});
