let example = "";  
const countBs = (word) => {
 for (n = 0; n <= word.length; n++){    
   if(word[n] === "B") {
     example = example + "B";     
   }
 } 
let count = example.length 
 return count;
}
console.log(countBs("BalalaBalalababaLababaBaBabAbAB"));

let words = "";  
const countChars = (word, char) => {
 for (n = 0; n <= word.length; n++){    
   if(word[n] === char) {
     words = words + char;     
   }
 }  
 let count = words.length 
 return count;
}
console.log(countChars("BalalaBalalababaLababaBaBabAbAB", "a"));