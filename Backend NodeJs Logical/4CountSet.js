 
    function countBits(number) {      
        // log function in base 2 
        // take only integer part
        return Math.floor(Math.log2(number)+1);
      }
     
      // Driven program       
   
      let num = 65;
      console.log(countBits(num));