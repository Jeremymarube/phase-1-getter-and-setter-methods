// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter for diameter
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  // Getter for circumference
  get circumference() {
    return Math.PI * this.diameter; // π * diameter
  }

  // Setter for circumference
  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }

  // Getter for area
  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter for area
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}

// Example usage:
const c = new Circle(5);
console.log(c.diameter);       // 10
console.log(c.circumference);  // ~31.4159
console.log(c.area);           // ~78.5398

c.diameter = 20;
console.log(c.radius);         // 10

c.circumference = 62.8318;
console.log(c.radius);         // ~10

c.area = 314.159;
console.log(c.radius);         // ~10
