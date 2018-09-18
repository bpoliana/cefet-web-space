// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML


let botoes = document.getElementsByClassName('botao-expandir-retrair');

for (let i = 0; i < botoes.length; i++){
  console.log("oi");
  botoes[i].addEventListener('click', function (el) {
    let paragrafoCorrespondente = el.target.parentNode;
    console.log(paragrafoCorrespondente);
    if (paragrafoCorrespondente.classList.contains('expandido')){
      paragrafoCorrespondente.classList.remove('expandido');
      el.target.innerHTML =  '+';
    }
    else {
      paragrafoCorrespondente.classList.add('expandido');
      el.target.innerHTML = '-';
    }
  });
}
