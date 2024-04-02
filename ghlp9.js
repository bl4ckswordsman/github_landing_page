function getRepoFromURL() {
    const url = "https://bl4ckswordsman.github.io/abc_app/"
    const parts = url.pathname.split('/');
    return parts[1]; // Assuming the username is the second part of the pathname
}

function getUsernameFromURL() {
    const url = "https://bl4ckswordsman.github.io/abc_app/";
    const parts = url.pathname.split('/');
    return parts[2]; // Assuming the repository name is the third part of the pathname
}

export function generateLandingPage(ghDotIoDir) {
    // Use the functions to dynamically get userName and repoName
    const userName = getUsernameFromURL();
    const repoName = getRepoFromURL();
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Pages - Landing Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .text-orange { color: #FFA500; word-break: break-word; }
        .container > * { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
</head>
<body class="d-flex justify-content-center align-items-center bg-dark" style="min-height: 100vh; overflow-y: hidden">
<div class="container mx-auto text-white" style="max-width: 500px;">
    <div class="header bg-primary text-white p-3 rounded-top">
        <h1 class="mt-0">
            <a id="GHProfileLink" target="_blank" class="text-orange" href="https://github.com/${userName}">${userName}</a> Landing Page
        </h1>
        <p class="mt-2">
            This is the landing page of the <a id="projectLink" target="_blank" class="text-orange" href="https://github.com/${userName}/${repoName}">${repoName}</a> project.
        </p>
    </div>
    <div class="main p-3 rounded-bottom" style="background-color: #333;">
        <button id="goToProjectBtn" class="btn btn-primary">Go to project page</button>
        <div id="healthCheck" class="mt-3">
            <span id="healthIcon"></span>
            <span id="healthText"></span>
        </div>
    </div>
    <div class="footer p-3 text-center rounded-bottom" style="background-color: #222;">
        <p class="mt-0">Copyright &copy; <script>document.write(new Date().getFullYear());</script> ${userName}</p>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;
}

export function initializeDynamicContent(ghDotIoDir) {
    // Again, use the functions to dynamically get userName and repoName
    const userName = getUsernameFromURL();
    const repoName = getRepoFromURL();

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
