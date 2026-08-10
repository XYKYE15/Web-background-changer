const circles = document.querySelectorAll(".circle");
const resetButton = document.getElementById("resetButton");

// menyimpan warna default body
const defaultColor = getComputedStyle(document.body).backgroundColor;

circles.forEach((circle) => {
  circle.addEventListener("click", ({ target }) => {
    const { backgroundColor } = getComputedStyle(target);
    document.body.style.backgroundColor = backgroundColor;
  });
});

// Tombol Reset
resetButton.addEventListener("click", () => {
  document.body.style.backgroundColor = defaultColor;
});
