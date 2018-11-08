console.log("FOR")
var myAge = 15;
for (var x = 0; x <= myAge ; x = x + 3){
    console.log(x);
    if( x === myAge - 3){
        console.log("alert")
    } 
} 
console.log("WHILE")
var y = 0;
while (y <= myAge){
    console.log(y);
    y = y + 3;
    if (y === myAge){
        console.log("alert")
    }
}
console.log("DO-WHILE")
var z = 3;
do {
    console.log(z);
    z = z + 3;
    if(z === myAge){
        console.log("alert")
    }
} while(z <= myAge)