class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

const rectangle1 = new Rectangle(3, 4);
const triangle1 = new Triangle(5, 4);

console.log(rectangle1.getArea());
console.log(triangle1.getArea());
