// Create class with name "Shape"
// It must have 2 private fields: "name" and "color"
// You must initialize them in constructor
// Create method "getInfo", it must return string "My color is 'color', my name is 'name'"
// Create child class with name "Rectangle" and add constructor

class Shape {
    #name;
    #color;

    constructor(name, color) {
        this.#name = name;
        this.#color = color;
    };

    getInfo() {
        return `My color is ${this.#color} and my name is ${this.#name}`;
    };

    getName() {
        return this.#name;
    };

    getColor() {
        return this.#color;
    };
};

// Add 2 more fields "sideA" and "sideB". They can take non-integer values, for example 5.25
// You must initialize them in constructor
// Override method "getInfo". It must also return information about sides ("my sideA is 'sideA', my sideB is 'sideB'")
class Rectangle extends Shape {
    sideA; 
    sideB;

    constructor(name, color, sideA, sideB){
        super(name, color);
        this.sideA = sideA;
        this.sideB = sideB;
    };

    getInfo() {
        let parentInformation = super.getInfo();
        return `${parentInformation}, my sideA is: ${this.sideA} and my sideB is: ${this.sideB}`;
    };
}
// Create class "Circle". It's also child of "Shape", but instead of sides it must have "radius" field
class Circle extends Shape {
    radius;
}
// Create class "ShapeCalculator". Add static method with name "calculateArea" that takes Shape object as parameter
// In this method check. If Shape type is Rectangle → multiply sideA and sideB. If Shape type is Circle → multiply radius twice
// In else (if it is not Circle or Rectangle) throw exception with text "This shape is not supported"
class ShapeCalculator {
    static calculateArea(shapeObj) {
        if (shapeObj.constructor == 'Rectangle') {
            return shapeObj.sideA * shapeObj.sideB;
        } else if (shapeObj.constructor == 'Circle') {
            return shapeObj.radius * shapeObj.radius;
        } else {
            let myErrorShape = new Error('This shape is not supported');
            throw myErrorShape;
        }
    };
}
// Create "ShapePrinter" class. Create static method with name "printInfo". It must take Shape as parameter
// Print information about Shape (using getInfo method) + print area of the shape
// As you remember CalculateArea can throw an Exception. Let's Handle this exception
// Let's overload the method, it must take List of Shapes as argument
// It must print information about each Shape in the list

class ShapePrinter {
    static printInfo(shapeObj) {
        if (shapeObj instanceof 'Array') {
            for (const shape of shapeObj) {
                console.log(`shape: ${shape.getInfo()}`);
            };
        } else {
            shapeObj.getInfo();
            try {
                ShapeCalculator.calculateArea(shapeObj);
            } catch (error) {
                console.error(error.message);
            };
        };
    };
};
 
// Go back to ShapeCalculator or create new class "ShapeUtility" or something like that
// Create method that returns List of Shapes and gets List of shapes as Parameter. Name is "FilterShapes". Add 2 more fields "minArea" and "maxArea"
// You must filter collection. To return list with shapes that have area between minArea and maxArea (more than minArea and less than maxArea). Use lambda
class ShapeUtility {
    static filterShapes(listOfShapes, minArea, maxArea) {
        return listOfShapes.filter((shape) => {
            ShapeCalculator.calculateArea(shape) >= minArea && ShapeCalculator.calculateArea(shape) <= maxArea;
        });
    };
    static fileterShapesByInfoPart(listOfShapes, infoPart) {
        return listOfShapes.filter((shape) => {
            shape.getName().includes(infoPart) || shape.getColor().includes(infoPart);
        });
    };
};


// Create new method, but instead of minArea and maxArea it has second parameter "infoPart"
// Filter collection to return only shapes that contains InfoPart in name or color
 