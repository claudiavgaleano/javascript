let deepEqual = (valor1, valor2) => {
  if (valor1 != null && valor2 != null) {
    if (typeof valor1 === typeof valor2) {
      if (typeof valor1 != "object" && typeof valor2 != "object") {
        return valor1 === valor2;
      }
        let equals = true;
        for (let key of Object.keys(valor1)) {
          equals = equals && deepEqual(valor1[key], valor2[key]);
        }
        return equals;
    }
    return false;
  }
  return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


/*let deepEqual = (obj1, obj2) => {
  if (obj1 != null && obj2 != null) {
    let objeto1 = typeof obj1;
    let objeto2 = typeof obj2;
    if (objeto1 == "object" && objeto2 =="object") {
      let obj1Keys = Object.keys(obj1);
      let obj2Keys = Object.keys(obj2);
      console.log(obj1Keys, obj2Keys);
      


      } else if (objeto1 != "object" ||objeto2 != "object"){
        if(obj1 === obj2){
          return true;
        }else {
          return false;
        }
    }
  }
} 
  

  

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));;*/
