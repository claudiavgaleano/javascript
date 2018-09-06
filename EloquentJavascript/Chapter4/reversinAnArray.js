const reverseArray = (arrayValue) => {
  let result = [];
  for (let n = arrayValue.length - 1; n >= 0; n--) {    
    result.push(arrayValue[n]);
  }
  return result;
}

console.log(reverseArray(["B","A","D","O","O"]));

const reverseArrayInPlace = (array) => {
	for (let n = 0; n < array.length - n; n++) {
		let aux = array[n];
		array[n] = array[array.length - (n+1)];
		array[array.length - (n+1)] = aux;
	}
	return array;
}


console.log(reverseArrayInPlace(["E","L","O","B","I"]));