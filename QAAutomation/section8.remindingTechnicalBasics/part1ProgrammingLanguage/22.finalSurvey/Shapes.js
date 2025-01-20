"use strict";
// Create class with name "Shape"
// It must have 2 private fields: "name" and "color"
// You must initialize them in constructor
// Create method "getInfo", it must return string "My color is 'color', my name is 'name'"
class Shape {
    #name = String();
    #color = String();
    constructor(name, color) {
        this.#name = name;
        this.#color = color;
    };
    getInfo() {
        return `My color is: ${this.#color}, my name is: ${this.#name}.`;
    };
};
// Create child class with name "Rectangle" and add constructor
// Add 2 more fields "sideA" and "sideB". They can take non-integer values, for example 5.25
// You must initialize them in constructor
// Override method "getInfo". It must also return information about sides ("my sideA is 'sideA', my sideB is 'sideB'")
class Rectangle extends Shape {
    sideA = Number();
    sideB = Number();
    constructor(sideA, sideB) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
    };
    getInfo() {
        return `My sideA is ${this.sideA}, my sideB is ${this.sideB}.`;
    };
};

// Create class "Circle". It's also child of "Shape", but instead of sides it must have "radius" field
class Circle extends Shape {
    radius = Number();
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    };
};

// Create class "ShapeCalculator". Add static method with name "calculateArea" that takes Shape object as parameter
// In this method check. If Shape type is Rectangle → multiply sideA and sideB. If Shape type is Circle → multiply radius twice
// In else (if it is not Circle or Rectangle) throw exception with text "This shape is not supported"
class ShapeCalculator {
    static calculateArea(shapeObj) {
        if (shapeObj instanceof Rectangle) {
            return shapeObj.sideA * shapeObj.sideB;
        } else if (shapeObj instanceof Circle) {
            return shapeObj.radius * shapeObj.radius;
        };
    };
};

// Create "ShapePrinter" class. Create static method with name "printInfo". It must take Shape as parameter
// Print information about Shape (using getInfo method) + print area of the shape
// As you remember CalculateArea can throw an Exception. Let's Handle this exception
// Let's overload the method, it must take List of Shapes as argument
// It must print information about each Shape in the list
class ShapePrinter {
    static printInfo(shapeObj) {
        console.log(shapeObj.getInfo() + '\n' + ShapeCalculator.calculateArea(shapeObj));
    };
};

// Go back to ShapeCalculator or create new class "ShapeUtility" or something like that
// Create method that returns List of Shapes and gets List of shapes as Parameter. Name is "FilterShapes". Add 2 more fields "minArea" and "maxArea"
// You must filter collection. To return list with shapes that have area between minArea and maxArea (more than minArea and less than maxArea). Use lambda
class ShapeUtility {
    minArea = Number();
    maxArea = Number();
    constructor(minArea, maxArea) {
        this.minArea = minArea;
        this.maxArea = maxArea;
    };
    filterShapes(shapesList) {
        let filteredShapesList = shapesList.filter((shape) => {
            let area = ShapeCalculator.calculateArea(shape);
            return (area > this.minArea) && (area < this.maxArea);
        });
        return filteredShapesList;
    };
    filterShapesByInfoPart(shapesList, infoPart) {
        let filteredShapes = shapesList.filter((shape) => {
            return (shape.getInfo().includes(infoPart[0])) || (shape.getInfo().includes(infoPart[1]));
        });
        return filteredShapes;
    };
};
let rectangle1 = new Rectangle(4, 6);
let circle1 = new Circle('circle #1', 'pink', 5);
let rectangle2 = new Rectangle(5, 9);
let shapesList = [rectangle1, rectangle2, circle1];

let shapeUtility1 = new ShapeUtility(23, 50);
let filteredShapes = shapeUtility1.filterShapes(shapesList);
console.log(filteredShapes);
console.log();

// Create new method, but instead of minArea and maxArea it has second parameter "infoPart"
// Filter collection to return only shapes that contains InfoPart in name or color
let fileredShapesByNameOrColor = shapeUtility1.filterShapesByInfoPart(shapesList, ['circle#1', 'pink']);
console.log(fileredShapesByNameOrColor);