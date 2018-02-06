

function args(){

     var index = arguments.length;
     var sum =0;

     for(i=0;i<arguments.length;i++){
      
        sum += arguments[i];
       
     }
     
     return sum/index;

     
}

 var x = args(10,5);

 console.log(x)

