setTimeout(() => {
  let numbers = document.querySelectorAll(".objectList .sapMObjectNumberText");

  for (const key of numbers) {
    const num = parseInt(key.innerHTML);
    if (num > 50) {
      key.innerHTML = 100;
      key.style["font-weight"] = "bold";
    }
  }
}, 350);
