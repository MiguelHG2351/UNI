const calculator = document.querySelector('#section')
const preloader = document.querySelector('#preloader')
const btnDeg = document.getElementById('deg') //Elige la calculadora en grados
const btnMath = document.getElementById('math')  //Elige la calculadora en números
const $form = document.getElementById('form') //Accede a los datos de los inputs
const btnCalc = document.getElementById('btnCalc') //Boton que envia los datos para calcular los grados
const backCalc = document.getElementById('back') //Regresa al inico para elegir las calculadoras
const calcDeg = document.getElementById('calcDeg') // Contenedor de la calculadora en grados
const writeCalc = document.getElementById('writeCalc') // Escribe las repuestas

// Esta función valida que se envien los datos correctos

function validResponse(res) {
    //Crea arreglo de datos
    let number = res.get('grados').split('°')
    let number2 = res.get('grados2').split('°') 

    var arrayNumber = [number, number2] // El arreglo xd

    let grado = arrayNumber[0][0] - 0 // Transformar de string a números
    let grado2 = arrayNumber[1][0] - 0 // Transformar de string a números
    let minutos = arrayNumber[0][1] - 0 // Transformar de string a números
    let minutos2 = arrayNumber[1][1] - 0 // Transformar de string a números
    let seconds = arrayNumber[0][2] - 0 // Transformar de string a números
    let seconds2 = arrayNumber[1][2] - 0 // Transformar de string a números
debugger

    // Si el usuario  agrega letras a los grados
if(isNaN(grado) && isNaN(grado2) ) {
    
    alert('Agrege a algun valor válido no se burro')
    
} else if(isNaN(minutos) && isNaN(minutos2)) {
    // Si el usuario  agrega letras en minutos
    
    alert('Mmmmmmmm')
    
} else if(isNaN(seconds) && isNaN(seconds2)) {

    alert('No agregues letras en los segundos')

 } else if (arrayNumber[0].length == 3 && arrayNumber[1].length == 3 && typeof(grado) === 'number' && typeof(minutos) === 'number' && typeof(seconds) === 'number' 
    // Si el usuario  agrega grados, minutos, segundos en ambos inputs y si son tipo número
        && typeof(grado2) === 'number' && typeof(minutos2) === 'number' && typeof(seconds2) === 'number') {

        if (minutos > 60 && seconds > 60 && minutos2 > 60 && seconds2 > 60) {

            minutos -= 60
            minutos2 -= 60
            seconds -= 60
            seconds2 -= 60
            grado += 1
            
            writeCalc.innerHTML = `La suma es: ${grado + grado2}° ${minutos + minutos2}° ${seconds + seconds2}
                                   <br />
                                   La resta es: ${grado - grado2}° ${minutos - minutos2}° ${seconds - seconds2}
                                   <br />
                                   La Multiplicación es: ${grado * grado2}° ${minutos * minutos2} ${seconds * seconds2}
                                   <br />
                                   La división es: ${(grado / grado2).toFixed(2)}° ${(minutos / minutos2).toFixed(2)}° ${(seconds / seconds2).toFixed(2)}`  
        } else if(minutos > 120 && seconds > 120 && minutos2 > 120 && seconds2 > 120) {
            
            minutos -= 120
            minutos2 -= 120
            seconds -= 120
            seconds2 -= 120
            grado += 2

            writeCalc.innerHTML = `La suma es: ${grado + grado2}° ${minutos + minutos2}° ${seconds + seconds2}
                                   <br />
                                   La resta es: ${grado - grado2}° ${minutos - minutos2}° ${seconds - seconds2}
                                   <br />
                                   La Multiplicación es: ${grado * grado2}° ${minutos * minutos2} ${seconds * seconds2}
                                   <br />
                                   La división es: ${(grado / grado2).toFixed(2)}° ${(minutos / minutos2).toFixed(2)}° ${(seconds / seconds2).toFixed(2)}`
        
        } else if(minutos > 180 && seconds > 180 && minutos2 > 180 && seconds2 > 180) {
            alert('Es mayor a 180 grados')
        } else if(minutos > 240 && seconds > 240 && minutos2 > 240 && seconds2 > 240) {
            alert('Es mayor a 240 grados')
        } else if(minutos > 300 && seconds > 300 && minutos2 > 300 && seconds2 > 300) {
            alert('Es mayor a 300 grados')
        } else if(minutos > 360 && seconds > 360 && minutos2 > 360 && seconds2 > 360) {
            alert('No se puede calcular si es mayor a 360 grados')
        } else if(minutos > 60 && seconds > 60 && minutos2 < 60 && seconds2 < 60) {
            alert('error xdxdxdxd')
        }


    } else if(arrayNumber[0].length === 2 && arrayNumber[1].length === 2 && typeof(grado) === 'number' && typeof(grado2) === 'number' && typeof(minutos) === 'number' && typeof(minutos2) === 'number' ) {
        
        if (minutos > 60 && minutos2 > 60) {
            writeCalc.innerHTML = `La suma es: ${grado + grado2 + 1}° ${minutos + minutos2}°
                                   <br />
                                   La resta es: ${grado - grado2}° ${minutos - minutos2}°
                                   <br />
                                   La Multiplicación es: ${grado * grado2}° ${minutos * minutos2}°
                                   <br />
                                   La división es: ${(grado / grado2).toFixed(2)}° ${(minutos / minutos2).toFixed(2)}°`
        } else if(minutos > 120 && minutos2 > 120) {
            alert(00)
        }

    } else if(arrayNumber[0].length === 3 && arrayNumber[1].length === 2 && typeof(grado) === 'number' && typeof(grado2) === 'number' && typeof(minutos) === 'number' &&
            typeof(minutos2) === 'number' && typeof(seconds) === 'number') {

    alert(3)

    } else if(arrayNumber[0].length === 3 && arrayNumber[1].length === 1 && typeof(grado) === 'number' && typeof(grado2) === 'number' && typeof(minutos) === 'number'
              && typeof(seconds) === 'number' ) {
    
        alert('Te falto ingresar o ingresaste un string de texto')

    } else if(arrayNumber[0].length > 1 && arrayNumber[1].length == 1 && arrayNumber[1]) {
        
        alert(6)
    }

}

// El fin de la función que valida:v

$form.addEventListener('submit', e => {
    // Evito que se actualize el código
    e.preventDefault()
    const formData = new FormData($form) // Este es el formData
    validResponse(formData) // Valida las funciones

})

btnDeg.addEventListener('click', (e) => {
    // Creo que es obvio lo que hace
    calcDeg.style.display = 'flex'

})

backCalc.addEventListener('click', () => {
    // El comentario de arriba
    calcDeg.style.display = 'none'

})

window.addEventListener('load', () => {
    // El comentario de arriba

    preloader.classList.add('d-none')
    calculator.classList.remove('d-none')

})