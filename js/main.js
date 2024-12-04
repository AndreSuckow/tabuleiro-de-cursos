// Conteúdo da Modal
const modalContent = [
  // 1
  {
    title: "Como contar boas histórias?",
    text: "O tal storytelling está aqui na nossa trilha. Aprenda como viver sua história, caprichar no enredo, destacar personagens e dar um show de influência para se comunicar com emoção e assertividade.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/11aadad6-3b3e-488b-813f-f518c7837ce3/Como%20contar%20boas%20hist%C3%B3rias%3F?levelIds=MWU4MWE3MTItMmYwMi00MDQ1LWU4YzMtYWMzOTMxMzg2MmRiLGQyOGRhMGRjLWExNjktMzRlZi05Yjg0LTJkMDdkOGIwN2ZjOSxhNmM5Yjc3NS01N2E3LTE3YzgtZjUzOC1kYjA2NjM4NmM1YTc=",
  },
  // 2
  {
    title: "Conversas abertas e saudáveis",
    text: "A ferramenta mais potente de transformação: uma boa conversa. Parece simples, mas se comunicar de forma transparente passa por um bom planejamento e uma série de dicas preciosas para seus feedbacks serem mais que proveitosos. Vem com a gente!",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/245a67e5-b5ca-4d68-9f51-b7704a9bd956/Conversas%20Abertas%20e%20Saud%C3%A1veis?levelIds=MzRjZTExNTktNzY2ZS00YWJkLWE2NDgtYjc0MjkyNzVkNzIzLGZjZDZkM2EyLWIyNDUtNDJmMi04ZDVjLWMyZGRkMTA5MjgzOSw5NjUwMTgxNS0wMTUxLTRjMjAtOTQxNy0yNWNhNDAyNjQ3MTE=",
  },
  // 3
  {
    title: "Como criar relações ganha ganha?",
    text: "Não custa repetir: conflito não é confronto. Ter conflitos é extremamente natural e saudável nos ambientes pessoais e profissionais. Saber navegar conflitos, entendendo as partes envolvidas e propondo soluções empáticas é o talento do futuro. Bora aprofundar?",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/82ea076a-3144-414c-808e-f10c26087a25/Como%20criar%20rela%C3%A7%C3%B5es%20ganha%20ganha%3F?levelIds=ZDIyMzJlMWMtMWVhYy00YTVkLWFiZDQtYjZlNDYxODBlZDExLGRjYWFlZjNhLWQxOGMtNGFhNy1hYmUwLTk5N2EzZWFmYzQ0NixlNzc2YTRhNC0yZDg4LTQyMWEtODc1ZC0xOTQyZjM2MTAzZDE=",
  },
  // 4
  {
    title: "Acabou a facul! E agora, para onde minha carreira vai?",
    text: "Vem conferir informações preciosas sobre os tipos de carreira, como você pode se comunicar para alcançar seus objetivos dentro ou fora da Vivo, e ainda, dicas campeãs para o seu perfil no LinkedIn.",
    link: "#", // Link ainda em publicação
  },
  // 5
  {
    title: "Como ser criativa(o) no dia a dia?",
    text: "E se dissermos que a criatividade pode (e deve) ser treinada? Se dissermos que toda e qualquer pessoa pode ser criativa todo dia e resolver problemas complexos de forma cada vez mais natural? Vem com a gente! Dê o play.",
    link: "https://academiavtalentos.echo.timetoknow.com/#/$/library/channel/2ae0a5e0-9ac7-456e-a199-2632fc7c4213/Como%20ser%20criativa(o)%20no%20dia%20a%20dia%3F?levelIds=MzY5NWZmZTUtZDZlMS1iNzIzLTY2ZjgtODM5NDBiNzk0ZmFmLGZjNGEzNmU3LWM5NDUtMDIwZi1jYTBiLWM4MGY0Nzg1Y2IwMyw5YzhhNGNkZi0wM2U3LTU0NTAtMDYzOC01MGZmMDAxNDViYjI=",
  },
  // 6
  {
    title: "Como aprender o tempo todo",
    text: "Dizem que a única certeza da vida é a mudança e já que tudo vai mudar o tempo todo, precisamos aprender a aprender o tempo todo também. Venha mergulhar na adaptabilidade e flexibilidade para aprender mais e melhor.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/7a67d347-a21c-4f9c-860a-555f34186ab9/Como%20aprender%20o%20tempo%20todo%3F?levelIds=YWY1YWM0YWItZWE5My00YjJjLTgxODMtYjAzMDFjMWVkZTJjLDc0MGFmNzUwLTMxZDAtNGIxNi1iYWJhLWI0MGIxZGNhNWNiOSw1ZDIyMWRlNC1iMDYwLTRjYzYtODI1MS00ZjQyN2E4ZWJjNzY=",
  },
  // 7
  {
    title: "Como fazer boas leituras do futuro?",
    text: "Será que o futuro é mesmo imprevisível? Se para inovar é importante antecipar o que está por vir, vem com a gente que temos dicas de como abrir a cabeça para tendências e se antecipar em um mundo hiper conectado.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/ced63142-1014-4d19-9bd8-dd71174371ab/Como%20fazer%20boas%20leituras%20do%20futuro%3F?levelIds=Yzk1YzAwNDQtOTBlOC00ZmUwLWEyOGMtNTViNDcxNDQ0MGM0LDFkNWVlNzIwLTQwZmUtNDUzZS1iNDMxLTU3YjQxZGNmNjEwYixjZWFiZDVmNS01MDI3LTRkZjctYWNjNC1kNTM4NWI2Yzg5NGM=",
  },
  // 8
  {
    title: "Fazendo acontecer aqui e agora",
    text: "Tá com vontade de sacodir a poeira? Tirar um projeto do papel? Correr atrás? Vem com a gente que a mentalidade empreendedora vai te abraçar. Conheça o método “effectuation” e aproveite para agilizar suas tarefas e planos.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/4e95a3b7-4b55-41b7-befc-8b34bd5b043c/Fazendo%20acontece%20aqui%20e%20agora?levelIds=NzJlZWFhMDItMjdmNi00NzE3LTkxMDUtZWJkYmYzN2FiZTQxLDkxZTBlODYyLTdmNWEtNDQ0Ny05N2Y4LTgzMTY3OGUzZmYxMiwwNjA4OTY3Zi00ODAwLTQ1NzUtOGMxZC1kZjgyNGY1ODEyZWM=",
  },
  // 9
  {
    title: "O boom da inovação",
    text: "Afinal, o que é inovar? Tem que envolver sempre tecnologia? Tem que ser complexo? Nada disso! Com métodos certos a inovação fica bem simples. Vem conferir dicas práticas e divertidas sobre criar realidades na sua vida e na Vivo.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/a9d58fe9-6b7e-4713-bce9-357b6c6dd866/O%20Boom%20da%20Inova%C3%A7%C3%A3o?levelIds=MDUxYmJjNzEtMDk3My00NDlmLThiNGItNGQwZTBjMDI1ZDU2LDQzZTA0MDkxLWQ2MzItNGM4Mi1iNmQ4LTM0ZmIwNzlmOTYyYyw5NGViYzk5OC0zYWI0LTQ1NTMtOTlmMy02MTIwMzY1YTA4YzY=",
  },
  // 10
  {
    title: "E a tal da empatia?",
    text: "Quantas realidades podem existir? Para além da nossa realidade, existem muitas outras. A empatia pode ser descrita como “a arte de se colocar no lugar do outro para transformar o mundo”. Praticar é o caminho, que tal darmos o primeiro passo?",
    link: "https://academiavtalentos.echo.timetoknow.com/#/$/library/channel/2fe55202-dfbf-43fd-9b0a-8a4ce981c51a/E%20a%20tal%20da%20empatia%3F?levelIds=MzhlMThiZjYtNDViMy00ZDRlLTk4MzQtMWE2NzkzYmI4ODIwLGY4YTQ4ZTAzLThiZDItMmQ3Yy1lNGUyLTEyZGM1NjU4ODIyOCxjNzY2ZTk1Zi1mMjI0LTMxNjMtNjUxMC1mN2U2YmI4Yzc1YmY=",
  },
  // 11
  {
    title: "Como equilibrar os pratos?",
    text: "Quem mais gostaria que o dia tivesse 48 horas? Bem, provavelmente a quantidade de tarefas e pressões se acumulariam e a tal procrastinação aumentaria. Vem com a gente se aprofundar em gestão do tempo e o equilíbrio do foco para entregar o que você precisa.",
    link: "https://academiavtalentos.echo.timetoknow.com/#/$/library/channel/640d2da3-3b21-4a2b-9d95-480f46cdc1cd/Como%20equilibrar%20os%20pratos%3F?levelIds=ODEzNjRjYzgtMjcxZC01MDQxLWY3MmMtMjQ1MTRmZTMyMGYzLGFlN2I0ZTI3LWZlYjYtNTMzOS0yZmVhLTY2M2MwNGVkMjNlOSwxNmYzMTU0ZC1mMGZhLTBhMGQtOTE0Mi1lNjg4ZjhhOTczNWQ=",
  },
  // 12
  {
    title: "Inspira, respira e não pira",
    text: "O que fazer com a temida e popular “ansiedade”? Talvez essa seja uma daquelas perguntas sem respostas, mas preparamos um conteúdo potente para apoiar você na identificação do que está ou não em seu controle. Respira e dê o play!",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/7f0e2aa0-8b5e-4a29-820e-2d86092d7cee/Inspira%2C%20respira%20e%20n%C3%A3o%20pira?levelIds=YTExMWRkOTktMWE0ZC00MGE5LWJmYmItNWMzNGExNzc2ZWUyLGE2OGYzOGY3LTE5YjEtNGM1Ny1iYzQ5LWY5MThhMzkzYWM4MyxiMzY4Mzc3NC03M2I1LTRlZWQtOGI3Yy1mM2Y2ZjI5YmQzODQ=",
  },
  // 13
  {
    title: "Como descobrir no que mando bem?",
    text: "Se conhecer é a melhor coisa que você pode fazer por você e por todos ao seu redor. Preparamos um conteúdo bacana para guiar seu entendimento sobre você, sobre seu entorno e sobre o mundo. Tem até teste de personalidade, vem conferir.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/47feafed-d60b-4b71-a5ab-1e201125d8a2/Como%20descobrir%20no%20que%20mando%20bem%3F?levelIds=NDNhY2Q3NjQtOTExYy00MjNmLWFhODEtNTBiMjMxNWY5YWVjLDBmNTBiYjc3LTI4NGMtNGMyOS1iMjBiLTVlYTI3NTgwYzIzZCxkMjIxYTY2OC1hMWZhLTQwM2YtODMxNC05YmRlNWY2NWFlMTU=",
  },
  // 14
  {
    title: "Olhar pra dentro e pra frente",
    text: "Sabia que a emoção é uma manifestação corporal? Pois é! Emoções geram comportamentos que geram hábitos. Na inteligência emocional aprendemos a fazer a gestão das emoções que nos cercam o tempo todo. Esse tá bom demais!",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/8fb591bc-f740-417a-b333-8d423b961840/Olhar%20para%20dentro%20e%20para%20frente?levelIds=MTRjZWVhMTQtOTViYS00YjZlLWFlYjktYjFmYzEyNTk4MjViLDE3MGJhY2NhLTk2MzUtNDFlZS04ZWYyLTk4MzdkNWFmZjljNiw4OGM3YzU1MC0yYjc2LTQ1NjQtYTVlMC1mNDFiOGExOGY1NzY=",
  },
  // 15
  {
    title: "Ferramentas para mandar bem",
    text: "Dominar ferramentas poderosas pode simplificar sua rotina e te levar mais longe. Trazemos dicas diretas e retas sobre as principais ferramentas do pacote office. Tem dica de Word, PowerPoint, e-mail e Teams, além de materiais super importantes para aprofundar seu aprendizado.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/b468b3fb-e498-4651-97f5-3f2367aa0f9a/Ferramentas%20para%20Mandar%20Bem?levelIds=NjUxZTcxNzctOWNmZC00MTU1LWJiNjItNzJkYzg0ZTI3MzIwLDhhNWJlMzE1LTNjMzAtNGM4OC1hOGVmLWVkMmNhNTdiMGFkZSwzZDE1NGZhNC0zYzI0LTRjZjctOTA1NS1mMmNlMDNlMTNiMGI=",
  },
  // 16
  {
    title: "A IA Vai dominar o mundo?",
    text: "Você vai mergulhar no universo da Inteligência Artificial muito além do ChatGPT. Vai aprender ferramentas básicas, intermediárias e avançadas para otimizar seu tempo e focar sua criatividade no que merece mais concentração.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/d731f6e6-f36f-496b-9984-07aa31f65eed/A%20IA%20Vai%20Dominar%20o%20Mundo%3F?levelIds=NzMzNmI0NmMtNWIyMi00NzYwLWFjYzMtY2M1NzkwODNjMTg5LDdlMjE4MDU4LTk3OWEtNDg3Ny05OWRiLTFiYzNhYzYwMzQ4YSwwMmFhNjAwMi04NmM3LTQ1ZDAtOTEzNC02NmFjZjMwMTI0NWQsY2I5ZjgxOWMtN2NkNC00M2M1LTg5ZWUtYjZkOTE1NDIxZjk4",
  },
  // 17
  {
    title: "Papo Geek | Algoritmos e Programação",
    text: "Você sabia que tem algoritmo até mesmo no seu microfone? E que esse papo de conecta com a época de “Alexandre, O Grande” há mais de 300 a.C? Esse videocast traz uma “fera” da tecnologia da Vivo: Henrique Eduardo Souza que é palestrante, professor e “Architect Manager”. Vem!",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/f42fab2f-8816-4610-bd26-73b14154580d/Papo%20Geek%20%7C%20Algoritmos%20e%20Programa%C3%A7%C3%A3o?levelIds=MzQ5MGM2NTktM/DRkYi00OTdhLTlhNWItM2U5NDU0Y2NjMjY0LDE0NDg4ODY4LTA2MjgtNGM5Zi05MGU0LWI0ZmFhMzFlZmE3NCw2YmEyMDlhNi05OWZjLTQ4NWMtOGNjNC0wMDE2NWZlN2VhN2IsMjA5MzI2ZjUtM2EzYS00ODNhLWFkYTItNDQ5MWE5MTVlZmU1",
  },
  // 18
  {
    title: "Agilizados para o futuro",
    text: "“Agilizar” é um verbo que confere velocidade, rapidez e é óbvio que esse ritmo é importante na rotina e que tem método para isso. Já ouviu bastante sobre o método ágil, né? A gente te conta de forma “rápida e ágil” como surgiu o movimento e as principais vantagens.",
    link: "https://academiavtalentos.echo.timetoknow.com/index.html#/$/library/channel/3739601c-1b11-4bee-b219-9a4d4706091b/Agilizados%20para%20o%20Futuro%20do%20Trabalho?levelIds=MDEzMjEzODktYzk5Mi00MWM0LWIwYzYtZDFmMzNlNzM4MGU4LGZmZDMzNTY4LTk4NjQtNDIyMC04ZWUwLTBhZjk0MTI0N2M2NSw3MzAxODg1ZS1iMGMzLTQ1YjYtOGQyYy0yNDMwMmE2YmU3ZWM=",
  },
];

// Modal Elementos
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalIndex = document.getElementById("modal-index");

const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");
const closeModal = document.querySelector(".close");

// Abrindo a Modal ao clicar em uma Imagem
document.querySelectorAll(".thumbnail").forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    const content = modalContent[index];
    modalTitle.textContent = content.title;
    modalText.textContent = content.text;
    modalIndex.textContent = index + 1;
    modalLink.href = content.link;

    modal.style.display = "block";
  });
});

// Fechando a Modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechando Modal ao clicar fora do Conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
