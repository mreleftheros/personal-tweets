const tweetsForm = document.getElementById("tweetsForm");
const tweetsList = document.getElementById("tweetsList");
let tweets;

// check localStorage for tweets item and assign it to tweets variable
const updateFromLocalStorage = () => {
  tweets = (localStorage.tweets) ? JSON.parse(localStorage.getItem("tweets")) : [];
};

// add new tweet to tweets array
const addTweet = e => {
  e.preventDefault(); // prevent default behaviour of form
  
  let newTweet = tweetsForm.add.value;
  if (newTweet) {
    newTweet = newTweet.trim();

    tweets.push(newTweet); // add item to array
    localStorage.setItem("tweets", JSON.stringify(tweets)) // add array to localStorage
  }

  updateUI();

  tweetsForm.reset();
}

// display tweet on the UI
const displayTweet = tweet => {
  // create Elements
  const liElement = document.createElement("li");
  const tweetElement = document.createElement("span");
  const trashElement = document.createElement("span");

  // give classes and attributes
  liElement.classList.add("main__display__tweets__item");
  tweetElement.classList.add("main__display__tweets__item__tweet");
  trashElement.className = "main__display__tweets__item__trash trash";

  // give text content
  tweetElement.textContent = tweet;
  trashElement.textContent = "X";

  // append children
  liElement.appendChild(tweetElement);
  liElement.appendChild(trashElement);
  tweetsList.appendChild(liElement);
};

const updateUI = () => {
  tweetsList.innerHTML = "";
  
  updateFromLocalStorage();

  tweets.forEach(tweet => displayTweet(tweet));
};

// click at x and remove tweet
const removeTweet = e => {
  if (e.target.classList.contains("trash")) {
    let item = e.target.parentElement;
    let text = item.firstElementChild.textContent;

    tweets.splice(tweets.indexOf(text), 1); // remove from tweets
    localStorage.setItem("tweets", JSON.stringify(tweets)); // update localStorage
    
    updateUI()
  }
};

// events
window.addEventListener("DOMContentLoaded", updateUI);
tweetsForm.addEventListener("submit", addTweet);
tweetsList.addEventListener("click", removeTweet);