const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      name: "Side",
      type: "list",
      choices: [
        {
          name: "Attack",
          value: "attack",
        },
        {
          name: "Defense",
          value: "defense",
        },
      ],
    },
  ])
  .then((answers) => {
    const ops = JSON.parse(fs.readFileSync("data/operators.json"));
    const { defenders, attackers } = ops;

    console.log(op);
  });
