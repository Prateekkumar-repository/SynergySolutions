function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i].toUpperCase()
    }

    return str.join(" ");
}

console.log(capital_letter("Convert all words characters to capital letters"));