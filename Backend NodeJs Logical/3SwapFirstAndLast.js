let num = 23721693;
let temp = "";
let answer = "";

for(let i = 0 ; i < num.length; i++) {
    if (i === 0) temp = num[i]; // save first number to temp
    else if (i === num.length - 1) {
        // When the last number is encountered, the last number is put at the beginning, and the first number stored in temp is put at the end.
        answer = answer + temp;
        answer = num[i] + answer;
    }
    else answer = answer + num[i];
}
console.log(answer);