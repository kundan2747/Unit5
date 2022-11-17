class myArr {
  constructor() {
    this.array = [];
    this.size = 0;
  }
  push(val) {
    this.array.push(val);
    this.size += 1;
  }
  pop() {
    if (this.size > 0) {
      this.array.pop();
      this.size -= 1;
    } else {
      console.log("Array is Empty");
    }
  }
  top() {
    return this.array[this.size - 1];
  }
  print() {
    console.log(this.array);
  }
  printReverse() {
    var revArr = [];
    for (var i = this.size - 1; i >= 0; i--) {
      revArr.push(this.array[i]);
    }
    console.log(revArr);
  }
  length() {
    return this.size;
  }
}

// var arr1 = new myArr();
// arr1.push(2);
// arr1.push(1);
// arr1.push(3);
// arr1.print();
// arr1.printReverse();
// console.log(arr1.length());
// arr1.pop();
// console.log(arr1.length());
// arr1.print();

