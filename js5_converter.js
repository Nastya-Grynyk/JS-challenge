//перший варіант

/* var measureUnit = "год" //змінна рядок, одиниці вимірювання
var value = 17; //змінна число, значення

switch (measureUnit) {
    case "км": //значення з яким порівнюється наше messureUnit
        var result = value * 1000
        console.log(value + ' '+ measureUnit + " це " + result + " м"); //робюимо ось це
        break;//припиняється дія світча
    case "год":
        var result = value * 60
        console.log(value + ' '+ measureUnit + " це " + result + " хв"); //робюимо ось це
        break;
    case "кг":
        var result = value * 1000
        console.log(value + ' '+ measureUnit + " це " + result + " г"); //робюимо ось це
        break;
    default: //якщо не зустрілося потрібного, тоді по дефолту виконається
        console.log('упс...такої величини немає в переліку');
} */


//виправлено після коментарів: 
//1. замість var -> let, 
//2. result - оголошена один раз перед блоком свіч-кейс, в кейсах присвоюється значення - розрахунок
//3. розрахунок в кожному кейсі, консоль один з умовою
let measureUnit = "год" //змінна рядок, одиниці вимірювання
let value = 0.987; //змінна число, значення
let result
let smallUnit
//ще ідея додати перевірку що введене значення value - числове
if (isNaN(value) || typeof value !== "number" || value === "string") {
    console.log("Значення має бути числом");
}
else {
    switch (measureUnit) {
        case "км": //значення з яким порівнюється наше messureUnit
            result = value * 1000
            smallUnit = "м"
            break;
        case "год":
            result = value * 60
            smallUnit = "хв"
            break;
        case "кг":
            result = value * 1000
            smallUnit = "г"
            break;
        //якщо буде введене невалідне значення одиниці виміру виведеться цей консоль лог
        default:
            console.log('упс...такої величини немає в переліку');
    }
    //щоб уникнути будлювання консоль лога, у випадку невалідного значення
    if (result !== undefined && smallUnit !== undefined) {
        console.log(value + ' ' + measureUnit + " це " + result + ' ' + smallUnit);
    }
}