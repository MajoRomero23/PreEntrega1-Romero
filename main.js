let nombreCliente = prompt ('Hola que tal, por favor ingresa tu nombre');
alert ("Hola "+nombreCliente+" muchas gracias por visitar nuestro cine");

let pelicula = '';
let cantidadBoletos=0;
let areaSala='';
let seguirComprando = false;
let precioBoletos = 0;
let precioPagar = 0; 
let cantidadTotal=0;

do {
    let pelicula;
    do {
        pelicula = parseInt(prompt("Qué película deseas ver el día de hoy?  \n 1: Intensamente 2  \n 2: Mi villano favorito 4  \n 3:Bad Boys:Hasta la Muerte"));
    } while (pelicula !== 1 && pelicula !== 2 && pelicula !== 3);    

switch (pelicula) {
    case 2:
        alert("Sinópsis: Gru, Lucy, Margo, Edith y Agnes le dan la bienvenida a un nuevo miembro a la familia, Gru Jr., quien está decidido a atormentar a su papá. Gru se enfrenta a un nuevo némesis llamado Maxime Le Mal y su novia Valentina, y la familia se ve obligada a huir");
        break;
    case 3:
        alert("Sinópsis: Este verano, los chicos malos favoritos del mundo están de regreso con su icónica mezcla de vertiginosa acción y escandalosa comedia, pero esta vez con un giro: los detectives favoritos de Miami son fugitivos.");
        break;
    case 1:
        alert("Sinópsis: La película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡Nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan mucho tiempo llevando a cabo una operación exitosa, no están seguros de cómo sentirse cuando aparece Ansiedad. Y parece que no está sola.");
        break;
    }

let cantidadBoletos;
do {
    cantidadBoletos = parseInt(prompt("Ya seleccionaste tu película, ¿Cuántos boletos deseas comprar?"));
} while (isNaN(cantidadBoletos)|| cantidadBoletos < 1 || cantidadBoletos >= 10);

let areaSala;
do {
    areaSala = parseInt(prompt("¿En qué área de la sala deseas ubicarte durante tu película? \n 1:Frente a la pantalla \n 2:En el centro de la sala \n 3:Al fondo de la sala"));
} while (areaSala !== 1 && areaSala !== 2 && areaSala !== 3);

let precioBoletos=0;
switch (areaSala) {
    case 1:
        precioBoletos=200;
        break;
    case 2:
        precioBoletos=300;
        break;
    case 3:
        precioBoletos=400;
        break;
    default:
        alert('El área de la sala seleccionada no es válida');
        continue;
}
precioPagar += precioBoletos*cantidadBoletos;
cantidadTotal += cantidadBoletos;

seguirComprando = confirm('¿Deseas comprar entradas para otra película?');

} while (seguirComprando);

alert('El total a pagar es: $'+ precioPagar +' por ' + cantidadTotal + ' boletos. ');

