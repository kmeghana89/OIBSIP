let workingStatusEl = document.getElementById("status");
let inputDegreesEl = document.getElementById("input-degrees");
let resultTempEl = document.getElementById("result-temp");
let convertBtn = document.getElementById("convert-button");
let convertTextEl = document.getElementById("converted-degrees-title");

let formData = {
    status: "Fahrenheit",
};

workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(formData.status);
});

convertBtn.addEventListener("click", () => {
    let degrees = inputDegreesEl.value;
    // const valueEl = (parseInt(degrees)).isNaN;
    // console.log(valueEl);
    if (degrees === "") {
        alert("Enter Valid Degrees to Convert");
    } else if (isNaN(degrees)) {
        alert("not a valid degrees");
    } else if (formData.status === "Fahrenheit") {
        degrees = parseInt(degrees);
        console.log(degrees);
        const celcius = (degrees - 32) * 5 / 9;
        resultTempEl.textContent = celcius + " °C";
        convertTextEl.textContent = "Converted Degrees in Celcius";
        convertTextEl.style.toggle.color = "red";
    } else if (formData.status === "Celcius") {
        degrees = parseInt(degrees);
        const celcius = (degrees * (9 / 5)) + 32;
        resultTempEl.textContent = celcius + " °F";
        convertTextEl.textContent = "Converted Degrees in Fahrenheit";
        convertTextEl.style.toggle.color = "red";
    }

});
