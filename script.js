const codification = document.querySelectorAll('.cod');
const value = document.getElementById('value');
const button = document.getElementById('randomize');

function randomRgb() {
    const rgb = [];
    for (let i = 0; i < 3; i++ ) {
        rgb.push(Math.floor(Math.random() * 255));
    }
    return rgb;
}

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

function removeActiveClasses() {
    codification.forEach(cod => {
        cod.classList.remove('active');
    })
}

codification.forEach(cod => {
    cod.addEventListener('click', () => {
        removeActiveClasses();
        cod.classList.add('active');
    })
})


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