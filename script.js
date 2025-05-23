const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  if (input.value != "" && input.value.includes("@")) {
    input.parentElement.classList.remove("erro");
  } else {
    input.parentElement.classList.add("erro");
  }
});

button.addEventListener("blur", () => {
  input.parentElement.classList.remove("erro");
});
