function CriarListaNaoOrdenada(array, adicionarEm) {
    let tabela = document.createElement("ul");
    tabela.classList.add("ListaJS");
    let titulo = document.createElement("h2");
    titulo.innerHTML = "Título da tabela criada por JS";
    tabela.appendChild(titulo);

    array.forEach(element => {
        let linha = document.createElement("li")
        let texto = document.createElement("h4");
        texto.innerHTML = element;
        linha.appendChild(texto);
        tabela.appendChild(linha);
    });

    adicionarEm.appendChild(tabela);
}

    function CriarFilmes(adicionarEm) {
        let filmesArray = [new Filme("Rambo", 1982, "ação/aventura"), new Filme("Rambo II", 1985, "ação/filme de guerra"), new Filme("Rambo III", 1988, "ação/filme de guerra")];

        let titulo = document.createElement("h2");
        titulo.innerHTML = "Filmes";
        adicionarEm.appendChild(titulo);
    
        filmesArray.forEach(filme => {
            let linha = document.createElement("li")
            let ulFilme = filme.ConstruirUl();

            linha.appendChild(ulFilme);
            adicionarEm.appendChild(linha);
        });
    }

    class Filme {
        constructor(titulo, ano, genero) {
            this.titulo = titulo;
            this.ano = ano;
            this.genero = genero;
        }

        ConstruirUl() {
            let ul = document.createElement("ul");
            ul.id = "MenuFilme";
            let titulo = document.createElement("h3");
            titulo.innerText = this.titulo;
            ul.appendChild(titulo);

            let liAno = document.createElement("li");
            let liGenero = document.createElement("li");
            liAno.innerText = "Ano de lançamento: " + this.ano;
            liGenero.innerText = "Gênero: " + this.genero;

            ul.appendChild(liAno);
            ul.appendChild(liGenero);

            return ul;
        }
    }

    function enviarForm(){
        let n1 = document.getElementById('N1'), n2 = document.getElementById('N2'), n3 = document.getElementById('N3');
        let soma = parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value);

        let parimpar =  soma % 2 == 0 ? "par" : "ímpar";
        alert("soma dos valores enviados: " + soma + ". Esse número é " + parimpar);
    }

    function calcularFat(){
        let numero = parseInt(document.getElementById('NFat').value);
        let resultado = 1;
        let count = 1;

        while (count <= numero){
            resultado *= count;
            count++;
        }

        alert("O fatoria é " + resultado)
    }
