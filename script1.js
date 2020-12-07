var obj={name: 'RajiniKanth', age: 33, hasPets : false};
function value(obj){
    var d=Object.values(obj);
    return d;
}
var ans=value(obj);
console.log(ans);