const fs = require("fs-extra");
const path = require("path");
const gitClone = require("git-clone/promise");
const showdown = require("showdown");

function convertMarkdownToHTML(markdown) {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdown);
}

function traverseDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      traverseDirectory(filePath);
    } else if (file.endsWith(".md")) {
      const markdown = fs.readFileSync(filePath, "utf-8");
      const html = convertMarkdownToHTML(markdown);
      const htmlFileName = file.replace(".md", ".html");
      const destinationPath = path.join(filePath, "..", htmlFileName);
      fs.writeFileSync(destinationPath, html);
      fs.unlinkSync(filePath);
      console.log(`Converted ${filePath} to ${htmlFileName}`);
    }
  }
}

const repositories = [
  {
    name: "documentation",
    repositoryURL: "https://github.com/PankratzLab/Genvisis-Docs",
    destinationDirectory: path.join(__dirname, "dist/docs"),
  },
  {
    name: "features",
    repositoryURL: "https://github.com/PankratzLab/Genvisis-Features-Webpage",
    destinationDirectory: path.join(__dirname, "dist/features"),
  },
];

async function cloneRepositories() {
  for (r of repositories) {
    // Remove the destination directory if it exists
    if (fs.existsSync(r.destinationDirectory)) {
      fs.emptyDirSync(r.destinationDirectory);
    }
    
    try {
      await gitClone(r.repositoryURL, r.destinationDirectory, null);
      traverseDirectory(r.destinationDirectory);
      console.log(`${r.name} conversion completed!`);
    } catch (error) {
      console.error(error);
    }
  }
}

cloneRepositories();
