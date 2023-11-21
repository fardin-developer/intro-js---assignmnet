function calculateCircleArea(radius) {
    // Area = π * r^2
    const pi = Math.PI;
    return pi * radius*radius
  }
  

  const radius = 10;

  const area = calculateCircleArea(radius);
  console.log("Radius: " + radius);
  console.log("Area of the circle: " + Math.round(area));
  