// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var Matriz = [];
  for (const key in objeto) {
    Matriz.push([key, objeto[key]]);
  }
  return Matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  // crear objeto vacio
  var objetoFinal = {};
  // for para recorrer el string -->
  for (let i = 0; i < string.length; i++) {
    if (objetoFinal.hasOwnProperty(string[i])) {
      objetoFinal[string[i]]++;
    } else {
      objetoFinal[string[i]] = 1;
    }
  }
  return objetoFinal;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let My = "";
  let Mi = "";
  for (let ind = 0; ind < s.length; ind++) {
    if (s[ind] === s[ind].toUpperCase()) {
      My += s[ind];
    } else {
      Mi += s[ind];
    }
  }
  return My + Mi;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseRev = [];
  var sepPalabras = str.split(" ");
  for (let index = 0; index < sepPalabras.length; index++) {
    var revPalabra = sepPalabras[index].split("");
    revPalabra.reverse();
    fraseRev.push(revPalabra.join(""));
  }
  return fraseRev.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    let sting = numero.toString();
    let gnits = "";
      for (let ind = sting.length - 1; ind >= 0; ind--) {
          gnits += sting[ind];
      }
      if (gnits === sting) {
          return "Es capicua";
      }   else return "No es capicua";
    console.log(gnits);
    console.log(sting);
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    let strsinACB = '';  
      for (let i = 0; i < cadena.length; i++) {
          if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {  
            strsinACB += cadena[i]; 
          }
      }
    return strsinACB;  
}
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
      //   var fraseFinal= [];
      // for (let i = 0; i < arr.length; i++) {
      //   if (arr[i].length >= fraseFinal[i].length) {
      //     fraseFinal.push(arr[i])
      //   } else {fraseFinal.unshift(arr[i])
      //     };
      // }
      // return fraseFinal;
      
      return arr.sort(function(a,b){
        return a.length - b.length 
      })
    

}

function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí
    let intersec= [];
    for (let i = 0; i < arreglo1.length; i++) {
      for (let b = 0; b < arreglo2.length; b++) {
        if (arreglo1[i] === arreglo2[b]) {
          intersec.push(arreglo1[i])
        } 
      }
    }
    return intersec;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
