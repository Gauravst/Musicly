// Initialize the Variables
let song_id = 1;
let audio_Element = new Audio('songs/song1.mp3');
let start_time;
let current_time;
let audio_time;
let bar = document.getElementById('progress_bar');
let play = document.getElementById('play');
let back = document.getElementById('back');
let next = document.getElementById('next');
let song_items = Array.from(document.getElementsByClassName('song_x1'));
// let playr = Array.from(document.getElementsByClassName('playr'));
// console.log(playr);

console.log(song_items);

// Songs Database
let songs = [
  {
    song_id: 1,
    song_name: "HAAD MASALA - GULZAAR CHHANIWALA",
    song_url: "https://t.ly/-ATEM",
    song_cover: "https://t.ly/NrDs",
    song_time: "03:28"
  },

  {
    song_id: 2,
    song_name: "Besharam Rang - Phathan",
    song_url: "https://t.ly/-0VZ",
    song_cover: "https://t.ly/jCuu",
    song_time: "03:14"
  },

  {
    song_id: 3,
    song_name: "Tu Te Sharab - Jordan Sandhu",
    song_url: "#",
    song_cover: "https://rb.gy/9c46uo",
    song_time: "03:14"
  },

  {
    song_id: 4,
    song_name: "Bling Bling - Dilnoor",
    song_url: "https://t.ly/jD1x",
    song_cover: "https://rb.gy/kjlxj6",
    song_time: "03:14"
  },

  {
    song_id: 5,
    song_name: "Main Khiladi - Udit Narayan",
    song_url: "https://rb.gy/tv4nej",
    song_cover: "https://rb.gy/ryiv1x",
    song_time: "03:07"
  },

  {
    song_id: 6,
    song_name: "Chedkhaniyan - Arijit Singh, Nikhita Gandhi",
    song_url: "https://rb.gy/rfsvwb",
    song_cover: "https://rb.gy/9c46uo",
    song_time: "03:15"
  },

  {
    song_id: 7,
    song_name: "Kalaiyaan - Mani Cheema",
    song_url: "https://rb.gy/9iyzc5",
    song_cover: "http://t.ly/Ei66",
    song_time: "03:14"
  },

  {
    song_id: 8,
    song_name: "Bling Bling - Dilnoor",
    song_url: "https://t.ly/jD1x",
    song_cover: "https://rb.gy/kjlxj6",
    song_time: "02:53"
  },

  {
    song_id: 9,
    song_name: "Jhanjran -  Babbu Maan",
    song_url: "http://shorturl.at/itIQW",
    song_cover: "http://shorturl.at/goqt7",
    song_time: "03:14"
  },

  {
    song_id: 10,
    song_name: "Main Khiladi - Udit Narayan",
    song_url: "https://rb.gy/tv4nej",
    song_cover: "https://rb.gy/ryiv1x",
    song_time: "03:07"
  },

  {
    song_id: 11,
    song_name: "HAAD MASALA - GULZAAR CHHANIWALA",
    song_url: "https://t.ly/-ATEM",
    song_cover: "https://t.ly/NrDs",
    song_time: "03:28"
  },

  {
    song_id: 12,
    song_name: "Bling Bling - Dilnoor",
    song_url: "https://t.ly/jD1x",
    song_cover: "https://rb.gy/kjlxj6",
    song_time: "02:53"
  },
]

Array.from(document.getElementsByClassName('playr')).forEach((element) => {
  element.addEventListener('click', (e) => {
    if (audio_Element.paused || audio_Element.currentTime <= 0) {
      audio_Element.src = 'songs/song1.mp3';
      audio_Element.play();
      audio_Element.currentTime = 0;
      play.classList.remove('fa-circle-play');
      play.classList.add('fa-circle-pause');
      document.getElementsByClassName('playr').classList.remove('fa-circle-play');
      document.getElementsByClassName('playr').classList.add('fa-circle-pause');
    }
    else {
      audio_Element.pause();
      play.classList.add('fa-circle-play');
      play.classList.remove('fa-circle-pause');
      document.getElementsByClassName('playr').classList.add('fa-circle-play');
      document.getElementsByClassName('playr').classList.remove('fa-circle-pause');
    }
  })
});

console.log("check1");
// console.log(song);
// adding data to song list
song_items.forEach((element, i) => {
  element.getElementsByClassName("song_title_x1")[0].innerHTML = songs[i].song_name;
  element.getElementsByClassName("song_cover_x1")[0].src = songs[i].song_cover;
  element.getElementsByClassName("song_time")[0].innerHTML = songs[i].song_time;
});

console.log("check2")

// // play pause by main button
// playy.addEventListener('click', () =>{
//   if(audio_Element.paused || audio_Element.currentTime<=0){
//     audio_Element.play();
//     playy.classList.remove('fa-circle-play');
//     playy.classList.add('fa-circle-pause');
//   } else {
//     audio_Element.pause();
//     playy.classList.remove('fa-circle-pause');
//     playy.classList.add('fa-circle-play');
//   }
// })

console.log("hello")

