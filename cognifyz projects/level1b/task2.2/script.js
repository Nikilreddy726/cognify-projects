// Get the current hour
const currentHour = new Date().getHours();

// Determine the appropriate greeting
let greeting;
if (currentHour < 12) {
  greeting = "Good Morning!";
} else if (currentHour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

// Display the greeting in an alert box
alert(greeting);
