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
  - It helps us create one or more documents in to a collection.
  - Syntax: ModelName.create( {document} );
  - Syntax: ModelName.create( [{document}, {document}, {document}, ...] );
  - If we want to pass any options, first Paramter must be array only.
  - Syntax: ModelName.create( [{document}, {document}, {document}, ...], { options} );
  - Syntax: ModelName.create( [ {document} ], { options} );

## security

- **password**

  - One of the famous way is bcrypt package
  - It helps us to encrypt and decrypt passwords
  - The bcrypt package is a widely used password-hashing library in Node.js.
  - It helps you securely store passwords by hashing them using a one-way cryptographic function, making it hard for attackers to retrieve the original password, even if they get access to the database.
  - **🔒 Why use bcrypt?**
    - One-way hashing: You can't reverse a hash to get the original password.
    - Salting: It adds a random string (salt) to the password before hashing to prevent attacks using precomputed tables (like rainbow tables).
    - Adaptive: You can increase the computational complexity over time by increasing the number of salt rounds.
  - **How to use:**
    - Step 1 : install
    - Step 2: Hash the password at singup
    - Step 3: Compare the password at singin
  - [bcrypt Package Link](https://www.npmjs.com/package/bcrypt)
  - [bcrypt Online Generator](https://bcrypt-generator.com/)
  - Here's how to hash a password using `bcrypt` with salt:

    ```js
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        // Store hash in your password DB.
      });
    });
    ```

## Others

- gitkeep extension
- helps us to track all folders even empty folders

```

```
