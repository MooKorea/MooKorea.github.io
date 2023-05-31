const fs = require('fs-extra'); 
const path = require('path');
const gitClone = require('git-clone');
const showdown = require('showdown');

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
    } else if (file.endsWith('.md')) {
      const markdown = fs.readFileSync(filePath, 'utf-8');
      const html = convertMarkdownToHTML(markdown);
      const htmlFileName = file.replace('.md', '.html');
      const destinationPath = path.join(filePath, '..', htmlFileName);
      fs.writeFileSync(destinationPath, html);
      fs.unlinkSync(filePath)
      console.log(`Converted ${filePath} to ${htmlFileName}`);
    }
  }
}

const repositoryURL = 'https://github.com/PankratzLab/Genvisis-Docs';
const destinationDirectory = path.join(__dirname, 'dist/docs');

// Remove the destination directory if it exists
if (fs.existsSync(destinationDirectory)) {
  fs.emptyDirSync(destinationDirectory);
}

gitClone(repositoryURL, destinationDirectory, null, (err) => {
  if (err) {
    console.error('Error occurred while cloning the repository:', err);
    return;
  }

  traverseDirectory(destinationDirectory);

  console.log('Conversion completed!');
});
