// Rectangle Class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate area
    getArea() {
        return this._width * this._height;
    }
}


// Square Class (inherits from Rectangle)
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // sets width and height equal
    }

    // Method to calculate perimeter
    getPerimeter() {
        return this.width * 4;
    }
}


// Make classes available globally for Cypress tests
window.Rectangle = Rectangle;
window.Square = Square;


// Optional test examples
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);      // 5
console.log(rectangle.height);     // 10
console.log(rectangle.getArea());  // 50

const square = new Square(7);
console.log(square.width);         // 7
console.log(square.height);        // 7
console.log(square.getArea());     // 49
console.log(square.getPerimeter()); // 28
