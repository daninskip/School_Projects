window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json"
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count);
   xhr.send();

   //let html = "<ol>";
   //for (let c = 1; c <= count; c++) {
   //   html += `<li>Quote ${c} - Anonymous</li>`;
   //}
   //html += "</ol>";

   //document.querySelector("#quotes").innerHTML = html;
}

// TODO: Add responseReceivedHandler() here

function responseReceivedHandler() {
   const quotesContainer = document.getElementById('quotes');
   console.log(this.response)
   console.log(this.status)
   if (this.status === 200){
      let quotesList = document.createElement('ol');

      this.response.forEach(quote => {
         listItem = document.createElement('li');
         listItem.textContent = `${quote.quote} - ${quote.source}`;
         quotesContainer.innerHTML = '';
         quotesList.appendChild(listItem);
      });

      
      quotesContainer.appendChild(quotesList);
   }
   else {
     document.getElementById('quotes').innerHTML = this.response;
   }
   
}