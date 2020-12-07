var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
//console.log(array[0][1][0]);
function obj(array){
    var d=[];
    for(var i=0;i<array.length;i++){
        var o={};
        for(var j=0;j<array[i].length;j++){
            
            o[array[i][j][0]]=array[i][j][1];
        }
        d.push(o);
    }
    return d;
}
var ans=obj(array);
console.log(ans);