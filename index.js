// const connectToMongo= require("./db");
// const express = require('express')
// connectToMongo();
// const app = express()
// const port = 8080
// app.use(express.json())

// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// connectToMongo();
// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ Allow CORS for GitHub Pages
// app.use(cors({
//   origin: "https://ahsanlaeeq.github.io",
//   methods: "GET,POST,PUT,DELETE",
//   allowedHeaders: "Content-Type,Authorization"
// }));

// app.use(express.json());

// // ✅ Ensure correct route paths
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}`);
// });







// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// connectToMongo();
// const app = express();
// const port = process.env.PORT || 8080;  // ✅ Use Railway's assigned port

// // ✅ Enable CORS for GitHub Pages
// app.use(cors({
//   origin: "https://ahsanlaeeq.github.io",
//   methods: "GET,POST,PUT,DELETE",
//   allowedHeaders: "Content-Type,Authorization"
// }));

// app.use(express.json());

// // ✅ Ensure correct route paths
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}`);
// });


const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = process.env.PORT || 8080;  // ✅ Use Railway's assigned port

// ✅ Enable CORS for GitHub Pages
app.use(cors({
  origin: "https://ahsanlaeeq.github.io",  // ✅ Set your frontend domain
  methods: "GET,POST,PUT,DELETE",  // ✅ Allow methods as per your requirement
  allowedHeaders: "Content-Type,Authorization,auth-token"  // ✅ Added 'auth-token' to allowed headers
}));

app.use(express.json());

// ✅ Ensure correct route paths
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

