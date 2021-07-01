const tweetsForm = document.getElementById("tweetsForm");
let tweets;

// check localStorage for tweets item and assign it to tweets variable
const updateFromLocalStorage = () => {
  tweets = (localStorage.tweets) ? JSON.parse(localStorage.getItem("tweets")) : [];
};

// add new tweet to tweets array
const addTweet = e => {
  e.preventDefault(); // prevent default behaviour of form
  
  let newTweet = tweetsForm.add.value;
  if(newTweet) {
    newTweet = newTweet.trim();

    tweets.push(newTweet); // add to array
    localStorage.setItem("tweets", JSON.stringify(tweets)) // add to localStorage
  }
  
  e.target.reset();
}

// events
window.addEventListener("DOMContentLoaded", updateFromLocalStorage);
tweetsForm.addEventListener("submit", addTweet);