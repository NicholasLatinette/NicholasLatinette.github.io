const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("a").forEach(anchor => {
  anchor.onmouseover = event => {
    scrambleLetters(event.target);
  };
});

function scrambleLetters(element) {
  if (element.className == "selected")
  {
      return;
  }
  let iteration = 0;
  const originalText = element.dataset.value;
  const textLength = originalText.length;
  let interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= textLength) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
