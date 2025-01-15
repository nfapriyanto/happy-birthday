// Set the date we're counting down to (example: August 29, 2024)
const countDownDate = new Date("Jan 15, 2024 10:20:00").getTime();
let now;
let distance;

// Update the countdown every 1 second
const x = setInterval(function () {
  // Get today's date and time
  now = new Date().getTime();

  // Find the distance between now and the countdown date
  distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// Toggle button functionality
const imageContainer = document.getElementById("imageContainer");
const popupImage = document.getElementById("popupImage");
const content = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");
const newButton = document.getElementById("newButton");
const bgDark = document.querySelector(".bg-dark");
const bgLight = document.querySelector(".bg-light");
const bgAlbum = document.querySelector(".bg-album");
const body = document.body;
let isLampOn = false;
const confettiCanvas = document.getElementById("confettiCanvas");
let confetti;

toggleButton.addEventListener("click", function () {
  isLampOn = !isLampOn;
  body.classList.toggle("light-mode"); // Ini akan mengubah background-image dari bg_dark.png ke bg_light.png

  if (isLampOn) {
    bgDark.style.display = "none";
    bgLight.style.display = "block";
    this.textContent = "Turn Off Lamp";
    this.classList.remove("btn-primary");
    this.classList.add("btn-danger");
    newButton.classList.add("btn-outline-danger");
    newButton.classList.remove("btn-outline-primary");
    if (distance < 0) {
      newButton.style.display = "block";
    }
    // Inisialisasi confetti dan render
    if (!confetti) {
      confetti = new window.ConfettiGenerator({ target: "confettiCanvas" });
    }
    confetti.render();
  } else {
    bgDark.style.display = "block";
    bgLight.style.display = "none";
    this.textContent = "Turn On Lamp";
    this.classList.remove("btn-danger");
    this.classList.add("btn-primary");
    newButton.classList.add("btn-outline-primary");
    newButton.classList.remove("btn-outline-danger");
    newButton.style.display = "none";
    // Hentikan dan bersihkan confetti
    if (confetti) {
      confetti.clear();
    }
  }
});

const dialogTable = document.getElementById("dialogTable");
const textElement = document.getElementById("typingText");
const finalButton1 = document.getElementById("finalButton1");
const finalButton2 = document.getElementById("finalButton2");
const texts = [
  "Aku berharap hari ini menjadi hari yang spesial untukmu, meski aku tidak bisa ada di sana bersama kamu...",
  "Aku juga ingin sekali merayakan hari ulang tahunmu di sana, melihat senyummu saat meniup lilin, mendengar tawamu saat membuka kado... Tapi kenyataan berkata lain.",
  "Aku harus pergi berlibur dengan keluarga. Mereka sudah merencanakan ini jauh-jauh hari, dan aku tidak bisa menolak. Aku harap kamu bisa memahaminya... meskipun aku tahu ini sulit.",
  "Terima kasih sudah mengerti. Aku berjanji, begitu aku kembali, kita akan membuat hari-hari yang kita lewatkan menjadi lebih berarti. Aku akan menebus semua yang terlewat. Kamu adalah segalanya untukku, dan meskipun kita terpisah sementara, hatiku selalu bersamamu.",
  "Terima kasih sudah memahami, sayang. Selamat ulang tahun. Aku harap kamu bisa merasakan kehadiranku meski kita jauh. Tetap tersenyum untukku, ya? Aku akan segera kembali dan merayakan semuanya bersamamu. I love you, always.",
];
let textIndex = 0; // Index for current text
let index = 0;
textElement.textContent = "";

finalButton1.textContent = "Aku Mengerti, Lanjutkan...";
finalButton2.textContent = "Kenapa kamu tidak bisa datang?";

finalButton2.addEventListener("click", function () {
  finalButton1.style.display = "none";
  finalButton2.style.display = "none";

  if (textIndex === 0) {
    // Respon untuk "Kenapa kamu tidak bisa datang?"
    textIndex = 2;
    finalButton1.textContent = "Aku akan mencoba memahami...";
    finalButton2.textContent = "Aku masih merasa kecewa...";
  } else if (textIndex === 1 || textIndex === 2) {
    // Respon setelah penjelasan tentang liburan
    textIndex = 3;
    finalButton1.textContent = "Aku akan menunggu...";
  } else if (textIndex === 3) {
    // Respon terakhir
    textIndex = 4;
  }

  textElement.textContent = "";
  index = 0;
  typeWriter(); // Start typing next text
  startImageToggle();
});

finalButton1.addEventListener("click", function () {
  finalButton1.style.display = "none";
  finalButton2.style.display = "none";

  if (textIndex === 0) {
    // Respon untuk "Aku Mengerti, Lanjutkan..."
    textIndex = 1;
    finalButton1.textContent = "Aku akan mencoba memahami...";
    finalButton2.textContent = "Aku masih merasa kecewa...";
  } else if (textIndex === 1 || textIndex === 2) {
    // Respon setelah memahami atau kecewa
    textIndex = 3;
    finalButton1.textContent = "Aku akan menunggu...";
  } else if (textIndex === 3) {
    // Respon terakhir
    textIndex = 4;
  }

  textElement.textContent = "";
  index = 0;
  typeWriter(); // Start typing next text
  startImageToggle();
});

function typeWriter() {
  if (index < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed
  } else {
    if (textIndex < texts.length - 1) {
      dialogTable.setAttribute("clickable", "true"); // Make text clickable if not last text
      if (textIndex == 3) {
        finalButton1.style.display = "block";
        finalButton2.style.display = "none"; // Hide finalButton2 on last response
      } else {
        finalButton1.style.display = "block";
        finalButton2.style.display = "block";
      }
    } else {
      dialogTable.setAttribute("clickable", "false"); // Disable click if last text
      finalButton1.style.display = "none";
      finalButton2.style.display = "none";
    }
    clearInterval(interval);
    popupImage.src = "./image/user1.png";
  }
}

dialogTable.addEventListener("click", function () {
  if (dialogTable.getAttribute("clickable") === "true") {
    textIndex++;
    textElement.textContent = ""; // Clear text
    index = 0; // Reset index
    dialogTable.setAttribute("clickable", "false"); // Prevent clicking during typing
    typeWriter(); // Start typing next text
    startImageToggle();
  }
});

let interval; // Declare interval globally so it can be accessed in both functions

function startImageToggle() {
  let toggle = false;
  interval = setInterval(() => {
    if (index < texts[textIndex].length) {
      if (toggle) {
        popupImage.src = "./image/user1.png"; // Gambar pertama
      } else {
        popupImage.src = "./image/user2.png"; // Gambar kedua
      }
      toggle = !toggle;
    } else {
      popupImage.src = "./image/user1.png";
      clearInterval(interval); // Hentikan interval saat index >= text.length
    }
  }, 350);
}

newButton.addEventListener("click", function () {
  bgLight.style.display = "none";
  bgAlbum.style.display = "block";
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play(); // Mulai memutar musik

  content.style.display = "none";
  imageContainer.style.display = "block"; // Tampilkan gambar
  typeWriter();
  startImageToggle();
});
