# Github Pages landing page
A simple html page built with bootstrap, that dynamically displays Github related information.
Especially useful if your main project site or documentation that you want to deploy with Github Pages, isn't at the root (`/`) or `/docs` path of the repository (see [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)).

# Features
- dynamically retrieves and displays:
  - clickable Github username
  - clickable Github project name
- button with healthcheck that sends you to the main project site

# Usage
## CDN method (recommended)
> [!NOTE]
> This method corresponds to the [CDN branch](https://github.com/bl4ckswordsman/github_landing_page/tree/cdn).

If you want to use this landing page in your project via a CDN, follow these steps:

1. Copy the content of this [index.html]() file from the CDN branch and place it in the root (`/`) or `/docs` path your repository. You can also create a new `index.html` in the aforementioned paths and paste the following  content:

    ```html
    import { generateLandingPage } from 'https://cdn.jsdelivr.net/gh/bl4ckswordsman/github_landing_page@cdn/ghlp.js';

    document.body.innerHTML = generateLandingPage('PROJECDIR');

    // Apply vertical centering and dark background
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.backgroundColor = '#212529'; // bootstrap gray-900
    ```

2. Replace `'PROJECDIR'` with the relative path to your actual site.
For example, if your site is at `build/web`, you would change it to 
`document.body.innerHTML = generateLandingPage('build/web')`.

That's it! The landing page will now be fetched from the CDN and displayed in your HTML file.

## Manual method (old)
> [!NOTE]
> This method corresponds to the [master branch](https://github.com/bl4ckswordsman/github_landing_page/tree/master).

1. Just place this [index.html](https://github.com/bl4ckswordsman/github_landing_page/tree/master/index.html) file at the root (`/`) or `/docs` path of your repository. 
2. Then, in the `index.html`, change `PROJECDIR` in `const ghDotIoDir = "PROJECDIR";` to your actual site's relative path. E.g. if my site is at `build/web`, I would change it to `const ghDotIoDir = "build/web";`

There's also some placeholders that can be changed or removed, other than that, all is retrieved automatically from the actual Github URL.


# Example
Click [here](https://bl4ckswordsman.github.io/abc_app/) to see an example.

![image](https://github.com/bl4ckswordsman/github_landing_page/assets/91825788/d95f4965-07c5-400c-86b0-2efea8a0da99)

[![Visits Badge](https://badges.pufler.dev/visits/bl4ckswordsman/github_landing_page)](https://github.com/bl4ckswordsman)
