function CreateUser(name, place, skill) {
  this.name = name;
  this.place = place;
  this.skill = skill;
}
var Amar = new CreateUser("Amar", "Goa", "singer");
var Akbar = new CreateUser("Akbar", "Mumbai", "Chef");
var Anthony = new CreateUser("Anthony", "Kashmir", "Magician");
Amar.skill = Akbar.skill;
console.log(Amar.skill);
