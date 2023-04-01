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

//3 Utilize if/else para escrever um código que retorne o maior de três números. 
//Defina, no começo do seu código, três variáveis com os valores que serão comparados.

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

//4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro,
//retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo,
//e “zero”, caso esse valor não seja nem positivo nem negativo.
console.log ("\nquestão04");

let valorRecebido = 2;
let valorRecebido1 = 2;

if (valorRecebido > valorRecebido1) {
    console.log ("positive");
}
else if (valorRecebido < valorRecebido1) {
    console.log ("negative");
}
else {
    console.log ("zero");
}

//5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com
// os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos
//  representarem os ângulos de um triângulo e false, caso contrário. Se algum
//  ângulo for inválido, você deve retornar uma mensagem de erro.

console.log ("\nquestão 05");

let angulo1 = true;
let angulo2 = true;
let angulo3 = true;

if (angulo1 && angulo2 && angulo3) {
    console.log ("São ângulos de um triangulo");
} else {
    console.log ("Erro, não são ângulos de um triângulo");
}

console.log ("\nquestão 07");
//7 - Utilize if/else para escrever um código que
//    converta uma nota dada em porcentagem (de 0 a 100)
//    em conceitos de A a F. Siga as seguintes regras:

let notaGessica = 40;

if (notaGessica > 80 && notaGessica <= 100) {
    console.log ("Parabéns Gessica, sua nota é -A-");
}
else if (notaGessica > 60 && notaGessica <= 80) {
    console.log ("Parabéns Gessica, sua nota é -B-");
}
else if (notaGessica > 40 && notaGessica <= 60) {
    console.log ("Gessica, sua nota é  -C-");
}
else if (notaGessica > 20 && notaGessica <= 40) {
    console.log ("Gessica, sua nota é -D-, precisa estudar");
}
else if (notaGessica > 1 && notaGessica <= 20) {
    console.log ("Gessica, você está reprovada com -E-");
}
else {
    console.log ("Você perdeu de ano com nota -F-");
}

console.log ("\nquestão 08");
//8 - Utilize if/else para escrever um código que defina três números em 
//    variáveis e retorne true se pelo menos uma das três for par. Caso 
//    contrário, o código deve retornar false.

let numberOne = 8;
let numberTwo = 3;
let numberThree = 5;

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
    console.log ("Existe pelo menos um número par entre eles");
} else {
    console.log ("Existe somente números ímpares");
}