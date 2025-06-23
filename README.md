# B Store Application

## Middlewares

- **app.use(express.urlencoded({ extended: true }));**
  - This middleware parses URL-encoded data sent through HTML forms and makes it available on req.body.
  - extended: false → Parses simple key-value pairs (querystring library).
  - extended: true → Parses rich objects and arrays (qs library).
  - If form sends
  - user[name]=bobby&user[age]=25
  - With extended: false → ❌ Doesn't parse nested data well.
  - With extended: true → ✅ req.body.user = { name: 'bobby', age: '25' }
- **app.use(cookieParser());**
  - It parses cookies from the Cookie header in incoming requests and makes them available as a JavaScript object on req.cookies.
- **app.use(express.json());**
  - This middleware parses incoming JSON payloads (i.e., Content-Type: application/json) and makes the parsed data available on req.body
- **app.use(express.static(path.join(\_\_dirname, "public")));**
  - This middleware serves static files (like HTML, CSS, JS, images) from a specific folder—here, it's the public folder.
    - 🔍 Breakdown:
  - express.static(...) → Serves static assets.
  - path.join(\_\_dirname, "public") → Resolves the absolute path to the public directory.
  - \_\_dirname → The current directory of the file.

## Others

- gitkeep extension
  - helps us to track all folders even empty folders
