let ball = document.querySelector("#bola");
let goal = document.querySelector("#gol");

goal.addEventListener("mousemove", (evt) => {
  if (evt.buttons == 1) {
    const clientX = evt.clientX;
    const widthGoal = goal.getBoundingClientRect().width;

    goal.style.left = `${clientX - widthGoal / 2}px`;
  }
});

const randomLeft = (n) => {
  return Math.floor(Math.random() * (n + 1));
};

const f = () => {
  ball.style.left = `${randomLeft(100)}%`;
  ball.style.bottom = `0%`;

  setTimeout(f, [2000]);
};

setTimeout(f, [2000]);
