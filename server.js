const express = require("express");
// replaces: const express = require('express');

let app = express();
// initalize app veriable w/ express

app.get("/", (req, res) => res.send("API Running"));
// create single endpoint to test: Send data to browser

const PORT = process.env.PORT || 5000;
// process.env.PORT preps for Heroku deployment
// || 5000 = local port (default to)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// listen on 'PORT'; when connected: display this...

// ALL OF THE ABOVE COULD BE RUN WITH...
//    node server.js
//    but instead we'll create scripts... npm scripts
//        in package.json
//

//  ...................................................................

// PRACTICE NODE SERVER DEVELOPMENT
//    From: https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

// app.post("/api/world", (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
