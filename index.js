let heroi = [["Ash Ketchum",10500 ], ["Cynthia ",9500], ["Leon", 8001],
["Tobias", 7500],["Steven Stone ", 7000], ["Alain", 5000],[" Paul", 2000],["Diantha", 1000]]
let nivel = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal", "Radiante"] 

// Classificação de Xp
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
for (let i = 0; i < heroi.length; i++){

if(heroi[i][1]>=10001){
  console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[7])
}else if(heroi[i][1]>=9001){
  console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[6])
}else if(heroi[i][1]>=8001){
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[5])
}else if(heroi[i][1]>=7001){
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[4])
}else if(heroi[i][1]>=5001){
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[3])
}else if(heroi[i][1]>=2001){
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[2])
}else if(heroi[i][1]>=1001){
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[1])
}else{
   console.log("O herói de nome: " + heroi[i][0]+ " está no nível de: "+ nivel[0])
}
}


