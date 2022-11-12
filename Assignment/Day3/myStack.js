function Stack() {
  this.arr = [];
}
var myStack = new Stack();
console.log(myStack);

Stack.prototype.push = function (val) {
  this.arr.push(val);
};

Stack.prototype.pop = function () {
  this.arr.pop();
};
Stack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};
Stack.prototype.print = function () {
  console.log(this.arr);
};
Stack.prototype.printReverse = function () {
  var revarr = [];
  for (var i = this.arr.length - 1; i >= 0; i--) {
    revarr.push(this.arr[i]);
  }
  console.log(revarr);
};
Stack.prototype.size = function () {
  return this.arr.length;
};

myStack.push(5);
myStack.push(15);
myStack.push(55);

console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.top());

myStack.print();
myStack.printReverse();
myStack.print();
console.log(myStack.size());
