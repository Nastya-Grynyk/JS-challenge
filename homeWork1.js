//1)  'number' + 3 + 3
var result = 'number' + 3 + 3; //змінній присвоюється значення рівне виразу, де операція виконується зліва направо, тобто є лівоасоціативна, так як перше значення типу string, то всі операнди з.єднуються в один рядок, в цьому випадку + означає конкатенацію
console.log(result); //відповідь: змінна result отримує значення типу string: number33

//2)  null + 3
var result = null + 3;//додавання нал до числа, null - не стрігн, тому js приводить до числа
console.log(result);//відповідь 3 (0+3=3) 

//3)  5 && "qwerty"
var result = 5 && "qwerty"; //оператор порівняння, 5 - намбер = тру, стрінг = теж тру
    console.log(result); // перший вираз тру, другий вираз тру - ми дійшли до кінця - повертаємо останній

//4)  +'40' + +'2' + "hillel";
var result = +'40' + +'2' + "VOSTOK"; //лівоасоціативна операція, приведення до числа 40 + привелення до числа 2 : звичайне додавання, + рядок, тоді буде конкатенація
    console.log(result); //42VOSTOK

//5)  '10' - 5 === 6;
var result = '10' - 5 === 6; //зілва різні типи приводяться до числа і виконується дія віднімання 10-5=5, 5 строго рівне 6? - ні
    console.log(result); // фолс

//6)  true + false
var result = true + false // булеві значення перетворюються в числові, звичайне додавання
    console.log(result); //відповідь: 1+0 = 1

//7)  '4px' - 3
var result = '4px' - 3; // відмінання від рядка числа - нот а намбер, - примушує операнди ставати числами
    console.log(result); //Nan

//8)  '4' - 3
var result = '4' - 3; //операція відмінання, лівоасоціативна, стрінгове значення перетворюється на числове
    console.log(result); //відповідь: 4-3=1

//9)  '6' + 3 ** 0;
var result = '6' + 3 ** 0;//операція правоасоціативна, виконується з права на ліво 
    console.log(result); //1)3 в степіні 0 = 1, 2) стрінгове значення не переводиться в числове, а з.єднується з 1, тобто відбувається конкатенація = 61

//10)  12 / '6'
var result = 12 / '6'; //звичайне ділення, стрінга перетворюється на числове
    console.log(result); //12/6=2

//11)  '10' + (5 === 6);
var result= '10' + (5 === 6); //правоасоціативна, спочатку виконується те що в дужках: строге порівняння 5 строго дорівнює 6? - ні, фолс, рядок + фолс - конкатинація
    console.log(result); //10false

//12)  null == ''
var result = null == ''; //не строга рівність, 
    console.log(result); //нал  рівний порожньому рядку? - ні фолс

//13)  3 ** (9 / 3);
var result13 = 3 ** (9 / 3); //правоасоціативна операція, спочатку обчислюється те, шо в дужках
    console.log(result13); //1) 9/3=3, 2)3 в степені 3=27

//14)  !!'false' == !!'true'
var result = !!'false' == !!'true'; // після!! - значення - не порожня стрінга, тому його булеве значенн - тру
    console.log(result);//! (!true)== !(!true), next !false==!false, next true==true so true

//15)  0 || '0' && 1
var result = 0 || '0' && 1; // спочатку виконуємо І ('0' && 1), потім АБО: рядок '0'- тру І число теж тру, тому повертаємо остання зтрушне значення = 1, далі вираз стає таким  (0 || 1) : 0-фолс АБО 1-тру, і повертає занчення тру: 1   
console.log(result); //

//16)  (+null == false) < 1;
var result = (+null == false) < 1;// (0 рівне фолс)? так (до чого приводити до числа чи до булевого?) - тру, тру менше за 1, ні
    console.log(result);

//17)  false && true || true
var result = false && true || true;// false && true - false (операнди не обидва тру), false || true - true (є один тру - повертає тру)
    console.log(result);

//18)  false && (false || true);
var result = false && (false || true); // 1) (false || true) - буде тру, бо є хочаб один операнд тру, 2) false && true - буде фолс, бо перший операнд уже фолс
    console.log(result); //false

//19)  (+null == false) < 1 ** 5;
var result = (+null == false) < 1 ** 5;// (null приведемо до числа 0, 0 нестрого рівне фолс (фолс також приводиться до числа = 0? - так, тру), 1 в степені 5 = 1, тру менше 1? - ні, фолс
    console.log(result);
