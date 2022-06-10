function removeColon( s)
{
    if (s.length == 4)
        s= s.replace(":", "");
     
    if (s.length == 5)
        s= s.replace(":", "");
     
    return parseInt(s);
}
 
// Main function which finds difference
function diff( s1,  s2)
{
 
    // change string (eg. 2:21 --> 221, 00:23 --> 23)
     time1 = removeColon(s1);
    
     time2 = removeColon(s2);
     
 
    // difference between hours
     hourDiff = parseInt(time2 / 100 - time1 / 100 - 1);
 
    // difference between minutes
     minDiff = parseInt(time2 % 100 + (60 - time1 % 100));
 
    if (minDiff >= 60) {
        hourDiff++;
        minDiff = minDiff - 60;
    }
  
    // convert answer again in string with ':'
    res = (hourDiff).toString() + ':' + (minDiff).toString();
    return res;
}
 
// Driver program to test above functions
    s1 = "14:00";
    s2 = "16:45";
    console.log(diff(s1, s2));
     