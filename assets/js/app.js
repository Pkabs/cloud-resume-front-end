// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Visitor Count
//var apiUrl = "https://oazo4az62f.execute-api.us-east-1.amazonaws.com/dev";
var apiUrl = "https://m2x5g2t4vb.execute-api.us-east-1.amazonaws.com/terradev/VisitorCount";
console.log("At fetching Visitor Count from API...")
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("counterbody").innerHTML = data;
    console.log("Visitor Count fetched "+data)
  })
  .catch(error=>console.log(error));

/*
var apiUrl = "https://jpd2i9ev77.execute-api.us-east-1.amazonaws.com/dev";
console.log("At trying to fetch Api...")
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var count = document.getElementById('counterbody');
    count.innerHTML = data.body;
    console.log(data)
  });
  */
