document.addEventListener("DOMContentLoaded", function () {
    const calculate = document.getElementById("calculate");
    calculate.addEventListener("click", calculateBMI);
});

const panels=document.querySelectorAll('.panel');
const extra=document.getElementById("extra");

panels.forEach((panel)=>{
    panel.addEventListener("click",function(){
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}

function calculateBMI() {
    console.log("Smth");
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    }
  
    var bmi = weight / ((height / 100) ** 2);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
    extra.innerHTML ="Check out our other work:"
  }