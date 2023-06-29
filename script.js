// Obtenemos los 3 elementos que requerimos de nuestro DOM
// Los elementos con clase .cod los obtenemos con un querySelector para poder iterarlos con un forEach
const codification = document.querySelectorAll('.cod');
const value = document.getElementById('value');
const button = document.getElementById('randomize');

// Creamos la funcion que nos devolvera un array con 3 numeros aleatorios del 0 al 255
function randomRgb() {
    const rgb = [];
    for (let i = 0; i < 3; i++ ) {
        rgb.push(Math.floor(Math.random() * 255));
    }
    return rgb;
}

// Creamos una funcion que nos devolvera un array de 6 numeros aleatorios del 0 al 16 y los mayores a 9 los convertimos a letras para tenerlos como hexadecimal
function randomHex() {
    const numericHex = [];
    for (let i = 0; i < 6; i++) {
        numericHex.push(Math.floor(Math.random() * 16))
    }
    const hex = [];
    for (num of numericHex) {
        switch (num) {
            case 10:
                hex.push('a');
                break;
            case 11:
                hex.push('b');
                break;
            case 12:
                hex.push('c');
                break;
            case 13:
                hex.push('d');
                break;
            case 14:
                hex.push('e');
                break;
            case 15:
                hex.push('f')
                break;
            default:
                hex.push(num)
                break;
        }
    }
    return hex;
}

// creamos una funcion que itera sobre nuestros .cod para quitarles la clase .active
function removeActiveClasses() {
    codification.forEach(cod => {
        cod.classList.remove('active');
    })
}

// aplicamos el evento a todos los .cod y solo le agregamos el .active al que clickeamos
codification.forEach(cod => {
    cod.addEventListener('click', () => {
        removeActiveClasses();
        cod.classList.add('active');
    })
})

// nuestro botton llamara a las funciones de random dependiendo si se selecciono la opcion de rgb o hexadecimal y ademas podra ese valor en pantalla
button.addEventListener('click', () => {
    if (codification[0].classList.contains('active')) {
        const rgb = randomRgb();
        const valueRgb = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        value.textContent = valueRgb;
        document.body.style.backgroundColor=valueRgb;
    } else {
        const hex = randomHex();
        let valueHex = '#';
        for (let i = 0; i < hex.length; i++) {
            valueHex += hex[i]
        }
        value.textContent = valueHex;
        document.body.style.backgroundColor=valueHex;
    }
})