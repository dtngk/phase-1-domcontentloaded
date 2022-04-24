// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const message = document.getElementById("text");
    text.innerHTML = "This is really cool!";
    text.appendChild(text);
});
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );