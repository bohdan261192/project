//ПРОСТЕЙШИЕ КОМАНДЫ

console.log("Hello"); //Вывод сообщения в консоль
alert("Hello"); //Вывод окна преостанавливающий исполнение кода
confirm("Hello"); //Вывод окна преостанавливающий исполнение кода, но уже с вариантом отмены "Cancel"
prompt("Are you sure?"); //Вывод окна преостанавливающий исполнение кода с полем ввода для значения


// ПЕРЕМЕННЫЕ

let userName;   //Создание переменной с названием
userName = 'Bohdan';    //Указание значения (строка или число) переменной
console.log(userName)   //Вывод переменной в консоль

const  //Константа - тип переменной которую нельзя изменить
const P = 3.14; //Создание константы с названием и указание значения
console.log(P); //Вывод переменной в консоль

//ПРОСТЕЙШИЕ ТИПЫ ДАННЫХ

let age = 30; //Цифры
infinity //Значение математической бесконечности
NaN //Значение ошибки вычесления

let name = "Mike";//Строчные
let name = `My name is Mike. My age is ${age}`;//Косые ковычки помогают добавлять к значениям дополнительно еще         переменные с помощью символа $ и ()
let name = true/false; //Логические(булевые)
let name = null; //специальный тип данных, который не несет никак значений
let name = undefined; //Специальный тип данных, доступ к тоторым не найден
