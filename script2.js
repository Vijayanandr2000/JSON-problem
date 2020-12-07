var obj={name: 'RajiniKanth', age: 33, hasPets : false};
function key(obj){
    var d=Object.keys(obj);
    return d;
}
var ans=key(obj);
console.log(ans);