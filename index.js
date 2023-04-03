function divide(percentage) {
    // Get the values from the input fields
    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);
    if (num2 > 0 && num2 < 100000) {
      num2 = num2;
      document.getElementById("num2").setAttribute("type", "number");
      document.getElementById("num1").value = num1;
    }
    else {
      const input = document.getElementById("num2");
      input.setAttribute("type", "text");
      document.getElementById("num2").value = "Number should be from 0 to 100";
    }
    let num3 = Number(document.getElementById("num3").value);
    
  
    // Set the default value of the result to zero
    let result = 0;
    let tip = 0;
  
    // Perform division operation || && num3 !== 0

    // else if(num2 !== 0 && num3 !== "Custom" && num3 !== 0){
    //   result = num1 / num2;
    //   tip = ((num1 * num3) / 100)/num2;
    //   total = result+tip;
    // }

    if (num2 !== 0 ) {
      result = num1 / num2;
      tip = ((num1 * percentage) / 100)/num2;
      total = result+tip;
    }

    if (num3 !== 0 ){
      result = num1 / num2;
      tip = ((num1 * num3) / 100)/num2;
      total = result+tip;
    }
    // Display the result back in the HTML with 2 digits after the decimal point
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("tip").textContent = tip.toFixed(2);
  }

  function reset() {
    // Reset the input fields to empty
    document.getElementById("num1").value = "0";
    document.getElementById("num2").value = "0";
    document.getElementById("num3").value = "";
  
    // Reset the result to zero
    document.getElementById("total").textContent = "0.00";
    document.getElementById("tip").textContent = "0.00";
  }

  function setCustom() {
    num3 = "Custom";
  }