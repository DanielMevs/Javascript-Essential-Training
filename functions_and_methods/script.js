// // Function declaration
// function doSomeMath(a, b) {
//   let c = a + b;
//   return c;
// }

// // Function expression (not hoisted)
// const doMoreMath = function (a, b) {
//   let c = a * b;
//   return c;
// };

// console.log("Do some math:", doSomeMath(6, 5));
// console.log("Do more math:", doMoreMath(6, 5));

// // Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 5;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // (function () {
    //   console.log("this.volume in nested function:", this.volume);
    // })();
  },
};

// const addPack = function (currentPack) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//       <h1>${currentPack.name}</h1>
//       <ul>
//         <li>Volume: ${currentPack.volume}</li>
//         <li>Color: ${currentPack.color}</li>
//         <li>Number of pockets: ${currentPack.pocketNum}</li>
//       </ul>
//     `;
//   return newArticle;
// };

// Arrow function
const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
          <li>Volume: ${currentPack.volume}</li>
          <li>Color: ${currentPack.color}</li>
          <li>Number of pockets: ${currentPack.pocketNum}</li>
        </ul>
      `;
  return newArticle;
};

const theArticle = addPack(greenPack);
console.log(theArticle);
const main = document.querySelector("main");
main.append(addPack(greenPack));

console.log(greenPack.newVolume(5));
