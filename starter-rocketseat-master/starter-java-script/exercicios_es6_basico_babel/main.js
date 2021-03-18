//#region Exercício 1

console.log("Exercício 1 ---------------------------------");

//1. - Classes
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  setAdmin() {
    this.admin = true;
  }

  isAdmin() {
    return this.admin ? true : false;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.setAdmin();
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

//#endregion

//#region Exercício 2

console.log("Exercício 2 ---------------------------------");

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

//2.1 - map
var idades = usuarios.map(users => users.idade);
console.log(idades);

//2.2 - filter
var filter = usuarios.filter(users => {
  return users.empresa === "Rocketseat" && users.idade > 18;
});
console.log(filter);

//2.3 - find
var find = usuarios.find(users => users.empresa === "Google");
console.log(find);

//2.4 - map.filter
var aux1 = usuarios
  .map(users => {
    users.idade *= 2;
    return users;
  })
  .filter(users => users.idade < 50);
console.log(aux1);

//#endregion

//#region Exercício 3

console.log("Exercício 3 ---------------------------------");

//3.1 - arrow functions
const arr = [1, 2, 3, 4, 5];
var newArr = arr.map(iten => iten + 10);
console.log(newArr);

//3.2 - arrow functions
const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = user => user.idade;
console.log(mostraIdade(usuario));

//3.3 - arrow functions
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome, idade) => {
  return { nome, idade };
};
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//3.4 - arrow functions
const promise = () => {
  return new Promise((resolve, reject) => {
    return resolve("Sucess!!!");
  });
};
promise().then(resolve => {
  //console.log(resolve);
});

//#endregion

//#region Exercício 4

console.log("Exercício 4 ---------------------------------");

//4.1 - Desestruturação Simples
const empresa = {
  nome: "Rocketseat",
  endereco: { cidade: "Rio do Sul", estado: "SC" }
};

const {
  nome: nomeEmp,
  endereco: { cidade, estado }
} = empresa;

console.log(nomeEmp);
console.log(cidade);
console.log(estado);

//4.2 - Desetruturação parâmetros
function mostraInfo({ nome, idade } = usuario) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//#endregion

//#region Exercício 5

console.log("Exercício 5 ---------------------------------");

//5.1 - Rest
const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr2;
console.log(x);
console.log(y);

const soma = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.2 - Spread
const usuarioSpread = {
  nome: "Diego",
  idade: 23,
  endereco: { cidade: "Rio do Sul", uf: "SC", pais: "Brasil" }
};

const usuario2 = { ...usuarioSpread, nome: "Gabriel" };
console.log(usuario2);

const usuario3 = {
  ...usuarioSpread,
  endereco: { ...usuarioSpread.endereco, cidade: "Lontras" }
};
console.log(usuario3);

//#endregion

//#region Exercício 6

console.log("Exercício 6 ---------------------------------");

//6.1 - Template Lierals

const usuarioTL = "Diego";
const idadeTL = 23;
console.log(`O usuário ${usuarioTL} possui ${idadeTL} anos`);

//#endregion

//#region Exercício 7

console.log("Exercício 7 ---------------------------------");

//7.1 - Object Short Syntax

const nomeOSS = "Diego";
const idadeOSS = 23;

const usuarioOSS = { nomeOSS, idadeOSS, cidadeOSS: "Rio do Sul" };
console.log(usuarioOSS);

//#endregion
