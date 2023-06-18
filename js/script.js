// initialize variables
let currentAudio = null;
let currentSong = null;
let audio = new Audio();

// song list
let forYouList = document.querySelector("#forYouList");
let trending = document.querySelector("#trending");
let topList = document.querySelector("#topList");
let popupNextList = document.querySelector(".popupContant");

// player left btn & icon
let back = document.querySelector("#backBtn");
let play = document.querySelector("#playBtn");
let next = document.querySelector("#nextbtn");
let close = document.querySelector("#closeBtn");
let backIcon = back.querySelector("i");
let playIcon = play.querySelector("i");
let nextIcon = next.querySelector("i");

// player info
let playerCont = document.querySelector("#playerCont");
let playerCover = document.querySelector(".playerCover");
let playerSongName = document.querySelector(".playerSongName");
let playerTime = document.querySelector(".playerTime");
let progressBar = document.querySelector("#progressBar");

// popup element
let popupImg = document.querySelector(".popupImg");

// title split
const title = (name) => {
  if (name.length < 25) {
    return name;
  } else {
    return name.substr(0, 22) + "...";
  }
};

// add song to list
const addSongs = (songs, item, where, cssClass) => {
  for (let i = 0; i < item; i++) {
    let song = songs[i];

    let songDiv = document.createElement("div");
    songDiv.className = cssClass;

    songDiv.innerHTML = `
      <div class="ItemLeft">
        <img src=${song.song_cover || "../assets/img/cover.png"} class="songCover" />
        <div class="songTitle">${title(song.song_name)}</div>
      </div>
      <div class="ItemRight">
        <div class="songTime">${song.song_time}</div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;

    songDiv.addEventListener("click", () => {
      playSong(song);
    });

    where.appendChild(songDiv);
  }
};

// fetching data
const fetchData = async () => {
  try {
    const response = await fetch("../db/songs.json");
    const data = await response.json();
    let songs = data;

    addSongs(songs.forYouDB, 6, forYouList, "songItem");
    addSongs(songs.trendingDB, 2, trending, "songItem");
    addSongs(songs.topDB, 3, topList, "songItem");
    addSongs(songs.forYouDB, 10, popupNextList, "songItem2");
  } catch (error) {
    console.error("Error loading song database:", error);
  }
};
fetchData();

// play song from list
const playSong = async (song) => {
  if (currentAudio !== null) {
    await currentAudio.pause();
    currentAudio.currentTime = 0;
    playIcon.classList.remove(...playIcon.classList);
    playIcon.classList.add("fa", "fa-play");
  }

  audio.src = song.song_url;
  playerCover.src = song.song_cover || "../assets/img/cover.png";
  popupImg.src = song.song_cover || "../assets/img/cover.png";
  playerSongName.innerText = title(song.song_name);

  currentAudio = audio;
  currentSong = song;

  playIcon.classList.remove(...playIcon.classList);
  playIcon.classList.add("fa-solid", "fa-pause");
  await audio.play();

  if (currentSong) {
    playerCont.style.display = "block";
  } else {
    playerCont.style.display = "none";
  }
};

// play pause btn
play.addEventListener("click", async () => {
  if (playIcon.classList.contains("fa-play")) {
    if (currentSong !== null) {
      audio.play();
      playIcon.classList.remove(...playIcon.classList);
      playIcon.classList.add("fa-solid", "fa-pause");
    }
  } else {
    audio.pause();
    playIcon.classList.remove(...playIcon.classList);
    playIcon.classList.add("fa", "fa-play");
  }
});

// close player btn
close.addEventListener("click", async () => {
  audio.pause();
  currentAudio = null;
  currentSong = null;
  playerCont.style.display = "none";
  playIcon.classList.remove(...playIcon.classList);
  playIcon.classList.add("fa", "fa-play");
});

// audio loading listener
audio.addEventListener("loadstart", () => {
  playIcon.classList.remove(...playIcon.classList);
  playIcon.classList.add("fa", "fa-spinner", "spin");
  play.classList.add("disable");
  playerCont.style.display = "block";
});

audio.addEventListener("canplaythrough", () => {
  playIcon.classList.remove(...playIcon.classList);
  playIcon.classList.add("fa", "fa-pause");
  play.classList.remove("disable");
});

// player time
audio.addEventListener("timeupdate", () => {
  const currentTime = formatTime(audio.currentTime);
  const songDuration = currentSong.song_time;
  playerTime.innerHTML = `<span>${currentTime}</span> / <span>${songDuration}</span>`;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;

});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

progressBar.addEventListener("input", () => {
  const progress = progressBar.value;
  const duration = audio.duration;
  const currentTime = (progress / 100) * duration;

  audio.currentTime = currentTime;
});
