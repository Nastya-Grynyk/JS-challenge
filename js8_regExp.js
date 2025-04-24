"use strict";

/* "Параноя"
В нас є масив обʼєктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
- одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
 */

// спочатку потренуємося писати регулярку і перевіряти методами тест та метч

/* let email = "test.test@gmail.com";
let regExp = /^([a-zA-Z0-9]+\.?[a-zA-Z0-9]+)@(gmail|yahoo)\.com/;
console.log("Адреса відповідає шаблону? - " + regExp.test(email))
let matching = email.match(regExp);
console.log("Збіги в рядку: " + matching) */

//кроки:
// визначити якому регулярному виразу має відповідати емейіл
// проходитися по елементам масиву - по обєктам
// в кожному обєкті шукати властивість емейл
// перевірити чи відповідає значення властивості шаблону - регулярці
// якщо адреса відповідає шаблону - додаємо її до нового масиву з дозволеними адресами
// результат: новий масив з елементами - валідні адреси

const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const trustedEmails = []; // новий масив, куди будемо записувати валідні емейли

arr.forEach(function (item) {
    const email = item.email;
    const regEmail = /^([a-zA-Z0-9]+\.?[a-zA-Z0-9]+)@(gmail|yahoo)\.com/;
    const isMatching = email.match(regEmail);
    const isTrusted = regEmail.test(email)
    console.log("Пошта " + email + " гідна довіри? - " + isTrusted);

    if (isMatching !== null) {
        trustedEmails.push(email);
    }
});
console.log(trustedEmails)

