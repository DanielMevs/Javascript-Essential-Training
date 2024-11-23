const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  newDeskArr.pop(); // remove last item
  newDeskArr.sort(); // sort items
  const lastItem = newDeskArr.pop(); // get last element
  newDeskArr.unshift(lastItem); // move it to front of array

  const usbIndex = newDeskArr.indexOf("USB drive"); // get index of item
  // check if the index exists
  if (usbIndex !== -1) {
    newDeskArr.push(newDeskArr.splice(usbIndex, 1)[0]); // move element to back
  }

  const laptopIndex = newDeskArr.indexOf("laptop");
  // check if index exists
  if (laptopIndex !== -1) {
    newDeskArr.splice(laptopIndex, 1); // remove item
  }

  return newDeskArr;
};
