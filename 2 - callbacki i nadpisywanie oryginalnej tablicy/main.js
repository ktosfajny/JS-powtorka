const tablica = [1, 2, 3, 4];

// callback to jest po prostu funkcja jako argument

const funkcja = (item, itemIntex) => item * itemIntex;

//  poniżej do map nie trzeba bezpośednio wpisywać funkcji np (item)=> bo można przecież zrobić sobie consta do którego przypisze się funkcję która przyjmuje argument taki jaki przekazuje map do swojego callbacku i może z nich korzystać tak jak robi to const funkcja
const nowaTablica = tablica.map(funkcja);

// console.log(tablica);
// console.log(nowaTablica);

// ------------------------------------------------
//  PONIŻSZY PRZKYŁAD NIE NADPISZE ORYGINALNEJ TABLICY !!!!

const arr = [1, 3, 5];

const multiply = (element) => element * 2;

function transformarray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
    // console.log(callback(arr[i]));
  }
}

transformarray(arr, multiply);

// console.log(arr);

// ---------------------------------------------------
//  PONIŻSZY PRZKYŁAD NADPISZE PRAWDIZWĄ TABLICĘ !!!!

const otherArr = [2, 3, 4];

const multiplyOtherArray = (item) => item * 2;

const transformOtherArr = (callback) => {
  for (let i = 0; i < otherArr.length; i++) {
    otherArr[i] = callback(otherArr[i]);
  }
};

transformOtherArr(multiplyOtherArray);

console.log(otherArr);
