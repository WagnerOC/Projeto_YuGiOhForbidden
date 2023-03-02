var nome = prompt("Digite seu nome: ")
var idade = prompt("Digite sua idade: ")

if (idade >= 10) {
  alert("Seja-bem vindo " + nome + "!\n"
  + "Às Dicas de Yu-Gi-Oh! Forbidden Memories !\n"
  + "Sua idade é " + idade + " anos. Compatível para acessar o site!")
}else{
  alert("Seja bem vindo " + nome + "!\n"
  + "Às Dicas de Yu-Gi-Oh! Forbidden Memories !\n"
  + "Infelizmente sua idade não é compatível para acessar as dicas do Game \n" 
  + ":(")
}