var bulb = document.querySelector("#bulb")
var button = document.querySelector("#on")

var flag = 0

button.addEventListener("click", function () { 
    if (flag == 0) {
          
        bulb.style.backgroundColor = "yellow"
        console.log("Clicked");
        flag = 1
    }
    else { 
        bulb.style.backgroundColor = "transparent"
        console.log("Unclicked");
        flag = 0
    }
})
