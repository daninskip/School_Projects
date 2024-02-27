function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   const distributionArray = [0,0,0,0,0];

   scoresArray.forEach(score => {
      const numericScore = parseInt(score);

      if (numericScore >= 90) {
         distributionArray[0]++; // A
       } else if (numericScore >= 80) {
         distributionArray[1]++; // B
       } else if (numericScore >= 70) {
         distributionArray[2]++; // C
       } else if (numericScore >= 60) {
         distributionArray[3]++; // D
       } else {
         distributionArray[4]++; // F
       }
     });
     return distributionArray;
   
}

function setTableContent(userInput) {
   const scoresArray = parseScores(userInput)
   const distribution = buildDistributionArray(scoresArray)
   
   const barHeights = distribution.map(count => count * 10)

   // TODO: Compete the function
   document.querySelector("#firstRow").innerHTML = "<td><div class=bar0></div></td><td><div class=bar1></div></td><td><div class=bar2></div></td><td><div class=bar3></div></td><td><div class=bar4></div></td>"

   document.querySelector(".bar0").style.height = barHeights[0] + "px"  
   document.querySelector(".bar1").style.height = barHeights[1] + "px"
   document.querySelector(".bar2").style.height = barHeights[2] + "px"
   document.querySelector(".bar3").style.height = barHeights[3] + "px"
   document.querySelector(".bar4").style.height = barHeights[4] + "px"

   document.querySelector("#thirdRow").innerHTML = "<td>"+ distribution[0] + "</td><td>"+ distribution[1] + "</td><td>"+ distribution[2] + "</td><td>"+ distribution[3] + "</td><td>"+ distribution[4] + "</td>"

}
// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");