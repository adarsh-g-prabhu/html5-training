class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
        console.log("Area : "+this.height*this.width);
    }
  }

const rect = new Rectangle(5,6);
rect.area();


class Hat
{
    display()
    {

        console.log("hat guy");
    }
}
class Cap extends Hat{
    display()   
    {
        console.log("Cap guy");
        super.display();
    }

}

const count = 647997.7349;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,).format(count)}`,
  );
}

log("hi-in");
log("en-uk");

import {foo} from "./es6.js";
console.log(foo);


let arr = new Uint8Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

console.log(...arr);
console.log(arr);