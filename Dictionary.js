let searchInput = document.getElementById("searchBar");
let words = [];

function saveTheWord() {
   let newWord = searchInput.value;
   let messageDiv = document.getElementById("message");
   if (newWord !== "" && !words.includes(newWord)) {
      words.push(newWord);
      searchInput.value = "";
   } else if (words.includes(newWord)) {
      messageDiv.innerHTML = newWord + " " + "is already in the dictionary";
   }
}

function wordExists() {
   let searchTerm = searchInput.value;
   let messageDiv = document.getElementById("message");
   if (words.length === 0 && searchTerm !== 0) {
      messageDiv.innerHTML = "There are no words in the dictionary yet";
   }
   if (searchTerm.length !== 0) {
      if (words.includes(searchTerm)) {
         messageDiv.innerHTML = searchTerm + " " + "is in the dictionary";
      } else if (!words.includes(searchTerm)) {
         messageDiv.innerHTML = searchTerm + " " + "is not in the dictionary";
      }
   } else if (searchTerm.length === 0) {
      messageDiv.innerHTML = "You need to type a word first";
   }
}
