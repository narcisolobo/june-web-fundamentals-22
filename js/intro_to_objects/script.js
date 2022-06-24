var myCar = {
  make: "Hyundai",
  model: "Kona",
  year: 2020,
  color: "Lime Twist",
  beep: function () {
    console.log("Beep Beep, Sucka!");
  },
  drive: function () {
    console.log("Driving...")
  },
  stats: function () {
    console.log(
      this.make,
      this.model,
      this.year,
      this.color
    )
  }
}
// Get and set values in an object using dot notation.
console.log(myCar.model);
myCar.year = 2022;

// Get and set values in object using bracket notation.
console.log(myCar['model']);
myCar["year"] = 2022;

myCar.beep();
myCar.drive();
myCar.stats();

console.dir(this);

var h1 = document.querySelector("#myTitle");
console.log(h1);
h1.innerHTML = "This is using innerHTML";

h1.style.backgroundColor = "red";
h1.remove();