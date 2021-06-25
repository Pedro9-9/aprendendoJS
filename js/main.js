var btn = document.getElementById('btn-div');

var container = document.querySelector('.container');

btn.addEventListener('click', function () {

    if (container.style.display === 'none') {

        container.style.display = 'block';

    } else {

        container.style.display = 'none';
    }
});



function capturar() {
    document.getElementById('ma').style.display = 'block';
    var capturando = document.getElementById("valor").value;
    document.getElementById('valorDigitado').innerHTML = capturando;
   
        
    }
