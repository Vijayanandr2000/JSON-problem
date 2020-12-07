var array = ['GUVI', 'I', 'am', 'Geek'];
function obj(array){
    var o={};
    o[array[0]]=array[array.length-1];
    return o;
}
var ans=obj(array);
console.log(ans);