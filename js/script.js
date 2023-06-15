// Initialize the Variables
let song_id = 1;
let start_time;
let current_time;
let audio_time;
let bar = document.getElementById("progress_bar");
let play = document.getElementById("play");
let back = document.getElementById("back");
let next = document.getElementById("next");
let forYouList = document.getElementById("forYouList");
let trending = document.getElementById("trending");
let topList = document.getElementById("topList");

const AddSongs = (songs, item, where) => {
  for (let i = 0; i < item; i++) {
    const song = songs[i];

    const songDiv = document.createElement("div");
    songDiv.className = "songItem";

    const title = (name) => {
      if (name.length < 25) {
        return name;
      } else {
        return name.substr(0, 22) + "...";
      }
    };

    songDiv.innerHTML = `
    <div class = "ItemLeft">
      <img src=${song.song_cover || "../assets/img/cover.png"} class="song_cover_x1" />
      <div class="song_title_x1">${title(song.song_name)}</div>
    </div>
    <div class="ItemRight">
      <div class="song_time">${song.song_time}</div>
      <i id="1" class="playr fa-regular fa-circle-play"></i>
    </div>
    `;

    where.appendChild(songDiv);
  }
};

// Fetching data
fetch("../db/songs.json")
  .then((response) => response.json())
  .then((data) => {
    const songs = data;

    AddSongs(songs.forYouDB, 6, forYouList);
    AddSongs(songs.trendingDB, 2, trending);
    AddSongs(songs.topDB, 3, topList);
  })
  .catch((error) => {
    console.error("Error loading song database:", error);
  });
