function calcWordFrequencies() {

    let inputText = prompt("Enter words");

    let words = inputText.split(" ");

    let wordFrequencies = new Map();

    words.forEach(word => {
        if (wordFrequencies.has(word)) {
          wordFrequencies.set(word, wordFrequencies.get(word) + 1);
        } else {
          wordFrequencies.set(word, 1);
        }
      });
      wordFrequencies.forEach((value, key) => {
        console.log(key + " " + value);
      });
}