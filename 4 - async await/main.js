const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. get user data");
      resolve();
    }, 600);
  });
};

const registerUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. register user");
      resolve();
    }, 800);
  });
};

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. send confirmation email");
      resolve({ name: "john", age: 35 });
    }, 200);
  });
};

//// poniżej jest zapis jak można by użyć powyższych funkcji zwracających promise czyli za pomocą .then() i .catch()
// getUserData()
//   .then(registerUser)
//   .then(sendEmail)
//   .then(() => {
//     console.log("end!");
//   });

// ------ASYNC AWAIT :---------------------

// ale można też zrobić nową asynchroniczą funkcję (dzięki słowu async) i w środku poczekać na te funkcje które są asynchroniczne dzięki await. Nie asynchroniczna funkcja czyli console.log() nie musi mieć await no bo ona musi poczekać na to co jest przed nią a przed nią jest np sendEmail() tyle że z await więc console.log() musi zaczekać aż wykona się sendEmail
const handleUser = async () => {
  await getUserData(); // await oczekuje na asynchroniczną funkcję KTÓRA ZWRACA PROMISE
  await registerUser();
  const user = await sendEmail();
  console.log(user);
  console.log("END");
};

handleUser();

//// PONŻEJ PRZYKŁAD Z WYKORZYSTANIEM IIFE:
// (async () => {
//   await getUserData();
//   await registerUser();
//   const user = await sendEmail();
//   console.log(user);
//   console.log("END");
// })();
