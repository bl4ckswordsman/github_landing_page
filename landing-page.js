function generateLandingPage(ghDotIoDir) {
    return `
<!DOCTYPE html>
<html lang="en">
<!-- ... rest of the HTML content ... -->
<script>
    // Set the href of the GitHub link
    const profileLink = document.getElementById("GHProfileLink");
    const userName = getUsernameFromURL();
    profileLink.href = \`https://github.com/\${userName}\`;
    profileLink.textContent = userName; // Set link text

    const projectLink = document.getElementById("projectLink");
    const project = getRepoFromURL();
    projectLink.href = \`https://github.com/\${userName}/\${project}\`;
    projectLink.textContent = project;

    const goToProjectBtn = document.getElementById("goToProjectBtn");
    const healthIcon = document.getElementById("healthIcon");
    const healthText = document.getElementById("healthText");

    goToProjectBtn.addEventListener("click", () => {
        healthText.textContent = "Checking project page...";
        fetch(\`https://\${userName}.github.io/\${project}/\${ghDotIoDir}\`)
            .then(response => {
                if (response.ok) {
                    healthIcon.innerHTML = "&#10004;"; // Checkmark symbol
                    healthText.textContent = "Project page is available!";
                    window.open(\`https://\${userName}.github.io/\${project}/\${ghDotIoDir}\`);
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
</script>
</body>
</html>
`;
}

// Export the function for use in other scripts
export { generateLandingPage };