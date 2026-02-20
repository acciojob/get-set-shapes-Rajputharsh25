class Rectangle {
  constructor(width, height) {
    // Standard practice uses an underscore to indicate a "private" backing property
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
    // Calls the Rectangle constructor with 'side' for both width and height
    super(side, side);
  }

  // Method to calculate perimeter specifically for Square
  getPerimeter() {
    return 4 * this.width;
  }
}

// Expose classes to the window object for Cypress test accessibility
window.Rectangle = Rectangle;
window.Square = Square;
