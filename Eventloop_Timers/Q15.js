function countdown(seconds) {
  const intervalId = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(intervalId);
      console.log("Countdown finished!");
    }
  }, 1000);
  setTimeout(() => {
    console.log("checking for key press 's' to stop...");
  }, 100);
}
countdown(5);