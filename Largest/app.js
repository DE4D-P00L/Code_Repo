var arr = new Array(6);

for (var i = 0; i < arr.length; i++){
    arr[i] = parseInt(prompt(`Enter ${i}th Element`," "));
}

var x = arr[0],i,loc=0;
for (i = 0; i < arr.length; i++){
    if(x<arr[i]){
        x = arr[i];
        loc = i;
    }
}

var loc2,t=loc;
x = (t==0)? arr[1]: arr[0];
for (i = 0; i <arr.length; i++){
    if(i!=t){
        if(x<=arr[i]){
            x = arr[i];
            loc2 = i;
        }
    }
}


document.write(`Largest element is ${arr[loc]} <br/>`);
document.write(`Second largest element is ${arr[loc2]}`);

console.log(arr)
