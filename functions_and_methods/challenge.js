// Set up the Backpack class
class Backpack {
  constructor(id, name, volume, color, pocketNum, dateAcquired) {
    this.id = id;
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.dateAcquired = dateAcquired;
  }

  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

// Create new Backpack objects
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  "December 5, 2018 15:00:00 PST"
);

const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

function createBackpackMarkup(document) {
  const content = backpackObjectArray.map((backPack) => {
    // Create elements
    let article = document.createElement("article");
    article.setAttribute("id", backPack.id);

    article.innerHTML = `
        <h1>${backPack.name}</h1>
        <ul>
            <li>Volume:<span> ${backPack.volume}l</span></li>
            <li>Color:<span> ${backPack.color}</span></li>
            <li>Age:<span> ${backPack.backpackAge()} days old</span></li>
            <li>Number of pockets:<span> ${backPack.pocketNum}</span></li>
        </ul>
        `;
    return article;
  });
  return content;
}

const backpacksMarkupArray = createBackpackMarkup(document);
// Combine the array items into a single output.
const result = backpacksMarkupArray.reduce((combinedHTML, backpack) => {
  return combinedHTML + backpack.outerHTML;
}, "");

console.log(result);
