const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    {
        enunciado: "Qual a principal novidade na tripulação da histórica missão Artemis II à Lua?",
        alternativas: [
            {
                texto:"Inclui a primeira mulher e o primeiro negro a viajarem ao espaço profundo."
                afirmacao: "[CORRETA] A missão foca na diversidade antes do pouso definitivo na Lua."
            },
            {
                texto: "É composta apenas por robôs com Inteligência Artificial.",
                afirmacao: "[INCORRETA] A missão é 100% tripulada por humanos para testar sistemas de sobrevivência.."
            }
        ]
    },
    {
        enunciado:"Por que as novas baterias de estado sólido são revolucionárias para os carros elétricos?"
        alternativas: [
            {
                texto: "Usam componentes sólidos que trazem recarga rápida, mais autonomia e segurança.",
                afirmacao: "[CORRETA] O composto sólido armazena mais energia e elimina riscos de incêndio."
            },
            {
                texto: "Encontrar a cidade perdida de Atlântida no Oceano Pacífico.",
                afirmacao: "[INCORRETA] O navio tem fins estritamente geológicos e científicos, não arqueológicos."
            }
        ]
    },
    {
        enunciado: "Qual o objetivo do avançado navio de perfuração chinês Meng Xiang?",
        alternativas: [
            {
                texto: "Perfurar a crosta oceânica até atingir o manto da Terra.",
                afirmacao: "[CORRETA] Coletar amostras do manto ajuda a entender a tectônica de placas."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            } //fechamento do objeto do texto e afirmação da lista de alternativas
        ] //fechamento da lista de alternativas
    }, //fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
]; //fechamento da lista de perguntas


let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
//função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta