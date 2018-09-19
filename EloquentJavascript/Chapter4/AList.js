//Convertir un Array en una Lista

let arrayToList = (array) => {
  let list = null;
  for (let i = array.length -1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList([1, 2, 3]));

//Convertir una Lista en un Array

let listToArray = (list) => {
 let array = []; 
 console.log(list);

 for (let node = list; node; node = node.rest) {
  array.push(node.value);
 }
 return array;
}

let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

console.log(listToArray(list));

// Agregar un nodo nuevo

let prepend = (value, list) => {
  list = {value:value, rest: list};
  return list;
}

console.log(prepend(8, list));

//Regresar el elemento de la posición dada
let nt = (position, node, actual = 0) => {
  if (position == actual) {    
    return node.value;
  }else {    
    actual++
    return nt (position, node.rest, actual);
    }
}


let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log(nt(2, list));