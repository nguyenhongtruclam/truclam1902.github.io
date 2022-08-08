const musicApi = 'https://music-api.000webhostapp.com';
const denvauapi = 'https://music-api.000webhostapp.com/api/music/showDV.php';
const userApi = 'http://localhost/myskil/reshful-api/api/music/login.php'

var hoverList = document.querySelector('.hover-list');
var singerList = document.querySelector('.singer__list');
const listMusicBlock = document.querySelector('tbody');
const modal = document.querySelector('.modal-container');
const isPlaying = document.querySelector('.btn-click');
const title_play = document.querySelector('.title_playing');
const img_play = document.querySelector('.img__playing img');
const name_song = document.querySelector('.name__song');
const name_singer = document.querySelector('.name__singer')
const imgg = document.querySelector('img');
const listSG = document.querySelector('.main__singer--item');
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playy = $('.clickbtn');
const nextBtn =$('.fa-step-forward');
const prevBtn =$('.fa-step-backward');
const redoBtn = $('.fa-redo');
const randomBtn =$('.fa-random')
var arr = new Array();
const audio = document.querySelector('audio');
const playing = document.querySelector('.pplaying');
const imgplay = document.querySelector('.img__playing img');
const progress = document.querySelector('#progress');
const li = $('.singer__list--item');
const avt = $('.main__singer--logo img');
const modalCard = $('.card__info');

const email = $('#email-login');
const pwd = $('#pwd-login');
const btnLogin = $('.btn__submit');
const cardSing = $('.card__signin')

const form = document.querySelector('form')
const cdThumbAnimate = imgplay.animate([
    {transform: 'rotate(360deg)'}
], {
    duration: 100000,
    iteration: Infinity
})



  function renderMusicofSinger(idSinger) {
    fetch('https://music-api.000webhostapp.com/api/music/showMr.php?id=' + idSinger)
     .then(res => res.json())
    .then(data => {
        
        console.log(data.name_singer)
        var htmls = data.music.map((mus,index) => {
        return `
            <tr data-index="${mus.id-1}">
            <td>${mus.name_song}</td>
            <td>${mus.name_singer}</td>
            <td class="td__item"><i id="none" class="bx bxs-right-arrow" onclick="${app.playMusic()}"></i></td>
            <td class="td__item"><i class="bx bx-plus ${mus.id}"></i></td>
            </tr>
            
        `;
        
    })
        listMusicBlock.innerHTML = htmls.join('');
        

    })
}

