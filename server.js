const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let userGoal = [];

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Goals for the week:</h2>
          <h3>${userGoal.join(", ")}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/store-goal", (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal.push(enteredGoal);
  res.redirect("/");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server's up! Running at port #3000");
});
