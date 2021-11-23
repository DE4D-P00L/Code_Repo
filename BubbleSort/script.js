var arr = [];
var n = parseInt(prompt("Enter Size of Array",3));

for (var i = 0; i <n; i++){
    arr[i] = parseInt(prompt("Enter element",3));
}

document.writeln("<h3>Array Before Sorting </h3></br>");
printArr(arr);
BubbleSort(arr);
document.writeln("</br><h3>Array After Sorting </h3></br>");
printArr(arr);

function BubbleSort(array) {
    for (var i = 0; i < array.length-1; i++) {
        for (var j = 0; j < array.length-i-1;j++){
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}


function printArr(array){
    array.forEach((elem)=>{
        document.writeln(elem+"</br>");
    })
}
