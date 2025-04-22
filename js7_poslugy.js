// Задача 2: Сума вартості послуг
//Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість, вигляду:
/* var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
}; */
//"Послуги" можуть додаватися по ходу роботи:
//services['Розбити скло'] = "200 грн";

//Умови виконання ДЗ
//створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
//створити метод minPrice() - який повертає мінімальний price
//створити метод maxPrice() - який повертає максимальний price

const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        let sum = 0; //змінна, яка накопичує суму
        for (let key in this) { // проходимося по кожній властивості в цьому обєкті
            if (typeof this[key] === 'string') { //якщо значення властивості - рядок, тоді
                let number = parseInt(this[key]) // перетворюємо його в чило, залишаючи числову частину
                sum += number; // додаємо значення до суми починаючи з першої властивості
                //console.log (sum) // це щоб подивитися кожну ітерацію
            }
        }
         return sum; // повертаємо суму всіх послуг, коли закінчилися всі властивості - остаточна сума
    },

    minPrice: function () {
        let min = Infinity; //ніайбільше значення, щоб потім порівнювати з мін
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let number = parseInt(this[key])
                 if (number < min) {
                min = number
               }
             }
           }
         return min;        
    },
    maxPrice: function () {
        let max = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let number = parseInt(this[key]);
                //console.log(number);
                 if (number > max) {
                max = number
               }
             }
           }
         return max;        
    },
}

services['Розбити скло'] = "200 грн";
services['Укладка'] = "40 грн";

console.log("Загальна вартість наданих послуг: " + services.price() + " грн")
console.log("Мінімальна ціна: " + services.minPrice() + " грн")
console.log("Максимальна ціна: " + services.maxPrice() + " грн")

//Не змогла придумати як використати методи Макс.мін макс - бо поки не зрозуміла про масиви.
// ще один варіант, після того як трохи дізналася про масиви:
// виділити з обєкта числові значення цін і зібрати їх в новий масив, по якому  потім проходитися методами Мін, Макс

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let number = parseInt(this[key]);
                sum += number;
            }
        }
        return sum;
    },

    minPrice: function () {
        let prices = []; //новий масивчик з цінами
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let number = parseInt(this[key]);
                prices.push(number);
            }
        }
        return Math.min(...prices); // знаходимо найменше число серед зібраних цін
    },

    maxPrice: function () {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let number = parseInt(this[key]);
                prices.push(number);
            }
        }
        return Math.max(...prices); // знаходимо найбільше число серед зібраних цін
    }
};

// Додаємо додаткові послуги
services["Розбити скло"] = "200 грн";
services["Укладка"] = "40 грн";

// Виводимо
console.log("Загальна вартість: " + services.price() + " грн");
console.log("Найменша ціна: " + services.minPrice() + " грн");
console.log("Найвища ціна: " + services.maxPrice() + " грн");


