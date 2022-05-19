// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'casa';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;
// Resuelve el siguiente problema matemático:
 

const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  function saludo( nombre){
    return 'hola,'+ nombre;
}
    saludo('cesar',);
'hola,cesar'
}



function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  function suma (a,b){
    var suma = a + b;
    return suma;

  }
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  function resta (a,b){
    var resta = a - b;
    return resta;

  }
  resta ();
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  function multiplica (a,b){
    var multiplica = a * b;
    return multiplica;

  }
  multiplica (2,2);
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  function divide (a,b){
    var divide = a / b;
    return divide;

  }
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  function igual(x , y){
    if (x , y ===10){
        return true;
    } 
      return false
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  function longitud (a ,b ){
    var strA = a;
      var strB = b;  
                                 
     if ( strA.length === strB.length ){
       
        return true;
        }
     return false; 
    }
    
        longitud ('casa','tos');
    false
}

 

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  function menorNoventa (numero){
    if (numero < 90){ 
      return true;
   }
       return false;
}
   menorNoventa (89);
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  function mayorNoventa (numero){
    if (numero > 50){ 
      return true;
   }
       return false;
}
   mayorNoventa (89);
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  function resto (a ,b ) {
    var resto = a % b;
    
    return resto;
}
    resto(21,5)
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  false
function esPar(numero){
    if (numero % 2 == 0){
        return true;
    }
    return false

}
    esPar(8);
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  function esImapar(numero){
    if (numero % 2 == 0){
        return false;
    }    
    return true
}

    esImpar(3);
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  function elevarCuadrado (a){
    var elevarCuadrado = (a) **2 ;
    return elevarCuadrado;

  }
  elevarCuadrado  (2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  function elevarcubo (a){
    var elevarcubo = (a) **3;
    return elevarcubo;

  }
  elevarcubo  (2);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  function elevarEx ( a, b ) {
    var elevarEx = Math.pow(a , b)
    return elevarEx;
 }
     
     elevarEx (3,2);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  function redondeaEntero ( a) {
    var redondeaEntero = Math.round(a )
    return redondeaEntero;
 }
     
     redondeaEntero (6.45);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  function redondeaArriba ( a) {
    var redondeaArriba = Math.ceil(a )
    return redondeaArriba;
 }
     
     redondeaArriba (6.45);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  function aleatorio ( a,b) {
    var aleatorio = Math.random(a, b )
    return aleatorio;
 }
     
     aleatorio ();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
function esPositivo (numero){
if (numero >=0) {
  return 'Positivo';
  {
    return 'Negativo'
  }
}
   esPositivo(10);
   
}
}
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  function combinarNombres(nombre, apellido) {
    console.log( nombre , apellido);
   
   }
        combinarNombres('cesar', 'ortega');
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  function obtenerSaludo(nombre){
    console.log('Hola,'+ nombre);
   
 }
    obtenerSaludo('cesar',)

  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  function obtenerSuperficie (alto , ancho){
    var obtenerSuperficie = alto * ancho;

    return obtenerSuperficie;
}
    obtenerSuperficie (9,9);
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  function retornarPerimetro(lado){
    var multiplica = lado * 4;

    return multiplica;

}
    retornarPerimetro(5)
20
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  function areaDelTriangulo(base, altura){
    var area = base * altura / 2;

    return area;
}
    areaDelTriangulo(6,6);
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  function deEuroAdolar(euro){
    var dolares = 1.20;
console.log(euro / dolares);

}
  deEuroAdolar  (20);

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  function esVocal(letra){

    if (letra === 'a'|| letra === 'e'|| letra === 'i' || letra === 'o' || letra === 'u' ){

    return 'es una vocal';
    }
    return 'dato incorrecto';
}

    esVocal(10);

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
