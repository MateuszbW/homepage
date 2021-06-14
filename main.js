/*                                                 1   STAŁE                                                                                                 */
const firstName = "Mateusz";
const rocznik = 1992;
const age = 32;

/*                                                  2 pisze w konsoli                                                                                     */
console.log(
  `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :). `
);

/*                                               3 liczę z pomocą funkcji i wyswietlam w konsoli                                                          */
/*                                               W tym przypadku podajemy wartość 7 mnożymy przez liczbę podaną w "calculate(2)" i otrzymujemy wynik w konsoli*/

function calculate(myNumber) {
  console.log(`Dostałem ${myNumber}`);
  return myNumber * 7;
  /* bez tego "return" funkcja wykonuje obliczenia ale nie zwraca wyniku. I w tym przypadku operacja poniżej nie pomnoży go x2  */
  /* return `wynik ${myNumber}`        --- takia funkcjia wyświetliła by napis"wynik 224" ponieważ pomnożyłaby stałą age 32*7 */
}

const myResult = calculate(2); /*można podać zmienną np age lub cyfrę */
console.log(myResult);

/*                                               4 wyświetlam przy pomocy funkcji w konsoli                                                             */
function greet(age, firstName) {
  console.log(
    `Witaj człowieku, na imie mi ${firstName} i mam ${age} lata, a Ty?`
  );
}

greet(age, firstName);
greet(19, `Adam`);
/*                                              Funkcja greet zamienia stałe na podane stałe przez nas, np: greet(18, 'Adam') */

/*                                              5 wywołuje napis w html i przypisuje w nim wartości stałych                                             */

const heading = document.querySelector(".js-text");

heading.innerHTML = `Witam, mam na imie ${firstName} i urodziłem się w ${rocznik} roku, jestem tu bo ucze się frontendu :) `;

/*                                               6 piszte w html ale z użyciem funkcji                                                                   */
/*                                                Jest to funkcja do podmieniania lub wypisywania tekstu                                                 */
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".js-text__description--js", "Tutaj używam funkcji JS");

createContent(".js-text__content--js", "A tutaj podmieniam tekst");
