![>>> Abra esse README.md no modo de 'Preview' para melhor visualização <<<](assets/20220719_104823_CodeIgualUmKenzie.png)

# Instruções

Esse teste tem como objetivo **fixar seus conhecimentos sobre o assunto abordado nessa última semana**.

Esse projeto possui todos os arquivos necessários para desenvolver a solução esperada, então **NÃO SERÁ NECESSÁRIO CRIAR OUTROS ARQUIVOS**.

### ⏱️ Duração do teste

> `15 minutos para todo o desenvolvimento`

### ✅ Console.log

> `Será permitido usar o console.log() para testar o seu código`

# Problema

Você terá um **array de objetos** chamado `listaDeLivros` **já predefinido** no arquivo `script.js`.

Dentro dele terão objetos contendo as seguintes chaves:

- `nome` - Tipo **String** | Nome do produto
- `anoDePublicacao` - Tipo **Number** | Ano de publicação

Além disso, você também terá uma **lista não ordenada** (ul) com a classe `container` **já predefinida no body** do arquivo `index.html`.

### 🎲 Desafio

Dadas essas informações, será necessário desenvolver uma função chamada `AdicionarLivros` que fará o seguinte:

1. Selecionar a (ul) de classe `container`
2. Limpar o conteúdo que já existe na (ul) selecionada
3. Criar a função `AdicionarLivros`
4. Dentro da função percorrer o array `listaDeLivros`
5. 1. Dentro do looping realizar o seguinte passo a passo:
   2. Criar uma (li) **item de lista** e criar duas tags (p) **parágrafo**
   3. Adicionar a classe `livro` a (li) criada
   4. Adicionar ao valor da primeira tag (p), o `nome` do livro atual do looping
   5. Adicionar ao valor da segunda tag (p), o `anoDePublicacao` do livro atual do looping
   6. 1. Criar uma validação que iŕa verificar a seguinte condição:
      2. Se o ano de publicação do livro é `menor ou igual a 1997` ou `maior ou igual a 2000`.
      3. Caso a validação seja verdadeira adicionar a (li) a classe `destaque`
   7. Fora da validação, ainda dentro do looping, inserir as tags (p) á sua (li),primeiramente o tag (p) que recebeu o `nome` e em sequência a tag (p) que recebeu o `anoDePublicacao`
   8. Inserir a sua (ul) selecionada a sua tag (li) criada.
6. Por fim execute sua função

---

> **Bom desenvolvimento**, e qualquer dúvida só perguntar ao seu aplicador 😉!
