// Adicionando Variáveis
let nome = "Manderson";
let qtdXp = 1520;
let nivel;

// Inserindo estrutura condicional
if (qtdXp <= 1000) {
  nivel = "Ferro";
} else if (qtdXp >= 1001 && qtdXp <= 2000) {
  nivel = "Bronze";
} else if (qtdXp >= 2001 && qtdXp <= 5000) {
  nivel = "Prata";
} else if (qtdXp >= 5001 && qtdXp <= 7000) {
  nivel = "Ouro";
} else if (qtdXp >= 7001 && qtdXp <= 8000) {
  nivel = "Platina";
} else if (qtdXp >= 8001 && qtdXp <= 9000) {
  nivel = "Ascendente";
} else if (qtdXp >= 9001 && qtdXp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
