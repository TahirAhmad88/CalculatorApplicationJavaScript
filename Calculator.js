// It's about Classic Calculator Project.

//The whole line saves that element in display so you can change its value later.
const display = document.querySelector('.value'); 
const buttons = document.querySelectorAll('button'); //It gets all buttons.

buttons.forEach((item) => { //Loops through each button, item is an arrow function &
    item.onclick = () => { //sets a click handler.
      try {
        if (item.dataset.button === "C") {
            display.value = "";   //Clear the display if button value is "C".
            
        } else if (item.dataset.button === "CE") {
          let string = display.value;
          //"CE" removes the last character (backspace functionality).
            display.value = string.substr(0, string.length - 1);
            
        } else if (item.dataset.button === "=") {
            if (display.value !== "") {
              //"=" evaluates the expression using eval().
              display.value = eval(display.value);
            }
            
        } else {
          //Otherwise, append the clicked button's value to the display.
          display.value += item.dataset.button;
        }
      } catch (err) {
          //if there's an error in eval() (like invalid syntax), 
          // show "Invalid Entry" briefly,
          display.value = "Invalid Entery";
          
          //Then clear display.
        setTimeout(() => {
          display.value = "";
        }, 1000);
      }
    }
}) //Closes the onlclik function & the forEach loop.

    