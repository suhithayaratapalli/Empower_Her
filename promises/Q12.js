function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Testing the timer function
timer(3000, (message) => {
    console.log(message);
});
