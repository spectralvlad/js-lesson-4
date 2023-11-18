try {
  let userInput = prompt("Введіть будь-яке значення:");

  if (userInput === null) {
    throw new Error("Ви відмінили введення.");
  }

  userInput = userInput.toLowerCase();

  if (!isNaN(userInput)) {
    console.log("You entered a number");
  } else if (userInput === "true" || userInput === "false") {
    console.log("You entered a boolean");
  } else if (typeof userInput === "string") {
    console.log("You entered a string");
  } else {
    console.log("You entered a complex data");
  }
} catch (error) {
  console.error(error.message);
}
