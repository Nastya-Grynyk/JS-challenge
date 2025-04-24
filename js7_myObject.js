//Задача 1
//Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
//Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
// Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
//Наприклад так:
//obj.getInfo(); // Правильна інформація про об'єкт
//obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
//obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

//ну погналі....

let recipe = { // створила об'єкт (рецепт) з початковими властивостями
    title: "Best Brownie Ever", // властивість: тип стрінг
    time: 20, // властивість: тип намбер
    temperature: 180, // властивість: тип намбер
    isSimple: true, // властивість: тип булеан, натхнення після фрі дітейлс :)
    // Метод для виведення властивостей об'єкта
    getInfo: function() { //створення функції  - методу отримання інфо по обєкту
        for (let key in this) {
        if (typeof this[key] !== 'function')//цикл фор перебирає всі key, тобто назви властивостей в контексті обєкта recipe (без функцій)
            console.log(key + " : " + this[key])// і виводить назву властивості і значення цієї властивості через :
        }
}
};

console.log("----- Introduction -----");
recipe.getInfo(); // Виводимо властивості об'єкта, звертаючись до методу

// Додаємо нову властивість до об'єкта, яка сама є обєктом
recipe.ingredients = {
    butter: "150g",
    chocolate: "200g",
    sugar: "130g",
    eggs: "4",
    flour: "100g"
};

console.log("----- New Property Added -----");
recipe.getInfo(); // Виводимо всі властивості, включаючи нову

recipe.getIngredientsInfo = function() { //ще додаю метод в обєкті інгредієнтів
    for (let key in this.ingredients) {
        console.log(key + " : " + this.ingredients[key]);
    }
};

console.log("----- List of Ingredients -----"); //виведемо ще окремо перелік інгредієнтів
recipe.getIngredientsInfo(); // Виводимо тільки інгредієнти окремо, передаємо в якості аргумента оюєкт з властивостей


recipe.getRecipeText = function() { //ще одна властивість - опис рецепту у вигляді функції
    return "To make the \"" + this.title + "\", melt " + this.ingredients.chocolate + " of chocolate and " + this.ingredients.butter + " of butter. " + 
    "Then, gradually add " + this.ingredients.eggs + " eggs, " + this.ingredients.sugar + " of sugar, and " + this.ingredients.flour + " of flour. " + 
    "Bake at " + this.temperature + "\u00B0C" + " for " + this.time + " minutes.";
};

recipe.servings = 8;
console.log("----- One more property -----");
recipe.getInfo(); // Виводимо оновлену інформацію

console.log("----- Let's cook -----");
console.log(recipe.getRecipeText());
console.log("----- Enjoy your brownies! 🍫 -----");


