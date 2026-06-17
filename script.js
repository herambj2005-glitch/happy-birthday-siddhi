const loveMessages = [

    "❤️ Beautiful Smile",
    "🌸 Cute Laugh",
    "✨ Amazing Person",
    "💖 Forever Special",
    "🥰 My Favourite Human",
    "🌹 Pretty Eyes",
    "🎂 Birthday Girl",
    "💫 Pure Soul",
    "💕 Wonderful Friend",
    "🌷 One Of A Kind"

];

function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}

function startSurprise(){

    launchConfetti();

    scrollToGallery();
}

function launchConfetti(){

    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for(let i=0;i<150;i++){

        confetti.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height-canvas.height,
            size:Math.random()*8+4,
            speed:Math.random()*5+2,
            rotation:Math.random()*360
        });
    }

    let frame = 0;

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        confetti.forEach(c=>{

            ctx.fillStyle =
            `hsl(${Math.random()*360},100%,70%)`;

            ctx.save();

            ctx.translate(c.x,c.y);

            ctx.rotate(c.rotation);

            ctx.fillRect(
                -c.size/2,
                -c.size/2,
                c.size,
                c.size
            );

            ctx.restore();

            c.y += c.speed;
            c.rotation += 0.1;

        });

        frame++;

        if(frame < 250){

            requestAnimationFrame(animate);
        }
        else{

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    }

    animate();
}

function startWebsite() {

    document.getElementById("welcomePopup").style.display = "none";

    const music = document.getElementById("bgMusic");

    music.play()
        .then(() => {
            console.log("Music started");
        })
        .catch(err => {
            console.log(err);
        });

    createLoveNote();

    setInterval(createLoveNote,3000);
}

const message =
`Happy Birthday Siddhi ❤️

Thank you for being such a beautiful part of my life.

Your smile makes every day brighter and every moment special.

I wish this year brings you happiness, success, good health and countless reasons to smile.

Keep shining and keep smiling...😊❤️

`;

let index = 0;

function typeMessage(){

    const area = document.getElementById("typedMessage");

    if(index < message.length){

        area.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage,35);
    }
}

let messageStarted = false;

window.addEventListener("scroll", function(){

    const messageSection =
        document.querySelector(".message");

    const sectionTop =
        messageSection.getBoundingClientRect().top;

    const triggerPoint =
        window.innerHeight - 200;

    if(sectionTop < triggerPoint &&
       !messageStarted){

        messageStarted = true;

        typeMessage();
    }
});

const music = document.getElementById("bgMusic");

const letterBtn = document.getElementById("letterBtn");
const letterPopup = document.getElementById("letterPopup");

letterBtn.addEventListener("click", () => {
    letterPopup.style.display = "flex";
});

function closeLetter(){
    letterPopup.style.display = "none";
}

function openLetter() {
    document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter() {
    document.getElementById("letterPopup").style.display = "none";
}

function closeFinalSurprise(){

    document.getElementById("finalPopup").style.display = "none";
}

function createMegaConfetti(){

    for(let i=0;i<200;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="🌹💝✨";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-50px";

        confetti.style.fontSize=(Math.random()*25+15)+"px";

        confetti.style.zIndex="999999";

        document.body.appendChild(confetti);

        const duration=Math.random()*3000+3000;

        confetti.animate([
            {transform:"translateY(0px) rotate(0deg)"},
            {transform:`translateY(${window.innerHeight+200}px) rotate(720deg)`}
        ],{
            duration:duration,
            easing:"linear"
        });

        setTimeout(()=>{
            confetti.remove();
        },duration);
    }
}

function createLoveNote(){

    const note = document.createElement("div");

    note.className = "love-note";

    note.innerHTML =
        loveMessages[
            Math.floor(Math.random()*loveMessages.length)
        ];

    note.style.left =
        Math.random()*80 + "vw";

    note.style.top =
        Math.random()*50 + 25 + "vh";

    document.body.appendChild(note);

    setTimeout(()=>{
        note.remove();
    },6000);
}

function showFinalSurprise(){

    document.getElementById("finalPopup").style.display = "flex";

    startFireworks();

    typeFinalMessage();
}

function typeFinalMessage(){

    const text =

`No matter whatever happened, what happens and what will happen...,

I will always be there with you, for you... ❤️

Happy Birthday Siddhi 🎂

Forever Yours,
Heramb ❤️`;

    const element =
        document.getElementById("typeEnding");

    element.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        element.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);
        }

    },45);
}

function startFireworks(){

    const canvas =
        document.getElementById("fireworksCanvas");

    const ctx =
        canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setInterval(()=>{

        const x =
            Math.random()*canvas.width;

        const y =
            Math.random()*canvas.height/2;

        for(let i=0;i<40;i++){

            const particle =
                document.createElement("div");

            particle.style.position="fixed";

            particle.style.left=x+"px";
            particle.style.top=y+"px";

            particle.style.width="8px";
            particle.style.height="8px";

            particle.style.borderRadius="50%";

            particle.style.background=
                `hsl(${Math.random()*360},100%,60%)`;

            particle.style.zIndex="999999";

            document.body.appendChild(particle);

            const angle=
                Math.random()*Math.PI*2;

            const distance=
                Math.random()*200+50;

            particle.animate([
                {
                    transform:"translate(0,0)",
                    opacity:1
                },
                {
                    transform:
                    `translate(
                        ${Math.cos(angle)*distance}px,
                        ${Math.sin(angle)*distance}px
                    )`,
                    opacity:0
                }
            ],{
                duration:1500
            });

            setTimeout(()=>{
                particle.remove();
            },1500);
        }

    },800);
}
