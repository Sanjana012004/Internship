// Selecting button element
var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

var monday=["ECO323", "IFS353", "MAN305", "IFS362"];
var tuesday=["IFS353", "MAN305"];
var wednesday=["IFS362", "MAN303", "EC0341"];
var thursday=["IFS353", "MAN302", "STATS302"];
var friday=["No class! YAY! :)"];

//when hover over button change colour
function setHoverColor() {
    btn.style.background = "#DC143C";
}

//when not hovering restore to normal colour
function setNormalColor() {
    btn.style.background = "";
}

// Assigning event listeners to the button
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);

function printTimetable() {
    // Clear the container first so schedules don't stack on top of each other
    container.innerHTML = "";

    // Monday's Timetable
    if (userInput.value === "Monday") {
        for (var i = 0; i < monday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    // Tuesday's Timetable
    if (userInput.value === "Tuesday") {
        for (var i = 0; i < tuesday.length; i++) {
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(tuesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    // Wednesday's Timetable

// Wednesday's Timetable
if (userInput.value === "Wednesday") {
    container.innerHTML = ""; // Clears previous day's text
    for (var i = 0; i < wednesday.length; i++) {
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(wednesday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}

// Thursday's Timetable
if (userInput.value === "Thursday") {
    container.innerHTML = "";
    for (var i = 0; i < thursday.length; i++) {
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(thursday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}

    // Friday's Timetable
    if (userInput.value === "Friday") {
    container.innerHTML = ""; // Clears previous day's text

    // 1. Create the "No class" text
    var paraText = document.createElement("p");
    var paraNode = document.createTextNode("No class! YAY! :)");
    paraText.appendChild(paraNode);
    container.appendChild(paraText);

    // 2. Create the Image element
    var fridayImg = document.createElement("img");
    
    // 3. Attach the local file (Make sure the name matches exactly!)
    fridayImg.src = "friday-meme.jpg"; 
    
    // Optional: Set a width so it doesn't take up the whole screen
    fridayImg.style.width = "400px";
    fridayImg.style.display = "block";
    fridayImg.style.marginTop = "10px";

    // 4. Add the image to the container
    container.appendChild(fridayImg);
}
}