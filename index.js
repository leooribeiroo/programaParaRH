/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:
- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema:

1. Listar vagas disponíveis 

2.Criar um nova vaga 

3.Visualizar uma vaga 

4.Inscrever um candidato em uma vaga 

5.Excluir uma vaga 

6.Sair 

7.A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas. 

8.A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite,

e também deve pedir que o usuário confirme as informações antes de salvá-las.

9.A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: 
índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

10.A opção de inscrever um candidato em uma vaga de pedir o nome do candidato,
o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

11.A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.*/

let vagasDisponiveis = ""
let criarNovaVaga = ""
let visualizarVaga = ""
let novoCandidato = ""
let excluirVaga = ""

let opcao;

alert("Olá, bem vindo à nossa plataforma. ")

do {
    opcao = parseFloat(prompt("Seleciona uma das opções a seguir para prosseguir: \n1.Listar Vagas Disponíveis\n2.Criar Nova Vaga\n3.Visualizar Vaga Existente\n4.Cadastrar Novo Candidato\n5.Excluir Vaga\n6.Sair"))
switch (opcao) {
        case 1:
            break;

        case 2:
            break;

        case 3:
            break;

        case 4:
            break;

        case 5:
            break;

        case 6:
            break;

        default: alert("Opção Inválida. Tente Novamente")
            break;
    }
} while (opcao !== 6)
