# DevOps Practical Demonstration

A sample HTML, CSS, and JavaScript project featuring automated Continuous Integration (CI) and Continuous Deployment (CD) using GitHub Actions and GitHub Pages.

## Project Structure
```text
├── .github/
│   └── workflows/
│       ├── ci.yml         # CI workflow for pull requests and pushes to main
│       └── deploy.yml     # CD workflow deploying to GitHub Pages after CI checks pass
├── test/
│   └── app.test.js        # Automated unit tests using Node.js test runner
├── app.js                 # Application logic and DOM events
├── index.html             # Web page user interface
├── package.json           # Project metadata and test scripts
├── style.css              # Responsive, modern UI styling
└── .gitignore
```

## Running Locally
1. Run automated tests:
   ```bash
   npm test
   ```
2. Open `index.html` in any browser or launch a local server.
