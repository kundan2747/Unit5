function Automobile(type, engine, fuel) {
  this.type = type;
  this.engine = engine;
  this.fuel = fuel;
}
var car1 = new Automobile("fourwheeler", "BS6", "petrol");
var car2 = Object.create(car1);
console.log(car1, car2);
