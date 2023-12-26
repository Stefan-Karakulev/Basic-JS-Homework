function storyTeller() {
   
    let who = document.getElementById("who").value;
    let what = document.getElementById("what").value;
    let when = document.getElementById("when").value;
    
    
    let story = `${who} ${what} ${when}!`;
  
    
    let story1 = document.getElementById("story");
    storyOutput.textContent = story;
  }
