$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
    $(".overlay p").toggleClass("open");
  });
});
const musicbar = document.querySelector(".music");
const musicname = document.querySelector(".musicname");
const artis = document.querySelector(".artist");
const img = document.querySelector(".cover");
const imgs = document.querySelector(".shadow");
const rote = document.querySelector(".cover");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const music = document.getElementById("music");
const musicList = document.getElementsByTagName("li");
const progressBar = document.getElementById("progress-bar");
let currentTrack = 0;
let currentList;

let tracks = [
  {
    track: 1,
    name: "More",
    artist: "reaLBERG",
    duration: "3:33",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
      "./assets/audio/pop_instrumental.mp3"
  },
  {
    track: 2,
    name: "Untitled",
    artist: "reaLBERG",
    duration: "3:45",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
      "./assets/audio/playground.mp3"
  },
  {
    track: 3,
    name: "Less",
    artist: "reaLBERG",
    duration: "3:23",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
      "./assets/audio/less.mp3"

  },
  {
    track: 4,
    name: "Break it all down (metal)",
    artist: "reaLBERG",
    duration: "3:21",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
    "./assets/audio/alt_metal.mp3"

  },
  {
    track: 5,
    name: "Break it all down (Guzheng)",
    artist: "reaLBERG",
    duration: "3:22",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
      "./assets/audio/break_it_all_down.mp3"
  },
  {
    track: 6,
    name: "Enemy",
    artist: "reaLBERG",
    duration: "3:21",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
    "./assets/audio/enemy.mp3"

  }
];

function init() {
  if (currentTrack === 0) {
    music.src = tracks[0].url;
    music.load();
  }

  for (let i = 0; i < tracks.length; i++) {
    $("#musiclist")
      .append(`<li id="${i}"><div class="box" ><div class="icon"><img src="${tracks[i].image}"/></div>
<div class="content"><svg viewBox="0 0 512 512"><g><g>
		<g>
			<circle cx="256" cy="256" r="64"/>
			<circle cx="256" cy="448" r="64"/>
			<circle cx="256" cy="64" r="64"/>
		</g>
	</g>
</g>
</svg>
     <svg viewBox="0 0 448 448"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
 <h5>${tracks[i].duration}</h5>
    <h3>${tracks[i].name}</h3>
    <h6>${tracks[i].artist}</h6><div></div></li>`);
  }

  for (let musicIndex = 0; musicIndex < musicList.length; musicIndex++) {
    musicList[musicIndex].addEventListener("click", switchMusic, false);
  }
}

function switchMusic(e) {
  if (currentList !== undefined) {
    removePlayedBackground();
    music.pause();
  }
  currentTrack = this.id;
  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function addChoosedBackground() {
  currentList = document.getElementById(currentTrack);
  currentList.classList.add("song-play-now");
}

function removePlayedBackground() {
  currentList.classList.remove("song-play-now");
}

function play() {
  img.src = tracks[currentTrack].image;
  imgs.src = tracks[currentTrack].image;
  artis.innerHTML = tracks[currentTrack].artist;
  musicname.innerHTML = tracks[currentTrack].name;
  rote.classList.add("rote");
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  musicbar.classList.add("openn");
  music.play();
  musicIsPlaying = true;
  addChoosedBackground();
  document.getElementById("end-time").innerHTML = tracks[currentTrack].duration;
}

function pause() {
  rote.classList.remove("rote");
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");

  musicIsPlaying = false;
  music.pause();
}

function prePlay() {
  removePlayedBackground();
  music.pause();

  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = tracks.length - 1;
  }

  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function nextPlay() {
  removePlayedBackground();
  music.pause();

  if (currentTrack < tracks.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }

  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ":" + seconds;

  return time;
}

function formatTime() {
  let timeline = document.getElementById("start-time");
  let s = parseInt(music.currentTime % 60);
  let m = parseInt((music.currentTime / 60) % 60);
  if (s < 10) {
    timeline.innerHTML = m + ":0" + s;
  } else {
    timeline.innerHTML = m + ":" + s;
  }
}

function updateProgress() {
  let current = music.currentTime,
      percent = (100/ music.duration * current)
  progressBar.setAttribute("value", percent);
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;

  music.currentTime = (clickX / width) * duration;
}

progressBar.addEventListener("click", setProgress);
playBtn.addEventListener("click", play, false);
pauseBtn.addEventListener("click", pause, false);
preBtn.addEventListener("click", prePlay, false);
nextBtn.addEventListener("click", nextPlay, false);
music.addEventListener("ended", nextPlay, false);

music.addEventListener("timeupdate", formatTime, false);
music.addEventListener("timeupdate", updateProgress, false);

init();
