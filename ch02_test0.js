var result = 0;

console.time('duration_time');

for (var i = 1; i <= 1000; i++)
{
    result += 1;
}

console.timeEnd('duration_time');
console.log('1부터 1000까지 더한 결과물 : %d', result);

var Person = {name:"소녀시대", age:20};
console.dir(Person);

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2)
{
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index) {
    console.log(index + ' : ', item);
});

console.dir(process.env);

console.log('OS Environment Value : ' + process.env['PWD']);