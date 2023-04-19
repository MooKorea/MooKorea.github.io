const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");

// Set your GitHub access token
const accessToken = process.env.GITHUB_TOKEN;

// Set the owner, repository, and branch of the repository containing the markdown files
const owner = "MooKorea";
const repo = "genvisis-docs-tests";
const branch = "main";

// Set the path to the directory where you want to save the HTML files
const htmlDir = "docs/html";

// Configure the Octokit client
const octokit = new Octokit({
  auth: "",
});

// Get a list of all the markdown files in the repository
octokit.repos
  .getContent({
    owner: owner,
    repo: repo,
    ref: branch,
    path: "",
  })
  .then((result) => {
    const markdownFiles = result.data.filter(
      (file) => file.type === "file" && path.extname(file.name).toLowerCase() === ".md"
    );

    // Convert each markdown file to HTML
    markdownFiles.forEach((file) => {
      octokit.markdown
        .render(JSON.stringify({ text: file.content }))
        .then((result) => {
          const html = result.data;
          const htmlFilename =
            path.basename(file.name, path.extname(file.name)) + ".html";
          const htmlPath = path.join(htmlDir, htmlFilename);
          fs.writeFileSync(htmlPath, html);
          console.log(`Converted ${file.name} to ${htmlFilename}`);
        })
        .catch((error) => {
          console.error(`Error converting ${file.name} to HTML: ${error.message}`);
        });
    });
  })
  .catch((error) => {
    console.error(`Error getting repository contents: ${error.message}`);
  });
