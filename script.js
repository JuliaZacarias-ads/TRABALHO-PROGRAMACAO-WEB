class Personagem {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontos = 0;
    }
}

class Quiz {
    constructor() {
        this.personagens = {
            ferro: new Personagem(
                "Homem de Ferro",
                "Gênio, bilionário e mestre da tecnologia.",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrK0XVhTUz3eZ8df4M8fKo9n6f57nYWVB94CxG94459GXXMAFB8Q4sP-xK_AdHC2CANx9SJwUvVVZn5nPaAvOUyFB7OgioAs_xp0_fdnQFzKk2WcgqqkRLbjUXXhsHRlEzVudbtCX9JJ5C/s1600/homemdfet.png"
            ),
            aranha: new Personagem(
                "Homem Aranha",
                "Jovem herói, ágil e responsável, sempre pronto para ajudar.",
                "https://tse4.mm.bing.net/th/id/OIP.Yhq_w6tjVuOa9KAu-7lT1wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            ),
            deadpool: new Personagem(
                "Deadpool",
                "Mercenário imortal, sarcástico e imprevisível.",
                "https://tse4.mm.bing.net/th/id/OIP.BAvHt-EuJtDMUg-PIh6iBQHaJ7?rs=1&pid=ImgDetMain&o=7&rm=3"
            )
        };

        this.perguntas = this.criarPerguntas();
        this.index = 0;
    }

    criarPerguntas() {
        return [
            {
                texto: "Qual é o seu maior ponto forte?",
                opcoes: [
                    { texto: "Inteligência e estratégia", ferro: 5, aranha: 3, deadpool: 1 },
                    { texto: "Agilidade e reflexos", ferro: 2, aranha: 5, deadpool: 3 },
                    { texto: "Força e coragem", ferro: 1, aranha: 3, deadpool: 5 },
                    { texto: "Criatividade", ferro: 4, aranha: 4, deadpool: 2 },
                    { texto: "Humor e improviso", ferro: 3, aranha: 4, deadpool: 5 }
                ]
            },
            {
                texto: "O que você faria em uma batalha?",
                opcoes: [
                    { texto: "Usaria tecnologia avançada", ferro: 5, aranha: 2, deadpool: 2 },
                    { texto: "Se moveria rapidamente pelos inimigos", ferro: 2, aranha: 5, deadpool: 3 },
                    { texto: "Atacaria sem pensar duas vezes", ferro: 1, aranha: 3, deadpool: 5 },
                    { texto: "Criaria um plano", ferro: 4, aranha: 4, deadpool: 2 },
                    { texto: "Faria piadas enquanto luta", ferro: 2, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Qual dessas qualidades mais te define?",
                opcoes: [
                    { texto: "Genialidade", ferro: 5, aranha: 3, deadpool: 1 },
                    { texto: "Responsabilidade", ferro: 2, aranha: 5, deadpool: 2 },
                    { texto: "Coragem", ferro: 2, aranha: 4, deadpool: 5 },
                    { texto: "Independência", ferro: 4, aranha: 3, deadpool: 4 },
                    { texto: "Humor ácido", ferro: 3, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Como seus amigos te veem?",
                opcoes: [
                    { texto: "Inteligente", ferro: 5, aranha: 3, deadpool: 2 },
                    { texto: "Divertido", ferro: 3, aranha: 5, deadpool: 4 },
                    { texto: "Impulsivo", ferro: 2, aranha: 3, deadpool: 5 },
                    { texto: "Criativo", ferro: 4, aranha: 4, deadpool: 3 },
                    { texto: "Engraçado demais", ferro: 3, aranha: 4, deadpool: 5 }
                ]
            },
            {
                texto: "Qual ambiente você prefere?",
                opcoes: [
                    { texto: "Laboratório tecnológico", ferro: 5, aranha: 3, deadpool: 1 },
                    { texto: "Cidade movimentada", ferro: 3, aranha: 5, deadpool: 3 },
                    { texto: "Campo de batalha", ferro: 2, aranha: 3, deadpool: 5 },
                    { texto: "Lugar isolado", ferro: 3, aranha: 2, deadpool: 4 },
                    { texto: "Qualquer lugar com ação", ferro: 3, aranha: 4, deadpool: 5 }
                ]
            },
            {
                texto: "O que mais te motiva?",
                opcoes: [
                    { texto: "Inovação", ferro: 5, aranha: 3, deadpool: 2 },
                    { texto: "Ajudar pessoas", ferro: 3, aranha: 5, deadpool: 3 },
                    { texto: "Diversão", ferro: 2, aranha: 4, deadpool: 5 },
                    { texto: "Desafios", ferro: 4, aranha: 4, deadpool: 4 },
                    { texto: "Liberdade", ferro: 3, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Como você toma decisões?",
                opcoes: [
                    { texto: "Lógica", ferro: 5, aranha: 3, deadpool: 2 },
                    { texto: "Coração", ferro: 3, aranha: 5, deadpool: 3 },
                    { texto: "Impulso", ferro: 2, aranha: 3, deadpool: 5 },
                    { texto: "Analisando tudo", ferro: 4, aranha: 4, deadpool: 3 },
                    { texto: "Do seu jeito", ferro: 3, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Qual arma você escolheria?",
                opcoes: [
                    { texto: "Armadura tecnológica", ferro: 5, aranha: 2, deadpool: 2 },
                    { texto: "Teias", ferro: 2, aranha: 5, deadpool: 2 },
                    { texto: "Espadas e armas", ferro: 1, aranha: 2, deadpool: 5 },
                    { texto: "Gadgets", ferro: 4, aranha: 4, deadpool: 3 },
                    { texto: "Qualquer coisa que funcione", ferro: 3, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Em equipe, você é:",
                opcoes: [
                    { texto: "O cérebro", ferro: 5, aranha: 3, deadpool: 2 },
                    { texto: "O ágil", ferro: 3, aranha: 5, deadpool: 3 },
                    { texto: "O caótico", ferro: 2, aranha: 3, deadpool: 5 },
                    { texto: "O estrategista", ferro: 4, aranha: 4, deadpool: 3 },
                    { texto: "O imprevisível", ferro: 3, aranha: 3, deadpool: 5 }
                ]
            },
            {
                texto: "Qual frase mais combina com você?",
                opcoes: [
                    { texto: "Conhecimento é poder", ferro: 5, aranha: 3, deadpool: 2 },
                    { texto: "Com grandes poderes vêm grandes responsabilidades", ferro: 2, aranha: 5, deadpool: 3 },
                    { texto: "Eu faço do meu jeito", ferro: 3, aranha: 3, deadpool: 5 },
                    { texto: "Sempre há uma solução", ferro: 4, aranha: 4, deadpool: 3 },
                    { texto: "Caos é divertido", ferro: 2, aranha: 3, deadpool: 5 }
                ]
            }
        ];
    }

    responder(opcao) {
        let pontos = this.perguntas[this.index].opcoes[opcao];

        for (let p in pontos) {
            if (p !== "texto") {
                this.personagens[p].pontos += pontos[p];
            }
        }

        this.index++;

        if (this.index < this.perguntas.length) {
            this.mostrarPergunta();
        } else {
            this.mostrarResultado();
        }
    }

    mostrarPergunta() {
        const pergunta = this.perguntas[this.index];
        document.getElementById("pergunta").innerText = pergunta.texto;

        const opcoesDiv = document.getElementById("opcoes");
        opcoesDiv.innerHTML = "";

        const letras = ["A", "B", "C", "D", "E"];

        pergunta.opcoes.forEach((opcao, i) => {
            const btn = document.createElement("button");

            btn.innerHTML = `<span>${letras[i]}</span> ${opcao.texto}`;

            btn.addEventListener("click", () => this.responder(i));
            opcoesDiv.appendChild(btn);
        });
    }

    mostrarResultado() {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("resultado").classList.remove("hidden");

        let vencedor = Object.values(this.personagens)
            .sort((a, b) => b.pontos - a.pontos)[0];

        document.getElementById("nomePersonagem").innerText = vencedor.nome;
        document.getElementById("descricao").innerText = vencedor.descricao;
        document.getElementById("imgPersonagem").src = vencedor.imagem;
        document.getElementById("pontuacao").innerText =
            "Pontuação: " + vencedor.pontos;
    }
}

let quiz;

function iniciarQuiz() {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    quiz = new Quiz();
    quiz.mostrarPergunta();
}

function reiniciar() {
    location.reload();
}

document.getElementById("btnIniciar").addEventListener("click", iniciarQuiz);
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);