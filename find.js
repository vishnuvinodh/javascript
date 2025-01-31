function sent(word) {
    let p = word.split(" "); // Split the sentence into an array of words
    let longest = ""; // Initialize a variable to store the longest word
  
    for (let i = 0; i < p.length; i++) {
      if (p[i].length > longest.length) {
        longest = p[i]; // Update 'longest' if the current word is longer
      }
    }
    return longest; // Return the longest word
  }
  
  console.log(sent("Find the Longest Word in a Sentence"));
  


