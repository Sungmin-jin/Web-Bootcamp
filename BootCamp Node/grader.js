function avg(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total/arr.length;
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(avg(scores1));
console.log(avg(scores2));