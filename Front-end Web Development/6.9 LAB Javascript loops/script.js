function drawTriangle(size) {

for (i = 1; i <= size ; i++){

   x = "*"
   n = 1
   while (n < i) {
      x = x + "*";
      n++;
   }
   
   console.log(x);

}
   
}