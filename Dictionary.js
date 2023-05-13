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

function searchForWords() {
   let searchTerm = searchInput.value;
   let messageDiv = document.getElementById("message");
   if (words.length === 0 && searchTerm !== 0) {
      messageDiv.innerHTML = "There are no words in the dictionary yet";
   }
   if (searchTerm.length !== 0) {
      for (let i = 0; i < words.length; ++i) {
         if (searchTerm === words[i]) {
            messageDiv.innerHTML = searchTerm + " " + "is in the dictionary";
         } else if (searchTerm !== words[i]) {
            messageDiv.innerHTML = searchTerm + " " + "is not in the dictionary";
         }
      }
   } else if (searchTerm.length === 0) {
      messageDiv.innerHTML = "You need to type a word first";
   }
}
