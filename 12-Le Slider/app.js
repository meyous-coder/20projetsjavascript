const imgs = document.querySelectorAll(".cont-slides img");
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
const cercles = document.querySelectorAll(".cercle");
document.addEventListener("keydown", keyPressed);

let index = 0;

suivant.addEventListener("click", slideSuivante);
precedent.addEventListener("click", slidePrecedent);

function slideSuivante() {
  if (index < 2) {
    imgs[index].classList.remove("active");
    index++;
    imgs[index].classList.add("active");
  } else if (index === 2) {
    imgs[index].classList.remove("active");
    index = 0;
    imgs[index].classList.add("active");
  }

  for (i = 0; i < cercles.length; i++) {
    if (cercles[i].getAttribute("data-clic") - 1 === index) {
      cercles[i].classList.add("active-cercle");
    } else {
      cercles[i].classList.remove("active-cercle");
    }
  }
}

function slidePrecedent() {
  if (index > 0) {
    imgs[index].classList.remove("active");
    index--;
    imgs[index].classList.add("active");
  } else if (index === 0) {
    imgs[index].classList.remove("active");
    index = 2;
    imgs[index].classList.add("active");
  }

  for (i = 0; i < cercles.length; i++) {
    if (cercles[i].getAttribute("data-clic") - 1 === index) {
      cercles[i].classList.add("active-cercle");
    } else {
      cercles[i].classList.remove("active-cercle");
    }
  }
}

function keyPressed(e) {
  if (e.keyCode === 37) {
    slideSuivante();
  } else if (e.keyCode === 39) {
    slidePrecedent();
  }
}

cercles.forEach((cercle) => {
  cercle.addEventListener("click", function () {
    for (i = 0; i < cercles.length; i++) {
      cercles[i].classList.remove("active-cercle");
      this.classList.add("active-cercle");

      imgs[index].classList.remove("active");
      index = this.getAttribute("data-clic") - 1;
      imgs[index].classList.add("active");
    }
  });
});
