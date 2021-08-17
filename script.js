//1) 프리로더하는 방법 
//2) js통해서 동영상을 재생,정지시킴
const playbtn= document.querySelector(".fa-play-circle")
const media =document.querySelector("video")
let classname =playbtn.classList;

console.log(classname===`fas fa-play-circle`);
//paused👉미디어가 정지되어있는지 아닌지를 판별  
function changeBtn(){
    if(playbtn.className==`fas fa-play-circle`){
    classname.add('fa-pause-circle');
    }else{classname="fas fa-play-circle"

    }
}
function mediaControl(){
    if(media.paused){
        media.play()
        changeBtn()
    }else{media.pause()
        changeBtn()}
}

playbtn.addEventListener('click',mediaControl)