/* Opcion 1


var num=[2,6,13,3,5];

for (i=0; i<num.length;i++){
    for (j=0; j<num.length-i-1;j++){
        if(num[j]>num[j+1]){
            [num[j], num[j+1]] = [num[j+1], num[j]];
        } 
    }
}

console.log(num);


*/


/* Opcion 2

var num = [4, 2, 5, 1, 3];
num.sort(function(a, b) {
  return a - b;
});
console.log(num);


*/