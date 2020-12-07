var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
//console.log(array[1][0]);
function obj(array){
    var o={};
    for(var i in array){
        o[array[i][0]]=array[i][1];
    }
    return o;
    
}
var ans=obj(array);
console.log(ans);