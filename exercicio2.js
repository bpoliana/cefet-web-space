// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

var atual = 0;

document.querySelector('#anterior').addEventListener('click', function(event){
    atual = (atual + (todasAsImagens.length - 1)) % todasAsImagens.length;
    changeImage();
});

document.querySelector('#proximo').addEventListener('click', function(event){
    atual = (atual + 1) % todasAsImagens.length;
    changeImage();
});

var changeImage = function(){
    let img = document.querySelector('#galeria > img');
    img.src = servidorDasImagens + todasAsImagens[atual];
};
