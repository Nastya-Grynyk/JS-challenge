
var measureUnit = "год" //змінна рядок, одиниці вимірювання
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
}
