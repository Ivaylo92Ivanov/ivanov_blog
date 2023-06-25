let textDisplay = document.querySelector(".text-display")

let buttons=document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener("click", () => textDisplay.innerHTML = `<object type="text/html" style="flex: 1;" data="articles/${button.id}.html" ></object>`));

// console.log(`clicked ${button.id}`)));

// textDisplay.innerHTML = `<object type="text/html" data="articles/${button.id}.html" ></object>`

