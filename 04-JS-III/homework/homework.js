// No cambies los nombres de las funciones.
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var i = (array.length - 1)
    return (array [i]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
    return (array.length);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  final = [];
  for (let index = 0; index < array.length; index++) { 
   final [index] = array [index] + 1;
    }
    return final;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return palabras.join (' ') ;
  //return palabras.join ('*') ;
  //return palabras.join ('-') ;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (array [index] === elemento) {
      return true 
    };
  };
  return false;   
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   let sumar = 0;
 for (let idxnum = 0; idxnum < numeros.length; idxnum++) {
  sumar = numeros[idxnum]  + sumar
 }; 
 return sumar;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sumar = 0;
  let c = resultadosTest.length
  for (let irt = 0; irt < c; irt++) {
   sumar = resultadosTest[irt]  + sumar
  }; 
  return (sumar / c) ;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros [0];
    for (let inum = 0; inum < numeros.length; inum++) {
      if (numeros [inum] > mayor) {
      mayor = numeros[inum]
      }
  }; 
  return mayor ;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {return 0    
  };
  let prod = 1;
  for (let idxnum = 0; idxnum < arguments.length; idxnum++) {
   prod = arguments[idxnum] * prod
  }; 
  return prod;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  mayores = [];
    for (let index = 0; index < arreglo.length; index++) {
      if (arreglo [index] > 18) {
      mayores.push (arreglo[index])
      }
    }; 
  return (mayores.length)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) { 
      return 'Es fin de semana'      
      }; 
        return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //El objecto Number convertirá cualquier cosa que se le pase en un número, si puede. Intenta lo siguiente:
//var myString = '123';
//var myNum = Number(myString);
//typeof myNum;
//Copy to Clipboard
//Por otra parte, cada número tiene un método llamado toString() que convertirá el equivalente en una string. Prueba esto:
//var myNum = 123;
//var myString = myNum.toString();
//typeof myString;
  var str = n.toString();
  if ( str [0] === '9') {return true
  };
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo [0] !== arreglo[i]){
      return false
    };
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [] ; 
  for (let n = 0; n < array.length; n++) {
    if (array[n] === 'Enero' || array[n] === 'Marzo' || array[n] === 'Noviembre') {
      meses.push (array [n])
    };
      if (meses.length === 3) {
        return meses;
      };
  };
    return 'No se encontraron los meses pedidos';
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let Narray = []
  for (let index = 0; index < array.length; index++) {
    if (array [index] > 100) {
       Narray.push (array[index]);
    }
       
  }return Narray; 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newarr = []
  let suma = numero;
  for (let idx = 0; idx < 10; idx++) {
        suma = suma + 2
    if (suma === idx) break;  
      else {newarr.push (suma)}
  }     
    if (newarr.length < 10) { 
      return 'Se interrumpió la ejecución';
      }
        else {return newarr};
  }


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let newarr = []
     for (let idx = 0; idx < 10; idx++) {
        if (idx === 5) continue;  //EL CONTINUE SALTA EL RESTO DEL FOR
        numero = numero + 2 // EL CONTINUE SALTA ESTO
        newarr.push (numero)// Y SALTA ESTO
     }     
    return newarr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
