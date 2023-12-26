function storyTeller() {
    // Get values from input fields
    let who = document.getElementById("who").value;
    let what = document.getElementById("what").value;
    let when = document.getElementById("when").value;
    
    // Create the story
    let story = `${who} ${what} ${when}!`;
  
    // Display the story in the storyOutput div
    let story1 = document.getElementById("story");
    storyOutput.textContent = story;
  }