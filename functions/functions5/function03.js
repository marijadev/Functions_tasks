// Initialize two arrays. The first one should contain student names, 
// the second one the number of points for each student. 
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.


function studentPoints(arr1, arr2) {
    var result = "";
    var index = 0;

    for (var i = 0; i < arr1.length; i++) {

        if ( arr2[i] > 50 && arr2[i] <= 60 ) {
            index = i;
            console.log(result = arr1[index] + " acquired " + arr2[i] + " points and earned 6");
        } else if ( arr2[i] > 60 && arr2[i] <= 70 ){
            index = i;
            console.log(result = arr1[index] + " acquired " + arr2[i] + " points and earned 7");
        } else if ( arr2[i] > 70 && arr2[i] <= 80 ){
            index = i;
            console.log(result = arr1[index] + " acquired " + arr2[i] + " points and earned 8");
        } else if ( arr2[i] > 80 && arr2[i] <= 90 ){
            index = i;
            console.log(result = arr1[index] + " acquired " + arr2[i] + " points and earned 9");
        } else {
            index = i;
            console.log(result = arr1[index] + " acquired " + arr2[i] + " points and earned 10");
        }
    }
    return result;
}

console.log(studentPoints(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));
