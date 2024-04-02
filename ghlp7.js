export function initializeDynamicContent(userName, repoName, ghDotIoDir) {
    const goToProjectBtn = document.getElementById("goToProjectBtn");
    const healthIcon = document.getElementById("healthIcon");
    const healthText = document.getElementById("healthText");

    goToProjectBtn.addEventListener("click", () => {
        healthText.textContent = "Checking project page...";
        fetch(`https://${userName}.github.io/${repoName}/${ghDotIoDir}`)
            .then(response => {
                if (response.ok) {
                    healthIcon.innerHTML = "&#10004;"; // Checkmark symbol
                    healthText.textContent = "Project page is available!";
                    window.location.href = `https://${userName}.github.io/${repoName}/${ghDotIoDir}`;
                } else {
                    healthIcon.innerHTML = "&#10008;"; // X symbol
                    healthText.textContent = "No Github Page for this project.";
                }
            })
            .catch(() => {
                healthIcon.innerHTML = "&#10008;"; // X symbol
                healthText.textContent = "No Github Page for this project.";
            });
    });
}
