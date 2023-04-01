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

console.log ("\nquestão 08");
//8 - Utilize if/else para escrever um código que defina três números em 
//variáveis e retorne true se pelo menos uma das três for par. Caso 
//contrário, o código deve retornar false.

console.log ("\nquestão 09");
//9 - Utilize if/else para escrever um código que defina três números
//    em variáveis e retorne true se pelo menos uma das três for ímpar. 
//    Caso contrário, o código deve retornar false.

let ab = 8;
let cd = 4;
let as = 3;

let impar = false;

if (ab % 2 !== 0 || cd % 2 !== 0 || as % 2 !== 0) {
    impar = true;
}
console.log(impar);

console.log ("\nquestão 10");
//10 - Utilize if/else para escrever um código que se inicie com dois
//   valores em duas variáveis diferentes: o custo de um produto e 
//   seu valor de venda. A partir dos valores, o código deve calcular
//   o lucro (ou seja, o valor de venda menos o custo do produto) 
//   da empresa ao vender mil produtos.

let custoProduto = 7*1000;
let valorVenda = 2*1000;
let lucro = valorVenda - custoProduto; 

if (valorVenda > custoProduto) {
    console.log ("O lucro da empresa foi de R$ "+ lucro );
} else {
    console.log ("A empresa ficou no prejuizo de R$ "+ lucro)
}

// 11 - Utilize if/else para escrever um código que, dado um
// salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil 
// tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1.500,10, por exemplo, deve
// ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

// De olho na dica 👀: Que tal identificar as alíquotas com variáveis de nomes explicativos?
