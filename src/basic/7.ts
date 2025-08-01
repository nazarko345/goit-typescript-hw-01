// Завдання 7 
// Виконуйте це завдання у файлі src/basic/7.ts.

// Створіть новий тип даних, який підходить для цих двох об'єктів.
// У вас є два об'єкти:

interface Pages {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {
    createAt: Date,
    updateAt: Date,
  },
};

const page1: Pages = { 
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}