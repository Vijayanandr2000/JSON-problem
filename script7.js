var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 7}
if(JSON.stringify(expected)==JSON.stringify(actual))
console.log("true");
else
console.log("false");