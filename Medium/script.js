const moodSelect = document.getElementById("moodSelect");
const playlist = document.getElementById("playlist");

const moods = {
    happy:{
        bg:"linear-gradient(135deg,#f7971e,#ffd200)",
        songs:["Good Vibes","Joy Ride","Smile Beats"]
    },
    sad:{
        bg:"linear-gradient(135deg,#2C3E50,#4CA1AF)",
        songs:["Alone Night","Deep Feel","Silent Tears"]
    },
    calm:{
        bg:"linear-gradient(135deg,#56ab2f,#a8e063)",
        songs:["Peace Flow","Soft Breeze","Mind Relax"]
    },
    energetic:{
        bg:"linear-gradient(135deg,#f12711,#f5af19)",
        songs:["Power Mode","Run Fast","Energy Boost"]
    },
    romantic:{
        bg:"linear-gradient(135deg,#ff758c,#ff7eb3)",
        songs:["Heart Beats","Love Tune","Forever Us"]
    },
    focused:{
        bg:"linear-gradient(135deg,#1c92d2,#f2fcfe)",
        songs:["Deep Focus","Study Mode","Think Sharp"]
    },
    sleepy:{
        bg:"linear-gradient(135deg,#141E30,#243B55)",
        songs:["Night Calm","Dream Flow","Sleep Tight"]
    },
    angry:{
        bg:"linear-gradient(135deg,#93291E,#ED213A)",
        songs:["Release Rage","Heavy Beats","Fire Inside"]
    },
    lonely:{
        bg:"linear-gradient(135deg,#757F9A,#D7DDE8)",
        songs:["Empty Roads","Missing You","Silent Room"]
    },
    excited:{
        bg:"linear-gradient(135deg,#fc4a1a,#f7b733)",
        songs:["Party On","Feel Alive","Jump High"]
    }
};

moodSelect.addEventListener("change",()=>{
    const mood = moodSelect.value;
    playlist.innerHTML = "";

    if(mood){
        document.body.style.background = moods[mood].bg;

        moods[mood].songs.forEach(song=>{
            const li = document.createElement("li");
            li.textContent = song;
            playlist.appendChild(li);
        });
    }
});