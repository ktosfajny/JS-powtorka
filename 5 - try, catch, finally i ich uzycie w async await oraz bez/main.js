const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ name: "john" });
      reject("some error");
    }, 500);
  });
};

//// w poniższy sposób mogę zdboyć informacje o userze ww sposób promisowy czyli dzięki .then().catch()
// getUser()
//   .then((user) => {
//     console.log(user.name);
//   })
//   .catch((error) => console.log(error));

//// w poniższy sposób mogę zdobyć informacje o userze w sposób async await
const someAsyncfunction = async () => {
  try {
    // try to takie jakby .then() czyli próbujesz w try coś wykonać
    const user = await getUser();
    console.log(user); // user nie zostanie wykonsolowany jeśli będzie błąd przy await getUser() bo jak jest bląd to trafi do catch od razu

    // fetch() jakby tutaj był jakiś kod to on nawet się nei wykona jeśli bedzie błąd (jak nie ma no to normalnie się wykona)
  } catch (error) {
    // ale jeśli jednak był błąd to trafiasz do catch gdzie przyjmujesz błąd i go wyświetlasz
    console.log(error);
  } finally {
    // czasem można dodać finally i to co w nim jest wykona się tak czy siak po bloku try catch ale w sumie to nie ma sensu bo jakbyś napisał poniższy console log nie w finally tylko po prostu po bloku catch to ten console log i tak by się wykonał
    console.log("wykonam się nie zaleznie czy jest błąd czy nie");
    // ale można tutaj dać np coś co jest w jakiś sposób powiązane z blokiem try catch np wyświetlanie czegoś (a czy danych czy np pustej strony bo error to już zależy czy będzie błąd czy nie w try catch)
  }
  console.log("wykonam się tak czy siak więc nie ma sensu uzywać finally");
  console.log("-----------------------------------------------------");
};

someAsyncfunction();
