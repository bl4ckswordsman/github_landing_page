function generateLandingPage(userName, repoName, ghDotIoDir) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Pages - Landing Page</title>
    <!-- Add Bootstrap CSS link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Change link color to orange */
        .text-orange {
            color: #FFA500;
            word-break: break-word;
        }

        /* Animation is achieved through Bootstrap classes */
        .container > * {
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    </style>
</head>

<body class="d-flex justify-content-center align-items-center bg-dark" style="min-height: 100vh; overflow-y: hidden">
<div class="container mx-auto text-white" style="max-width: 500px;">
    <div class="header bg-primary text-white p-3 rounded-top">
        <h1 class="mt-0">
            <a id="GHProfileLink" target="_blank" class="text-orange"></a> Landing Page
        </h1>
        <p class="mt-2">
            This is the landing page of the <a id="projectLink" target="_blank" class="text-orange"></a> project.
        </p>
    </div>
    <div class="main p-3 rounded-bottom" style="background-color: #333;">
        <h2 class="mt-2"><!--About Me--></h2>
        <p class="mt-2"><!--PLACEHOLDER.--></p>
        <button id="goToProjectBtn" class="btn btn-primary">Go to project page</button>
        <div id="healthCheck" class="mt-3">
            <span id="healthIcon"></span>
            <span id="healthText"></span>
        </div>
    </div>
    <div class="footer p-3 text-center rounded-bottom" style="background-color: #222;word-break: break-word">
        <p class="mt-0">Copyright &copy;
            <script>
                document.write(new Date().getFullYear());
                document.write(" " + "${userName}");
            </script>
        </p>
    </div>
</div>
<div id="readme-content"></div>

<!-- Add Bootstrap JS and Popper.js -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script>
    // Set the href of the GitHub link
    const profileLink = document.getElementById("GHProfileLink");
    profileLink.href = \`https://github.com/${userName}\`;
    profileLink.textContent = "${userName}"; // Set link text

    const projectLink = document.getElementById("projectLink");
    projectLink.href = \`https://github.com/${userName}/${repoName}\`;
    projectLink.textContent = "${repoName}";

    const goToProjectBtn = document.getElementById("goToProjectBtn");
    const healthIcon = document.getElementById("healthIcon");
    const healthText = document.getElementById("healthText");

    goToProjectBtn.addEventListener("click", () => {
        healthText.textContent = "Checking project page...";
        fetch(\`https://${userName}.github.io/${repoName}/${ghDotIoDir}\`)
            .then(response => {
                if (response.ok) {
                    healthIcon.innerHTML = "&#10004;"; // Checkmark symbol
                    healthText.textContent = "Project page is available!";
                    window.open(\`https://${userName}.github.io/${repoName}/${ghDotIoDir}\`);
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
export {generateLandingPage};