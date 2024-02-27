function drawTriangle(size) {
   for (let i = 1; i <= size; i++) {
     let output = '';
     for (let x = 0; x < i; x++) {
       output += '*';
     }
     console.log(output);
   }
 }