function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName("profile"));

    profiles.forEach(profile => {
        let input = profile.querySelector("input[type=radio]");

        let button = profile.querySelector("button");

        let hidden = profile.querySelector("div");

        button.addEventListener("click", () => {
            if (!input.checked && button.textContent === "Show more") {
                hidden.style.display = "block";
                button.textContent = "Hide it";
            }
            else if (!input.checked && button.textContent === "Hide it") {
                hidden.style.display = "none";
                button.textContent = "Show more";
            }
        });

        
    });
}