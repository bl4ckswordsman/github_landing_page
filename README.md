# Github Pages landing page
A simple html page built with bootstrap, that dynamically displays Github related information.
Especially useful if your main project site or documentation that you want to deploy with Github Pages, isn't at the root (`/`) or `/docs` path of the repository (see [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)).

## Features
- dynamically retrieves and displays:
  - clickable Github username
  - clickable Github project name
- button with healthcheck that sends you to the main project site

## Usage
  - Just place the `index.html` file at the root (`/`) or `/docs` path of your repository.
  - Then, in the `index.html`, change `PROJECDIR` in `const ghDotIoDir = "PROJECDIR";` to your actual site's relative path. E.g. if my site is at `build/web`, I would change it to `const ghDotIoDir = "build/web";`
There's also some placeholders that can be changed or removed, other than that, all is retrieved automatically from the actual Github URL.

## Example
Click [here](https://bl4ckswordsman.github.io/abc_app/) to see an example.

![image](https://github.com/bl4ckswordsman/github_landing_page/assets/91825788/d95f4965-07c5-400c-86b0-2efea8a0da99)

[![Visits Badge](https://badges.pufler.dev/visits/bl4ckswordsman/github_landing_page)](https://github.com/bl4ckswordsman)
