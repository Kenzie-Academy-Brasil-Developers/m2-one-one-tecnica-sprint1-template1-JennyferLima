
const listaDeLivros = [
  {
    nome: "Harry Potter e a Pedra Filosofal",
    anoDePublicacao: 1997,
  },
  {
    nome: "Harry Potter e a Câmara Secreta",
    anoDePublicacao: 1998,
  },
  {
    nome: "Harry Potter e o Cálice de Fogo",
    anoDePublicacao: 2000,
  },
  {
    nome: "Harry Potter e a Ordem da Fênix",
    anoDePublicacao: 2003,
  },
  {
    nome: "Harry Potter e o Prisioneiro de Azkaban",
    anoDePublicacao: 1999,
  },
];

const containerLivros = document.querySelector(".container");
containerLivros.innerHTML = "";

function adicionarLivros(listaDeLivros){

  for(let i = 0; i < listaDeLivros.length; ++i){

    let tagLi = document.createElement("li");
    let tagP1 = document.createElement("p");
    let tagP2 = document.createElement("p");

    tagLi.classList.add("livros");
    tagP1.innerText = `${listaDeLivros[i].nome}`;
    tagP2.innerText = `${listaDeLivros[i].anoDePublicacao}`;

    if(listaDeLivros[i].anoDePublicacao <= 1997 || listaDeLivros[i].anoDePublicacao >= 2000){
      tagLi.classList.add("destaque");
    }

    tagLi.appendChild(tagP1);
    tagLi.appendChild(tagP2);
    containerLivros.appendChild(tagLi);

  }

}
adicionarLivros(listaDeLivros);

