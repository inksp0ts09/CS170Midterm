function createRectangle(x, y, length, width) {
    return {
        "x": x,
        "y": y,
        "length": length,
        "width": width,
    }
}

let rectangle1 = createRectangle(0, 0, 20, 30);
let rectangle2 = createRectangle(4, 5, 40, 60);

console.log("Rectangle 1 - Width:", rectangle1.width, "Length:", rectangle1.length);
console.log("Rectangle 2 - Width:", rectangle2.width, "Length:", rectangle2.length);