//NodeList

// Select the container (which holds all buttons)
const container = document.getElementById("container");

// Use Event Delegation for mouseover, mouseout, and click
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("myButtons")) {
        event.target.style.backgroundColor = "tomato";
    }
});
container.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("myButtons")) {
        event.target.style.backgroundColor = "black";
    }
});
container.addEventListener("click", (event) => {
    if (event.target.classList.contains("myButtons")) {
        event.target.remove();
    }
});

    const newBtn = document.createElement("button");
    newBtn.classList.add("myButtons");
    newBtn.textContent = "Button 6";
    container.appendChild(newBtn);

