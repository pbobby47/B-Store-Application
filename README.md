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
- **app.set("view engine", "ejs");**
  - This line tells your Express.js app to use EJS (Embedded JavaScript) as the template engine for rendering dynamic HTML pages.
  - EJS stands for Embedded JavaScript. It allows you to write HTML pages that include dynamic content using JavaScript-like syntax.

## Mongoose

- **MyModel.create()**
- It is an equivalent to _new MyModel().save()_

## security

- **password**

  - One of the famous way is bcrypt package
  - It helps us to encrypt and decrypt passwords
  - The bcrypt package is a widely used password-hashing library in Node.js.
  - It helps you securely store passwords by hashing them using a one-way cryptographic function, making it hard for attackers to retrieve the original password, even if they get access to the database.
  - 🔒 Why use bcrypt?
    - One-way hashing: You can't reverse a hash to get the original password.
    - Salting: It adds a random string (salt) to the password before hashing to prevent attacks using precomputed tables (like rainbow tables).
    - Adaptive: You can increase the computational complexity over time by increasing the number of salt rounds.
  - How to use:

        - Step 1 : install Package:
          - Install the package using `npm install bcrypt`.
        - Step 2: Hash the password at Sign Up
          - <pre> <code>```js const bcrypt = require('bcrypt'); const password = "mypassword123"; const saltRounds = 10; bcrypt.hash(password, saltRounds, function(err, hash) { if (err) throw err; console.log("Hashed Password:", hash); }); ```</code> </pre>
        - Step 3: Comparing the Password at Sign in
          - <pre><code>```js const inputPassword = "mySecret123";const storedHash = "$2b$10$K9dWgNL0rT1jKQO..."; // from DB

bcrypt.compare(inputPassword, storedHash, (err, result) => {
if (err) throw err;
if (result) {
console.log("Password match ✅");
} else {
console.log("Invalid password ❌");
}
});

```</code></pre>

 - [bcrypt Package Link](https://www.npmjs.com/package/bcrypt)
 - [bcrypt Online Generator](https://bcrypt-generator.com/)

## Others

- gitkeep extension
 - helps us to track all folders even empty folders
```
