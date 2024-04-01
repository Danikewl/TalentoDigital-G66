import chalk from "chalk";

// Combine styled and normal strings
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
console.log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// ES2015 template literal
console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#DEADED").bold("Bold gray!"));
