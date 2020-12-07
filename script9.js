var stu = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    
   ];
   function minor(stu){
       var d=[];
       for(var i in stu){
           if(stu[i].age<20)
           d.push(stu[i]);
       }
       return d;
   }
   var ans=minor(stu);
   console.log(ans);