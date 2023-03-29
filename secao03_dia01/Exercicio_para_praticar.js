//1
let a = 2;
let b = 5;

if (a && b) {
    console.log (a + b);
    console.log (a - b);
    console.log (a * b);
    console.log (a / b);
    console.log (a % b);
}
else {
    console.log ("digite um valor para operações aritméticas");
}

//2
console.log ("\nquestão02");
let c = 4;
let d = 4;

if (c > d && c !== d) {
    console.log ("a variável c é maior que a d");
}
else if (c < d && c !== d) {
    console.log ("a variável d é maior que a c")
}
else {
    console.log ("As variáveis têm valores iguais")
}

//3
console.log ("\nquestão03");
let e = 10;
let f = 11;
let g = 7;

if (e > f && e > g) {
    console.log ("a variável -e- é maior que as outras");
}
else if (f > e && f > g) {
    console.log ('a variável -f- é maior que as outras');
}
else if (g > e && g > f) {
    console.log ("a variável -g- é maior que as outras");
}
else if (e === f && e > g){
    console.log ("as variáveis -e f- são as maiores");
}
else if (e === g && e > f) {
    console.log ("as variáveis -e g- são as maiores");
}
else if (f === g && g > e) {
    console.log ("as variáveis -f g- são as maiores")
} else {
    console.log ("as vaiáveis são todas iguais");
}