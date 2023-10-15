function calculate() {
    var radius = document.getElementById("radius").value; 
    if (radius < 0) {
        document.getElementById("result").innerText = "Please enter a positive value for the radius.";
        return;
    }
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("result").innerText = "Volume of the sphere is " + volume.toFixed(2) + " cubic units.";
}