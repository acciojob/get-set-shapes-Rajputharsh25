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
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // A square is a rectangle where width = height = side
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Attach to window for Cypress tests to access
window.Rectangle = Rectangle;
window.Square = Square;
