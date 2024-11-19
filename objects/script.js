/**
 * Create a Backpack object.
 */
import Backpack from "./Backpack.js";

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value: ", backpack.pocketNum);
console.log("Strap length L:", backpack.strapLength.left);

var query = "pocketNum";
console.log("The pockNum value:", backpack[query]);

backpack.newStrapLength(10, 15);
console.log("Strap length L:", backpack.strapLength.left);

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
bt56522;
console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("Days since aquired: ", everydayPack.backpackAge());
