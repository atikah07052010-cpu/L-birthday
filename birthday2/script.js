function goTo(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 400);
}

function openLetter() {
  const env = document.querySelector(".envelope");
  env.classList.toggle("open");

  if (env.classList.contains("open")) {
    startTyping();
  }
}

/* typing effect */
const text = `Selamat ulang tahun ntang💜✨

Lets make a wish...
what is your wish??
kuharap kamu sehat terus
dikuatkan hatinya memalui apapun itu
and...be happier person
you are a great person 

Thank you for everything🌸`;

let i = 0;
let started = false;

function startTyping() {
  if (started) return;
  started = true;

  const target = document.getElementById("typingText");

  function type() {
    if (i < text.length) {
      target.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

/* slider 5 detik */
let index = 0;

setInterval(() => {
  let slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
}, 5000);