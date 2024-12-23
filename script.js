document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function closeMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
}

function convertTemperature() {
    var input = document.getElementById('temp-input').value;
    var result = document.getElementById('temp-result');
    var celsius = parseFloat(input);
    if (!isNaN(celsius)) {
        var kelvin = celsius + 273.15;
        var far = (celsius*(9/5))+32;
        result.textContent = `${celsius} °C = ${kelvin} K = ${far} °F`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertTemperature2() {
    var input = document.getElementById('temp-input2').value;
    var result = document.getElementById('temp-result2');
    var celsius = parseFloat(input);
    if (!isNaN(celsius)) {
        var kelvin = celsius - 273.15;
        var far = (celsius-273.15)*(9/5)+32;
        result.textContent = `${celsius} K = ${kelvin} °C = ${far} °F`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertTemperature6() {
    var input = document.getElementById('temp-input6').value;
    var result = document.getElementById('temp-result6');
    var celsius = parseFloat(input);
    if (!isNaN(celsius)) {
        var kelvin = (celsius-32)*(5/9)+273.15;
        var far = (celsius-32)*(5/9)
        result.textContent = `${celsius} °F = ${kelvin} K = ${far} °C`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}

function convertNumeration() {
    var input = document.getElementById('num-input').value;
    var result = document.getElementById('num-result');

    if (/^[01]+$/.test(input)) {
        var decimal = parseInt(input, 2);
        var hexadecimal = decimal.toString(16).toUpperCase();
        var octal = decimal.toString(8);
        result.textContent = `${input} en Binario es: ${decimal} en Decimal - ${hexadecimal} en Hexadecimal - ${octal} en Octal`;
    } else {
        result.textContent = 'Introduce un número binario válido';
    }
}
function convertNumeration2() {
    var input = document.getElementById('num-input2').value;
    var result = document.getElementById('num-result2');

    if (/^\d+$/.test(input)) {
        var decimal = parseInt(input, 10);
        var binary = decimal.toString(2);
        var hexadecimal = decimal.toString(16).toUpperCase();
        var octal = decimal.toString(8);
        
        result.textContent = `${input} en Decimal es: ${binary} en Binario - ${hexadecimal} en Hexadecimal - ${octal} en Octal`;
    } else {
        result.textContent = 'Introduce un número decimal válido';
    }
}
function convertNumeration3(){
    var input = document.getElementById('num-input3').value;
    var result = document.getElementById('num-result3');
    if (/^[0-7]+$/.test(input)) {
        var decimal = parseInt(input, 8);
        var binary = decimal.toString(2);
        var hexadecimal = decimal.toString(16).toUpperCase();
        result.textContent = `${input} en Octal es: ${decimal} en Decimal - ${binary} en Binario - ${hexadecimal} en Hexadecimal`;
    } else {
        result.textContent = 'Introduce un número octal válido';
    }
}
function convertNumeration4(){
    var input = document.getElementById('num-input4').value;
    var result = document.getElementById('num-result4');
    if (/^[0-9A-Fa-f]+$/.test(input)) {
        var decimal = parseInt(input, 16);
        var binary = decimal.toString(2);
        var octal = decimal.toString(8);
        result.textContent = `${input.toUpperCase()} en Hexadecimal es: ${decimal} en Decimal - ${binary} en Binario - ${octal} en Octal`;
    } else {
        result.textContent = 'Introduce un número hexadecimal válido';
    }
}


function convertMeasures() {
    var input = document.getElementById('measure-input').value;
    var result = document.getElementById('measure-result');
    var meters = parseFloat(input);
    if (!isNaN(meters)) {
        var km = meters / 1000;
        var hm = meters / 100;
        var dam = meters / 10;
        var dm = meters * 10;
        var cm = meters * 100;
        var mm = meters * 1000;
        result.textContent = `${meters} m equivale a: ${km} km, ${hm} hm, ${dam} dam, ${dm} dm, ${cm} cm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromKM() {
    var input = document.getElementById('measure-inputkm').value;
    var result = document.getElementById('measure-resultkm');
    var km = parseFloat(input);
    if (!isNaN(km)) {
        var hm = km * 10;
        var dam = km * 100;
        var meters = km * 1000;
        var dm = km * 10000;
        var cm = km * 100000;
        var mm = km * 1000000;
        result.textContent = `${km} km equivale a: ${hm} hm, ${dam} dam, ${meters} m, ${dm} dm, ${cm} cm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromHM() {
    var input = document.getElementById('measure-inputhm').value;
    var result = document.getElementById('measure-resulthm');
    var hm = parseFloat(input);
    if (!isNaN(hm)) {
        var km = hm / 10;
        var dam = hm * 10;
        var meters = hm * 100;
        var dm = hm * 1000;
        var cm = hm * 10000;
        var mm = hm * 100000;
        result.textContent = `${hm} hm equivale a: ${km} km, ${dam} dam, ${meters} m, ${dm} dm, ${cm} cm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromDAM() {
    var input = document.getElementById('measure-inputdam').value;
    var result = document.getElementById('measure-resultdam');
    var dam = parseFloat(input);
    if (!isNaN(dam)) {
        var km = dam / 100;
        var hm = dam / 10;
        var meters = dam * 10;
        var dm = dam * 100;
        var cm = dam * 1000;
        var mm = dam * 10000;
        result.textContent = `${dam} dam equivale a: ${km} km, ${hm} hm, ${meters} m, ${dm} dm, ${cm} cm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromDM() {
    var input = document.getElementById('measure-inputdm').value;
    var result = document.getElementById('measure-resultdm');
    var dm = parseFloat(input);
    if (!isNaN(dm)) {
        var km = dm / 10000;
        var hm = dm / 1000;
        var dam = dm / 100;
        var meters = dm / 10;
        var cm = dm * 10;
        var mm = dm * 100;
        result.textContent = `${dm} dm equivale a: ${km} km, ${hm} hm, ${dam} dam, ${meters} m, ${cm} cm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromCM() {
    var input = document.getElementById('measure-inputcm').value;
    var result = document.getElementById('measure-resultcm');
    var cm = parseFloat(input);
    if (!isNaN(cm)) {
        var km = cm / 100000;
        var hm = cm / 10000;
        var dam = cm / 1000;
        var meters = cm / 100;
        var dm = cm / 10;
        var mm = cm * 10;
        result.textContent = `${cm} cm equivale a: ${km} km, ${hm} hm, ${dam} dam, ${meters} m, ${dm} dm, ${mm} mm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}
function convertMeasuresFromMM() {
    var input = document.getElementById('measure-inputmm').value;
    var result = document.getElementById('measure-resultmm');
    var mm = parseFloat(input);
    if (!isNaN(mm)) {
        var km = mm / 1000000;
        var hm = mm / 100000;
        var dam = mm / 10000;
        var meters = mm / 1000;
        var dm = mm / 100;
        var cm = mm / 10;
        result.textContent = `${mm} mm equivale a: ${km} km, ${hm} hm, ${dam} dam, ${meters} m, ${dm} dm, ${cm} cm`;
    } else {
        result.textContent = 'Introduce un número válido';
    }
}

