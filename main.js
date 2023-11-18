try {
  let number = prompt("Введіть будь-яке число:");

  if (number === null) {
    throw new Error("Ви відмінили введення.");
  }

  number = Number(number);

  if (isNaN(number)) {
    throw new Error("Введено не число.");
  }

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("Non Divisible");
  }
} catch (error) {
  console.error(error.message);
}
