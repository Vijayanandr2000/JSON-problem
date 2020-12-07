var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function array(obj){
    var d=[];
    var a=Object.keys(obj);
    var b=Object.values(obj);
    for(var i in a){
        d.push([a[i],b[i]]);
    }
    return d;
}
var result=array(obj);
console.log(result);