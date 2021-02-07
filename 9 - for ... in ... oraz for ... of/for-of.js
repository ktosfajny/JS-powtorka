//

const employee = {
  boss: "michael",
  srcetary: "Pam",
};

for (const key in employee) {
  console.log(key); // wyświetli 'bos' 'srcetary'
  console.log(employee[key]); // wyświetli 'michael' 'Pam'
}
