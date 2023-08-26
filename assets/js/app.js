let myInput = "";
let buttons = document.querySelectorAll(".button");

// on click on btns
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
    try {
      if (e.target.innerHTML == "=") {
        myInput = eval(myInput);
        document.getElementById("input").innerHTML = myInput;
      } else if (e.target.innerHTML == "X") {
        myInput = myInput.substr(0, myInput.length - 1);
        document.getElementById("input").innerHTML = myInput;
      } else if (e.target.innerHTML == "AC") {
        myInput = "";
        document.getElementById("input").innerHTML = myInput;
      } else {
        myInput = myInput + e.target.innerHTML;
        document.getElementById("input").innerHTML = myInput;
      }
    } catch (err) {
      //   alert("Invaild input");
      console.log(err);
      myInput = "";
      document.getElementById("input").innerHTML = myInput;
    }
  });
});
