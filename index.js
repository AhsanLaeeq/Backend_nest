// const connectToMongo= require("./db");
// const express = require('express')
// connectToMongo();
// const app = express()
// const port = 5000
// app.use(express.json())

// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

// ✅ Enable CORS for your frontend
app.use(cors({
  origin: "https://ahsanlaeeq.github.io", // Replace with your frontend URL
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
