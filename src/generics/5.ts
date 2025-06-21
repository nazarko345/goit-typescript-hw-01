// Завдання 5
// Виконуйте це завдання у файлі src/generics/5.ts.
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. 
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type useKeys = "admin" | "editor" | "guest";

type diren = Record<useKeys, string>;

const RoleDescription: diren = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};