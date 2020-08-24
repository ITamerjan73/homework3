// DOM elements
const resultel = document.getElementById('result');
const lengtel = document.getElementById('length');
const uppercaseel = document.getElementById('uppercase');
const lowercaseel = document.getElementById('lowercase');
const numberel = document.getElementById('number');
const symbolel = document.getElementById('symbol');
const generateel = document.getElementById('generate');
const clipboardel = document.getElementById('clipboard');

const randomfunc = {
    lower: getrandomlower,
    upper: getrandomupper,
    number: getrandomnumber,
    symbol: getrandomsymbol,
};

generateel.addEventListener('click', () => {
        const length = lengthel.value;

        console.log(typeof length);
});        

// Generator function - http://www.net-comber.com/charset.html

function getrandomlower() {
    return String.fromCharCode(math.floor(math.random() * 26) + 97);
}

function getrandomupper() {
    return String.fromCharCode(math.floor(math.random() * 26) + 65 );
}

function getrandomnumber() {
    return String.fromCharCode(math.floor(math.random() * 10) + 48 );
}

function getrandomsymbol() {
    const symbols = '@#$%^&*()[]=<>/,.';
    return String.fromCharCode[math.floor(math.random() * symbols.length)];
}





