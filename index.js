
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

// Array para armazenar as vagas de emprego
const vagas = [];

// Função para listar as vagas disponíveis
function listarVagas() {
    // Utiliza o método reduce para criar uma string com as informações das vagas
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "; // Adiciona o índice da vaga
        textoFinal += vaga.nome; // Adiciona o nome da vaga
        textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"; // Adiciona a quantidade de candidatos
        return textoFinal;
    }, "");

    // Exibe as vagas em um alerta
    alert(vagasEmTexto);
}

// Função para criar uma nova vaga
function novaVaga() {
    // Solicita informações para criar a nova vaga
    const nome = prompt("Informe um nome para a vaga:");
    const descricao = prompt("Informe uma descrição para a vaga:");
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa)");

    // Solicita confirmação antes de salvar a nova vaga
    const confirmacao = confirm("Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite);

    // Se confirmado, cria a nova vaga e a adiciona ao array de vagas
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
        vagas.push(novaVaga);
        alert("Vaga criada.");
    }
}

// Função para exibir detalhes de uma vaga específica
function exibirVaga() {
    // Solicita o índice da vaga que deseja exibir
    const indice = prompt("Informe o índice da vaga que deseja exibir:");
    const vaga = vagas[indice];

    // Utiliza o método reduce para criar uma string com os candidatos da vaga
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato;
    }, "");
    
    // Exibe os detalhes da vaga em um alerta
    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosEmTexto
    );
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
    // Solicita o nome do candidato e o índice da vaga
    const candidato = prompt("Informe o nome do(a) candidato(a): ");
    const indice = prompt("Informe o índice da vaga para a qual o candidato se inscreverá: ");
    const vaga = vagas[indice];

    // Solicita confirmação antes de salvar a inscrição
    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite);

    // Se confirmado, adiciona o candidato à vaga
    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert("Inscrição Realizada.");
    }
}

// Função para excluir uma vaga
function excluirVaga() {
    // Solicita o índice da vaga a ser excluída
    const indice = prompt("Informe o índice da vaga a ser excluída: ");
    const vaga = vagas[indice];

    // Solicita confirmação antes de excluir a vaga
    const confirmacao = confirm("Realmente deseja excluir essa vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite);

    // Se confirmado, remove a vaga do array de vagas
    if (confirmacao) {
        vagas.splice(indice, 1);
        alert("Vaga excluída.");
    }
}

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever novo Candidato" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    );
    return opcao;
}

// Função principal para executar o programa
function executar() {
    let opcao = "";

    do {
        opcao = exibirMenu();

        switch (opcao) {
            case "1":
                listarVagas();
                break;

            case "2":
                novaVaga();
                break;

            case "3":
                exibirVaga();
                break;

            case "4":
                inscreverCandidato();
                break;

            case "5":
                excluirVaga();
                break;

            case "6":
                alert("Encerrando o sistema...");
                break;

            default:
                alert("Opção Inválida. Tente novamente.");
                break;
        }
    } while (opcao !== "6");
}

// Chama a função principal para iniciar o programa
executar();






















