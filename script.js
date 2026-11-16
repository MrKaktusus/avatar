"use strict";
let avatar = document.getElementById("avatar")
let name = document.getElementById("name")
let description = document.getElementById("description")
let toggleBtn = document.getElementById("toggle-btn")

toggleBtn.addEventListener(
    "click", function () {
        let isHero = document.body.classList.contains("hero");

        if (isHero)  {
    name.textContent = "Shadow Villain";
    description.textContent = "Tryb: Łotr";
    avatar.src = "https://api.dicebear.com/10.x/fun-emoji/svg?seed=Mike";
    document.body.classList.remove("hero");
    document.body.classList.add("villain");
    } else {
        name.textContent = "Mega Mike";
    description.textContent = "Tryb: Random";
    avatar.src = "https://api.dicebear.com/10.x/fun-emoji/svg?seed=Mega Mike";
    document.body.classList.add("hero");
    document.body.classList.remove("villain");
    }
});
    


