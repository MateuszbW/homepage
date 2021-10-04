/*podmianka tekstu nagłówka za pomocą przycisku */
const button = document.querySelector('.action--js');

console.log(button)

const myClick = () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = 'Witaj odwiedzający';
}

button.addEventListener('click', myClick);

