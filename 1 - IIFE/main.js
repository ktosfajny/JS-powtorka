// (() => {
//   console.log("sdf");
// })();

const asd = (() => {
  console.log("df");
})();

// () <-- ten pierwszy nawias zwraca to co jest w środku a że jest tam funkcja no to zwróci funkcję, dlatego po tym peirwszym () dajemy drugi () bo aby uruchomić funkcję używa się ()

// --------------------------------------

const asda = (() => {
  console.log("dfa");
  return 5;
})();

// w przykładzie asda w pierwszym () jest funkcja więc zostaje ona zwrócona ale ale że po tym 1 nawiasie jest od razu () to zostanie ona od razu wykonana a że 1 nawias zwraca to co w nim jest to zwróci to co zwróci ta funkcja anonimowa czyli cyfrę 5 i to ta cyfra zostanie zwróca z tego 1 nawiasu i zostanie to przypisane do asda

console.log(asda); // < --- to wypisze 5
