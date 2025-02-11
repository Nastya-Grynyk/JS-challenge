//1)  'number' + 3 + 3
var result = 'number' + 3 + 3; //змінній присвоюється значення рівне виразу, де операція виконується зліва направо, тобто є лівоасоціативна, так як перше значення типу string, то всі операнди з.єднуються в один рядок, в цьому випадку + означає конкатенацію
console.log(result); //відповідь: змінна result отримує значення типу string: number33

//2)  null + 3
var result = null + 3;//додавання нал до числа, null - не стрігн, тому js приводить до числа
console.log(result);//відповідь:3 (0+3=3) 

//3)  5 && "qwerty"
var result = 5 && "qwerty"; //оператор порівняння, 5 - намбер = тру, стрінга = теж тру
    console.log(result); // перший вираз тру, другий вираз тру - ми дійшли до кінця - повертаємо останній: qwerty

//4)  +'40' + +'2' + "VOSTOK";
var result = +'40' + +'2' + "VOSTOK"; //лівоасоціативна операція, приведення до числа 40 + привелення до числа 2 : звичайне додавання, + рядок, тоді буде конкатенація
    console.log(result); //відповідь:42VOSTOK

//5)  '10' - 5 === 6;
var result = '10' - 5 === 6; //зліва різні типи приводяться до числа і виконується дія віднімання 10-5=5; 5 строго рівне 6? - ні
    console.log(result); // відповідь: false

//6)  true + false
var result = true + false // булеві значення приводяться до числових, звичайне додавання
    console.log(result); //відповідь: 1+0 = 1

//7)  '4px' - 3
var result = '4px' - 3; // відмімання від рядка числа - нот а намбер, "-" примушує операнди ставати числами, а 4px не може стати числом
    console.log(result); //відповідь: NaN

//8)  '4' - 3
var result = '4' - 3; //операція відмінання, лівоасоціативна, "-" примушує операнди ставати числами, стрінгове значення перетворюється на числове
    console.log(result); //відповідь: 4-3=1

//9)  '6' + 3 ** 0;
var result = '6' + 3 ** 0;//операція правоасоціативна, виконується з права на ліво, 1)3 в степіні 0 = 1, 2) якщо додавання до стріги, тобі виконується конкатинація,
    console.log(result); //відповідь: 6 просто приєднується до 1, тобто = 61

//10)  12 / '6'
var result = 12 / '6'; //звичайне ділення, стрінга перетворюється на числове
    console.log(result); //відповідь: 12/6 = 2

//11)  '10' + (5 === 6);
var result= '10' + (5 === 6); //правоасоціативна, спочатку виконується те що в дужках: строге порівняння: питаємо: 5 строго дорівнює 6? - ні, false, рядок + false - конкатинація
    console.log(result); //відповідь: 10false

//12)  null == ''
var result = null == ''; //не строга рівність, [null дорівнює тільки undefined при нестрогому порівнянні.В інших випадках null не дорівнює нічому.]
    console.log(result); //відповідь: false (нал  рівний порожньому рядку? - ні )

//13)  3 ** (9 / 3);
var result13 = 3 ** (9 / 3); //правоасоціативна операція, спочатку обчислюється те, шо в дужках
    console.log(result13); // відповідь: 1) 9/3=3, 2) 3 в степені 3 = 27

//14)  !!'false' == !!'true'
var result = !!'false' == !!'true'; // після!! - значення - не порожня стрінга, тому її булеве значення - тру, тобто і 'false'='true'і кожне рівне true
    console.log(result);//відповідь: Перетворюємо послідовно вирази: !(!true)== !(!true), next !false==!false, next true==true so true
                                                    // !- заперечує - перетворює на протилежне
//15)  0 || '0' && 1
var result = 0 || '0' && 1; // спочатку виконуємо І ('0' && 1), потім АБО: рядок '0'- тру І число теж тру, тому повертаємо остання трушне значення = 1, далі вираз стає таким  (0 || 1) : 0-фолс АБО 1-тру, і повертає занчення тру: 1   
console.log(result); // відповідь: true

//16)  (+null == false) < 1;
var result = (+null == false) < 1;// перша дія виконується в дужках: 1) +нал - приводиться до числа 0, 2) 0 не строго рівне фолс?: фолс приводиться до числа і рівне 0, тому тут відповідь - так - тру, 3) тру менше за 1, ні
    console.log(result); //відповідь: false

//17)  false && true || true
var result = false && true || true;// Спочатку І, потім АБО: false && true - false (повертається перше фолс), false || true - true (є один тру - повертає тру)
    console.log(result); // відповідь: true

//18)  false && (false || true);
var result = false && (false || true); // 1) спочатку те що в дужках (false || true) - буде тру, бо є хочаб один операнд тру, 2) false && true - буде фолс, бо перший операнд вже фолс
    console.log(result); //відповідь: false

//19)  (+null == false) < 1 ** 5;
var result = (+null == false) < 1 ** 5;// 1) те що в дужках (null приведемо до числа 0, 0 нестрого рівне фолс (фолс також приводиться до числа = 0? - так, тру), 2) 1 в степені 5 = 1, тру менше 1? - ні, фолс
    console.log(result); //відповідь: false
