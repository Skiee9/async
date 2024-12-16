
let timeLeft = parseInt(prompt("Enter the number of seconds to countdown:"));
if (isNaN(timeLeft) || timeLeft <= 0) {
  console.log("Please enter a valid number greater than 0.");
} else {
  const intervalId = setInterval(() => {
    if (timeLeft > 0) {
      console.log(`Time remaining: ${timeLeft} seconds`);
      timeLeft--;
    } else {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
    }
  }, 1000);

 
  const checkKeyPress = () => {
    if (timeLeft > 0) {
      const userInput = prompt("Press 's' to stop the countdown.");
      if (userInput.toLowerCase() === "s") {
        clearInterval(intervalId);
        console.log("Countdown stopped by user.");
      } else {
        setTimeout(checkKeyPress, 1000);  
      }
    }
  };

 
  setTimeout(checkKeyPress, 1000);
}
