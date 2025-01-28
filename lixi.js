const envelope = document.querySelector(".present-box");
const music = document.getElementById("backgroundMusic");
let isMusicPlaying = false;

function openEnvelope() {
  envelope.classList.add("open"); // Thêm lớp "open" để kích hoạt hiệu ứng mở bao lì xì

  if (!isMusicPlaying) {
    music.play();
    isMusicPlaying = true;
  }
}
