let size = 24;
let width = 7;
let height = 4;
let output = "";
let line = 0;
let column = 0;

for ( line = 0; line < height; line++) {
  for( column = 0; column < width; column ++) {
    let position = column + line;
    if (position % 2 == 0) {
      output +="#";
    } else {
      output +=" ";
    }
    
  }  
  output += "\n";
  
}
console.log(output);