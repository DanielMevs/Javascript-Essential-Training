function updatePage(document) {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => callback(event, document));
  });
}

function callback(event, document) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target.getAttribute("data-target");
  const inputElement = document.getElementById(`${form}-input`);
  const targetElement = document.getElementById(form).querySelector(".value");
  targetElement.textContent = inputElement.value;
}
