// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu(document) {
  const mainNav = document.createElement("nav");
  mainNav.classList.add("main-navigation");
  const navList = document.createElement("ul");
  navList.innerHTML = navContent;
  mainNav.append(navList);
  document.querySelector(".siteheader").append(mainNav);
}
