// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// Write a function that calculates the distance between two points in the space. 
"use strict"

function PointInSpace(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var point1 = new PointInSpace(3,5,1);
var point2 = new PointInSpace(5,3,1);

function calculateDistance(a, b) {
    //3d distance formula
    return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2) + Math.pow(a.z-b.z, 2));
}

console.log(calculateDistance(point1, point2));
