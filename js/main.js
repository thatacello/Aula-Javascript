var nome = "Thais Cardoso";
var idade = 32;
var idade2 = 5;
var frase = "Japão é o melhor time do mundo";

var lista = ["maçã", "pêra", "laranja"];

var fruta = { nome: "banana", cor: "amarelo"};
var frutas = [{nome: "banana", cor: "amarelo"}, {nome: "uva", cor: "verde"}, {nome: "cereja", cor: "vermelha"}];


/*var age = prompt("Qual sua idade?");
if (age >= 18) {
    alert("maior de idade!")
} else {
    alert("menor de idade!")
}*/

var count = 1;
while (count < 5){
    console.log(count);
    count++;
}

for (count = 5; count <= 8; count++){
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getMinutes());
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getSeconds());

//alert (nome + " tem " + idade);
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(idade * idade2);
console.log(idade - idade2);
console.log(idade / idade2);
console.log(frase.replace("Japão", "Brasil"));

//alert(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log(lista);
console.log(lista[1]);
//alert(lista[1]);
lista.push("uva");
console.log(lista);

lista.push("morango", "mamão");
console.log(lista);
console.log(lista.length);

lista.pop();
console.log(lista);

console.log(lista.reverse());

console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);

console.log(lista.join(" - "));
console.log(lista.join(" | "));

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

console.log(frutas);
console.log(frutas[1]);
console.log(frutas[1].nome);

function soma (n1, n2){
    return n1 + n2;
}
console.log(soma(1, 2));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("vai Japão", "Japão", "Brasil"));

function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true;

    }else {
        validar = false;
    }
    return validar;
}

//var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.google.com");
    window.location.href="https://www.google.com";
}
function trocar(){
    //alert("Passou o mouse!")
    document.getElementById("mouseMove").innerHTML = "Obrigada por passar o mouse!";
}

function voltar(){
    document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui!";
}

//função para o p sem id, recebendo o elemento
//nesse caso eu posso ter quantos elementos eu quiser, sem depender de ids.

function trocar2(elemento){
    //alert("Passou o mouse!")
    elemento.innerHTML = "Obrigada por passar o mouse!";
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    //alert("pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}