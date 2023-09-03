document.addEventListener("keydown", function (event) {
  // Check if the key pressed is "/"
  if (event.key === "/") {
    event.preventDefault();
    document.getElementById("taskInput").focus();
  } else {
    console.log("key pressed is: +", event.key);
  }
});

var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  console.log("reset button clicked!");
  // alert("are you sure you want to clear all data");
});
