////  Promise przyjmuje jako argument funkcję do której pakuje 2 funkcje: resolve i reject (oczywiście nazwy dowolne)
// new Promise((resolve, reject) => {
//   console.log("robię");
//   setTimeout(() => {
//     resolve("OK"); // resolve to funkcja któa wykona się jak wszystko się udało i można jej przekazać wartość która będzie potem dostepna w callbacku then()
//   }, 2000);
// }) //to value tutaj to jest ten napis "OK" który wpisaliśmy w resolve()
//   .then((value) => {
//     console.log(value);
//     return "asd"; // tutaj zwracamy napis 'asd' i on znowu będzie dostepny w argumencie callbacka następnej funkcji
//   })
//   .then((as) => {
//     console.log(as);
//   }) // to catch do error trafia to co podamy jako argument reject() i reject wykonuje się wtedy jak jest błąd
//   .catch((error) => {
//     console.log(error);
//   });

// --------------------------------------

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
    }, 600);
  });
};

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("3. send confirmation email");
      resolve({ name: "john" });
    }, 600);
  });
};

getUserData()
  .then(registerUser)
  .then(sendEmail)
  .then((data) => {
    console.log(data.name);
    console.log("end!");
  });

// -----------------------------------

//// jeśli wykonsolujesz funkcą i ona w konsoli zwróc: Promise {<state>: "pending"} .. to znaczy że to po prostu funkcja która zwraca promisa, jak rozwiniesz ten obiekt w konsoli to pewnie zobaczysz że ma:
// <state>: "fulfilled"
// value: undefined .. (ablo coś tam)
// to aby wydobyć te dane musisz po prostu na nie zaczekać
// console.log(sendEmail()); // <--- to wykonsoluje właśnie ten obiekt Promise {<state>: "fulfilled"}

//  ⬇️ tak mozna wydobyć dane z promisa, po prostu robiąc asynchroniczną funkcję
// const asd = async () => {
//   const wynik = await sendEmail();
//   console.log("----------------");
//   console.log(wynik);
//   console.log("----------------");
// };

// asd();
