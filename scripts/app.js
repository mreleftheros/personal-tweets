let tweets;

// check localstorage for tweets item and assign it to tweets variable
const updateFromLocalStorage = () => {
  tweets = (localStorage.tweets) ? JSON.parse(localStorage.getItem("tweets")) : [];
};

// events
window.addEventListener("DOMContentLoaded", updateFromLocalStorage);