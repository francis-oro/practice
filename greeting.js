/* Greet the user based on the current time */
const time = new Date().getHours();
    let greeting
    if (time < 10) {
    greeting = "Good morning";
    } else if (time < 20) {
    greeting = "Good day";
    } else {
    greeting = "Good evening";
    }
    document.getElementById("p10-greeting").innerHTML = greeting;