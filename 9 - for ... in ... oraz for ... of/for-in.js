//  for ... in ... leci po polach enumerowalnych czyli np 'michael', 'Pam' itd.. (przy założeniu że nie zmieniłeś ręcznie opcji enumerowalności tych pól)

const employee = {
  boss: "michael",
  srcetary: "Pam",
};

for (const key in employee) {
  console.log(key); // wyświetli 'bos' 'srcetary'
  console.log(employee[key]); // wyświetli 'michael' 'Pam'
}

console.log("--------------------------");

const descriptior = Object.getOwnPropertyDescriptor(employee, "boss");
console.log(descriptior);

Object.defineProperty(employee, "accountant", {
  value: "kevin",
  enumerable: true,
});

console.log(descriptior);

console.log("--------------------------");

const asd = [
  {
    srcetary: "kevin",
  },
  {
    srcetary: "oscar",
  },
];

for (const i in asd) {
  // mogę postawić const bo on się nie zmienia w przeciwienstwie do zwykłej pętli for()
  console.log(asd[i].srcetary);
}
