const firstName = "Mateusz";
const rocznik = 1992;

console.log(
  `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :). `
);



const heading = document.querySelector('.js-text');

heading.innerHTML = `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :) `