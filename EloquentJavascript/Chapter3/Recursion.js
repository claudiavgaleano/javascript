function isEven (num){
  if (num < 0){
    if (num + 2 == 0){
      return true;
    } else if (num + 2 == 1){
        return false;
    } else {
        return isEven (num +2);
    }
  } else {
      if (num-2 == 0){
        return true;
    } else if (num-2 == 1){
        return false;
      } else{
          return isEven (num -2);
        }
    }
}
   
console.log(isEven(-17));