const app = {
   
    currentIndex :0,
    isRepeat: false,
    isRandom: false,

   
    
    playRandom: function() {
        const idnow = this.currentSong.singer_id;
        fetch('https://music-api.000webhostapp.com/myskil/reshful-api/api/music/showMr.php?id=' + idnow)
        .then(res => res.json())
        .then(data => {
            const st = Number($('tbody tr').dataset.index);
            console.log( idnow)
            let newIndex;
                do {
                   newIndex = Math.floor(Math.random() * 24);
                   console.log(data.music.length *idnow);   
                }while(newIndex === this.currentIndex)
                    this.currentIndex = newIndex;
                    if(this.currentIndex === 0){
                        this.currentIndex = Math.max(data.music.length - 1);        
                        this.loadSong();
                        audio.play();
                    cdThumbAnimate.play();
                        console.log(newIndex);
                    }else {
                        this.loadSong();
                        console.log(newIndex);
                        audio.play();
                        cdThumbAnimate.play();
                    }
                    
        })
    },
    loadSong : function(){
        // dataindex.setAttribute("data-index",this.currentSong.id)
        audio.src = this.currentSong.audio;
        imgplay.src = this.currentSong.image;
        name_song.innerText = this.currentSong.name_song;
        name_singer.innerText = this.currentSong.name_singer;
    },
    playMusic: function() {
        const _this = this;
        listMusicBlock.onclick = function(e){
            modal.style.display ='block';
            const node = e.target.closest('tbody tr');
                  if(node){
                      _this.currentIndex = Number(node.dataset.index) 
                      console.log(_this.currentSong)
                     _this.loadSong();
                     if(playing.classList.contains('fa-play')) {
                        setTimeout(function(){
                            playing.classList.remove('fa-play')
                            playing.classList.add('fa-pause')
                              
                        },1000)
                        setTimeout(function(){
                            audio.setAttribute("autoplay","true");
                            cdThumbAnimate.play();
                            audio.play();
                        },1200)       
                    }
            }
        }
        
    },
    getMusic: function() {
        fetch(denvauapi)
        .then(res => res.json())
        .then(data => {
            var htmls = data.music.map((mus,index) => {
            return `
                <tr data-index="${mus.id-1}">
                <td>${mus.name_song}</td>
                <td>${mus.name_singer}</td>
                <td class="td__item"><i id="none" class="bx bxs-right-arrow" onclick="${this.playMusic()}"></i></td>
                <td class="td__item"><i class="bx bx-plus ${mus.id}"></i></td>
                </tr>
            `;
            
        })
            listMusicBlock.innerHTML = htmls.join('');
        })
    },        
    defineProperties:  function(){
         fetch(musicApi)
        .then( res =>  res.json())
        .then(data => {
            currentIndex = Number($('tbody tr').dataset.index)
            Object.defineProperty(this, 'currentSong',{
                get: function(){
                    return data.music[this.currentIndex];
                }
            })
        })
    },
    handleEvents: function() {
        const _this = this;
        nextBtn.onclick = function(e){
            if(_this.isRandom){
                _this.playRandom();
            }else {
                        const nodeMusic = Number($('tbody tr').dataset.index);
                        const checked = _this.currentSong.name_singer;
                        _this.currentIndex++;  
                        if(_this.currentSong === undefined || _this.currentSong.name_singer != checked){
                            _this.currentIndex = nodeMusic;
                            _this.loadSong();
                        }
                        _this.loadSong();

                if(playing.classList.contains('fa-play')) {
                    setTimeout(function(){
                        playing.classList.remove('fa-play')
                        playing.classList.add('fa-pause')
                          
                    },1000)
                    setTimeout(function(){
                        audio.setAttribute("autoplay","true");
                        cdThumbAnimate.play();
                        audio.play();
                    },1200)       
                }else {
                    cdThumbAnimate.pause(); 
                    playing.classList.add('fa-play')
                    setTimeout(function(){
                        setTimeout(function(){
                            playing.classList.remove('fa-play')
                            playing.classList.add('fa-pause')    
                        },1000)
                        setTimeout(function(){
                            audio.setAttribute("autoplay","true");
                            cdThumbAnimate.play();
                            audio.play();
                        },1200)
                    }) 
                }
            }
           
        }
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandom();
            }else{
            const nodeMusic = Number($('tbody tr').dataset.index);
            
            const checked = _this.currentSong.singer_id;
            
            console.log(_this.currentIndex)
            fetch('https://music-api.000webhostapp.com/myskil/reshful-api/api/music/showMr.php?id=' + checked)
            .then(res => res.json())
            .then(data => {
                _this.currentIndex--;
                if(_this.currentIndex < 0){
                    _this.currentIndex = Math.max(data.music.length - 1);
                    _this.loadSong();
                }
                else if(_this.currentSong.singer_id != checked){
                    const change = Math.max(data.music.length);
                    _this.currentIndex  = (change * 4);
                    while(_this.currentSong === undefined){
                        _this.currentIndex--; 
                    }
                    if(_this.currentSong.singer_id != checked){
                        do{
                            _this.currentIndex--;
                            console.log(_this.currentIndex);
                        }while(_this.currentSong.singer_id != checked);

                    }  
                    
                    
                }
                _this.loadSong();
            })

            
            // _this.loadSong();
            setTimeout(function(){
                playing.classList.remove('fa-play')
                playing.classList.add('fa-pause')    
            },1000)
            setTimeout(function(){
                audio.setAttribute("autoplay","true");
                cdThumbAnimate.play();
                audio.play();
            },1200)  
            }    
        }
        redoBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            redoBtn.classList.toggle('active-music',_this.isRepeat);
        }
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play();
                console.log(_this.currentIndex)
            }else{
                if(_this.isRandom){
                    _this.playRandom();
                }else {
                    nextBtn.click();
                }
               
            }
        }
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active-music',_this.isRandom);
        }
        cdThumbAnimate.pause();
        playing.onclick = function(){
            if(playing.classList.contains("fa-play")){
                audio.play();
                playing.classList.remove("fa-play");
                playing.classList.add("fa-pause");
                cdThumbAnimate.play();
                
            }else{
                audio.pause();
                playing.classList.add("fa-play");
                playing.classList.remove('fa-pause');
                cdThumbAnimate.pause();
            }
        }
        audio.ontimeupdate = function(){
            if(audio.duration){
              const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
              progress.value = progressPercent;
            }
        }
        progress.onchange = function(e){
            var seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
        
        
    },
    checktitle : function() {
        title.innerText = this.currentSong.name_singer;
    },
    rengerSG: function(){
        fetch('http://localhost/music-api/api/music/singerlist.php')
        .then(res => res.json())
        .then(sg => {
            var sginner = sg.singer.map((sing)=>{
                return `
                    <li class="singer__list--item" onclick="renderMusicofSinger(${sing.singer_id})">${sing.name_singer}</li>
                `;
            })
            singerList.innerHTML = sginner.join('');
        })
    },

    start: function() {
        this.handleEvents();
        this.getMusic();
        this.defineProperties();
        this.rengerSG();
        
    }
}

app.start();




        
    


        
    
