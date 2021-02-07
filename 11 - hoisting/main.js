// hoisting - interpreter czyta kod z góry do dołu ale nie 1 raz tylko kilka np 1 raz pod kątem błędów, 2 raz pod kątem dekalracji itd i hoisting to wyniesienie DEKLARACJI pewnych zmiennych do zakresu globalnego danego pliku
//  czyli dla hoistingu liczy się tylko const let i var a nie np number czy string

// 1 - const i let - nie podlega hoistingowi
// var podlega - działa to tak że na górę zakresu zostanie przeniesiona SAMA DEKLARACJA a wartość tej zmiennej zostanie ustalona dopiero w linii w której jest to przypisywane czyli jak np zrobię console.log(typeBoolean) przed tym jak jest napisane var typeBoolean = false; to wykonsolje undefined ponieważ zmienna var jest już zadeklarowana wyżej ale jeszcze nie ma wartości (dlatego undefined). Natomiast jesli zrobię console,log() po tym jak przypisuję do var jakąs wartość to wtedy normalnie wyswietli wartość tej zmiennej var

//  --- używanie zmiennych przed ich dekalracjąw celi zobaczeznia hoistingu: ---------

// console.log(typeNumber); // błąd bo const nie zostaje przeniesiony na górę (nie podlga hoistingowi)
// console.log(typeString); // błąd bo let  nie zostaje przeniesiony na górę (nie podlga hoistingowi)
// console.log(typeBoolean); // będzie 'undefined' ponieważ deklaracja var zostanie przeniesiona ale jej wartość jeszcze nie

// console.log(tablica); // będzie undefined
// console.log(obiekt); // będzie błąd
// console.log(funkcja); // będzie błąd

// dekalracjaFunkcji(); // to ZADZIAŁA i normalnie wykona funkcję. (jakbyśmy przypisali funkcję np const lub let to nie zadziała)

funkcjaVar(); // wyświetli błąd: funkcjaVar is not a function ponieważ funkcja jest przypisana do var a deklaracja vart zostanie przeniesiona z tym tylko że przed swoim przypisaniem to jest undefined no a przecież unefined nie jest funkcją, dlatego taki błąd

// -------------------------------------------
const typeNumber = 20;
let typeString = "tekst";
var typeBoolean = false;

var tablica = [];
let obiekt = {};
const funkcja = function () {};

var funkcjaVar = function () {};

function dekalracjaFunkcji() {
  console.log("użyto mnie zanim zostałam napisana"); // takiej funkcji można użyć całkowicie przed jej deklaracją i normalnie zadziała
}

//  WAŻNE INFO:
// hoisting wynosi dekalracje NA GÓRĘ ALE NIE TYL PLIKU CO ZAKRESU czyli jak miałbyś funkcję w której deklarujesz to ten var byłby przenieisony na górę FUNKCJI a nie całego pliku ponieważ hoisting działa ale w obrębie danego zakresu a nie pliku ogólnie
