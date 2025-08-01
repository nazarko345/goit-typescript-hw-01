// Завдання 4
// Виконуйте це завдання у файлі src/basic/4.ts.
// У вас є такі функції JavaScript:

// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }

// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export {};
