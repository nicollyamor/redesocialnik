let audios = [
    {caminho:'Jorge & Mateus - Os Anjos Cantam (LyricVideo) [Álbum Os Anjos Cantam].mp3'},
    {caminho:'Arctic Monkeys - Do I Wanna Know_ (Official Video).mp3'},
    {caminho:'Elley Duhé - Middle of the Night (Lyrics).mp3'},
    {caminho:'Hayit.mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
