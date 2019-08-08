console.log('A');
console.log('B');
if(true){
  console.log('C1');
}

var args = process.argv;
console.log(args[2]);

var number = [1, 4000, 12, 34, 5];
var total = 0;
for( i = 0; i < number.length; i++){
  total += number[i];
}
console.log(`total = ${total}`);
