    let str = "Hello NodeJs"
    let count = 0;
    for(var i=0; i<str.length;i++)
    {
        if(str.charAt[i]==='\n'){
            count++
        }
    }
    
    const noOfWords = str.split(" ").length;
    console.log(`No of words are ${noOfWords}`);
    console.log(`No of lines are ${count}`);