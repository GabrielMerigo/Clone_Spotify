let audioPlayer = document.getElementById('audioPlayer');
let loaded = false;
let pauseBtn = document.getElementById('pauseBtn');
let playBtn = document.getElementById('playBtn');
let boxies = document.querySelectorAll('.box-single'); 

playBtn.addEventListener('click', (e) =>{
  e.preventDefault(); //Serve para não retornar o link;
   playBtn.style.display = 'none';
   pauseBtn.style.display = 'inline';
  audioPlayer.play();
  return false; //Para garantir damos um false, pois o prevent não é compativel com todos.
})

pauseBtn.addEventListener('click', (e) =>{
  e.preventDefault(); //Serve para não retornar o link;
   playBtn.style.display = 'inline';
   pauseBtn.style.display = 'none';
  audioPlayer.pause();
  return false; //Para garantir damos um false, pois o prevent não é compativel com todos.
})

const playSong = (file) => {
  if(loaded == false){
    audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3" />`
    loaded = true;
  }
  audioPlayer.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
}

boxies.forEach((box) => {
  box.addEventListener('click', event =>{
      let artist = box.getAttribute('data-artist');
      let img = box.getAttribute('data-image');
      let song = box.getAttribute('data-song');
      let file = box.getAttribute('data-file');

      let playerArtistComponent = document.querySelector('.player__artist')

      playerArtistComponent.innerHTML = `
      <div class="parent">
        <img src="`+img+`" />
          <div class="son">
            <h3>`+artist+`</h3>
            <br><span>`+song+`</span>
          </div>
        </div>
      `;

      playSong(file);
  })
})

