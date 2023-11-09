let a=document.getElementsByClassName("drum");
for(let x=0;x<a.length;x++){
    a[x].addEventListener('click',()=>{
        let b=a[x].innerHTML;
        SC(b);
        ani(b);

    })
}


document.addEventListener("keypress",(e)=>{
    let c=e.key;
    SC(c);
    ani(c);

})

function SC(b){
    switch(b){
        case 'w':
            var aud=new Audio("./sounds/crash.mp3");
            aud.play();
            break;

        case 'a':
            var aud=new Audio("./sounds/kick-bass.mp3");
            aud.play();
            break;

        case 's':
            var aud=new Audio("./sounds/snare.mp3");
            aud.play();
            break;

        case 'd':
            var aud=new Audio("./sounds/tom-1.mp3");
            aud.play();
            break;

        case 'j':
            var aud=new Audio("./sounds/tom-2.mp3");
            aud.play();
            break;

        case 'k':
            var aud=new Audio("./sounds/tom-3.mp3");
            aud.play();
            break;

        case 'l':
            var aud=new Audio("./sounds/tom-4.mp3");
            aud.play();
            break;

        default:
            console.log(b);
    }
}
function ani(k){
    var k=document.querySelector("."+k);
    k.classList.add('pressed');
    setTimeout(()=>{k.classList.remove('pressed');},100)

}