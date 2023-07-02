const distribuicaoEletronica = document.querySelector("#distribuicao");
const camadaValencia = document.querySelector("#camadaValencia");
const eletronsCamada = document.querySelector("#eletronsCamada");
const subnivelEnergetico = document.querySelector("#subnivel");
const eletronsSubnivel = document.querySelector("#eletronsSubnivel");
const botao = document.querySelector("#btn");
const numAtomico = document.querySelector("#input");

let distribuicao_eletronica = [];
let camada_valencia;
let eletrons_camada;
let subnivel_mais_energetico;
let eletrons_subnivel;

function DistribuicaoEletronica(numeroAtomico) {
  const subniveis = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d"];

  let eletronsRestantes = numeroAtomico;
  let indiceSubnivel = 0;

  while (eletronsRestantes > 0 && indiceSubnivel < subniveis.length) {
    const subnivelAtual = subniveis[indiceSubnivel];
    const maxEletrons = subnivelAtual.includes("s") ? 2 : subnivelAtual.includes("p") ? 6 : subnivelAtual.includes("d") ? 10 : 14;
    const eletronsSubnivel = Math.min(eletronsRestantes, maxEletrons);

    distribuicao_eletronica.push(`${subnivelAtual}^${eletronsSubnivel}`);
    eletronsRestantes -= eletronsSubnivel;

    indiceSubnivel++;
  }


  while (eletronsRestantes > 0) {
    const subnivelAtual = subniveis[subniveis.length - 1];
    const maxEletrons = subnivelAtual.includes("s") ? 2 : subnivelAtual.includes("p") ? 6 : subnivelAtual.includes("d") ? 10 : 14;
    const eletronsSubnivel = Math.min(eletronsRestantes, maxEletrons);

    distribuicao_eletronica.push(`${subnivelAtual}^${eletronsSubnivel}`);
    eletronsRestantes -= eletronsSubnivel;
  }

  if (distribuicao_eletronica.length > 0) {
    const ultimaDistribuicao = distribuicao_eletronica[distribuicao_eletronica.length - 1];
    const [subnivel, eletronsSubnivel] = ultimaDistribuicao.split('^');
    subnivel_mais_energetico = subnivel;
    eletrons_subnivel = parseInt(eletronsSubnivel);
  } else {
    subnivel_mais_energetico = "";
    eletrons_subnivel = 0;
  }
}

botao.addEventListener('click', () => {
  const numeroAtomico = parseInt(numAtomico.value);

  
  if (numeroAtomico >= 1 && numeroAtomico <= 2) {
    camada_valencia = "K";
    eletrons_camada = 2;
    subnivel_mais_energetico = "1s";
  } else if (numeroAtomico >= 3 && numeroAtomico <= 10) {
    camada_valencia = "L";
    eletrons_camada = 8;
    subnivel_mais_energetico = "2s";
  } else if (numeroAtomico >= 11 && numeroAtomico <= 18) {
    camada_valencia = "M";
    eletrons_camada = 18;
    subnivel_mais_energetico = "3s";
  } else if (numeroAtomico >= 19 && numeroAtomico <= 36) {
    camada_valencia = "N";
    eletrons_camada = 32;
    subnivel_mais_energetico = "4s";
  } else if (numeroAtomico >= 37 && numeroAtomico <= 54) {
    camada_valencia = "O";
    eletrons_camada = 32;
    subnivel_mais_energetico = "5s";
  } else if (numeroAtomico >= 55 && numeroAtomico <= 86) {
    camada_valencia = "P";
    eletrons_camada = 18;
    subnivel_mais_energetico = "6s";
  } else if (numeroAtomico >= 87 && numeroAtomico <= 112) {
    camada_valencia = "Q";
    eletrons_camada = 2;
    subnivel_mais_energetico = "7s";
  }


  distribuicao_eletronica = [];
  DistribuicaoEletronica(numeroAtomico);

  distribuicaoEletronica.innerHTML = distribuicao_eletronica.join(" ");
  camadaValencia.innerHTML = camada_valencia;
  eletronsCamada.innerHTML = eletrons_camada;
  subnivelEnergetico.innerHTML = subnivel_mais_energetico;
  eletronsSubnivel.innerHTML = eletrons_subnivel;
});
