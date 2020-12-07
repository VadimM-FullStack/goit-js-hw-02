const LOG_NOT_VALID = "Ошибка! Логин должен быть от 4 до 16 символов";
const LOG_NOT_UNIQUE = "Такой логин уже используется!";
const LOG_ADDED = "Логин успешно добавлен!";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length > 3 && login.length < 17;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return LOG_NOT_VALID;
  }

  if (isLoginUnique(allLogins, login)) {
    return LOG_NOT_UNIQUE;
  }

  allLogins.push(login);
  return LOG_ADDED;
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
