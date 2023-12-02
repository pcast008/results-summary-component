async function getData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const pillsContainer = document.querySelector(".pills-container");
const template = document.querySelector("#pill-template");

function buildPill(pill) {
  const templateClone = template.content.cloneNode(true);

  const pillDiv = templateClone.querySelector(".pill");
  pillDiv.classList.add(pill.category.toLowerCase());

  const pillText = templateClone.querySelector(".pill-text");
  pillText.textContent = pill.category;

  //   const spanText = templateClone.querySelector("span");
  //   spanText.textContent = "/ 100";

  const image = templateClone.querySelector("img");
  image.src = pill.icon;

  const scoreText = templateClone.querySelector(".score-text");
  scoreText.textContent = pill.score;

  return templateClone;
}

function renderPill(pill) {
  pillsContainer.appendChild(pill);
}

getData().then((pills) => {
  pills.map((pill) => renderPill(buildPill(pill)));
});
