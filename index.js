
/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:
- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema:

1. Listar vagas disponíveis //A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

2.Criar um nova vaga //A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite,
e também deve pedir que o usuário confirme as informações antes de salvá-las.

3.Visualizar uma vaga //A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: 
índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

4.Inscrever um candidato em uma vaga //A opção de inscrever um candidato em uma vaga de pedir o nome do candidato,
o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

5.Excluir uma vaga //A opção de excluir uma vaga deve pedir o índice da vaga,
 mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

6.Sair
*/

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descricao para a vaga:")
    const dataLimite = prompt("Informe uma data limite(dd/mm/aaa)")

    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite)

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")
    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o índice da vaga para a qual o candidato se inscreverá: ")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição Realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga à ser excluida: ")
    const vaga = vagas[indice]

    const confirmacao = confirm("Realmente deseja excluir essa vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar nova vaga" +
        "\n3. Exibir uma vaga" +
        "\n4. Visualizar uma vaga" +
        "\n4. Inscrever novo Candidato" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break;

            case "2":
                novaVaga()
                break;

            case "3":
                exibirVaga()
                break;

            case "4":
                inscreverCandidato()
                break;

            case "5":
                excluirVaga()
                break;

            case "6":
                alert("Encerrando o sistema...")
                break;

            default: alert("Opção Inválida. Tente novamente.")
                break;

        }
    } while (opcao !== "6")
}

executar()





















