const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/rest");
const axios = require("axios");
require('dotenv').config()

const accessToken = process.env.VITE_GITHUB_TOKEN;
const owner = "MooKorea";
const repo = "genvisis-docs-tests";
const branch = "main";
const htmlDir = "dist/docs";

const octokit = new Octokit({
  auth: accessToken,
});

async function getMD() {
  try {
    const getconent = await octokit.repos.getContent({
      owner: owner,
      repo: repo,
      ref: branch,
      path: "",
    });

    const result = await getconent.data.filter(
      (file) =>
        file.type === "file" && path.extname(file.name).toLowerCase() === ".md"
    );


    let fileNamesArr = []
    for (let i = 0; i < result.length; i++) {
      fileNamesArr.push(result[i].name.slice(0, -3))
    }

    await result.forEach(async (element) => {
      const getURLcontent = await axios({
        method: "get",
        url: element.download_url,
      })
      if (element.name === "toc.md") {
        createTOC(getURLcontent.data);
        return;
      }
      parseMD(getURLcontent.data, element.name)
    });

    createNamesFolder(fileNamesArr);
    
  } catch (error) {
    console.error(error.message)
  }
}

getMD();

async function parseMD(content, name) {
  try {
    const html = await octokit.request('POST /markdown', {
      text: content,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    const htmlFilename = path.basename(name, path.extname(name)) + ".html";
    if (!fs.existsSync(htmlDir)) {
      fs.mkdirSync(htmlDir)
    }
    const htmlPath = path.join(htmlDir, htmlFilename);
    fs.writeFileSync(htmlPath, html.data);
    console.log(`Converted ${name} to ${htmlFilename}`);
  } catch (error) {
    console.error(`Error converting ${name} to HTML: ${error.message}`);
  }
}

function createNamesFolder(fileNamesArr) {
  fs.writeFileSync(`dist/names.txt`, `${fileNamesArr}`)
  console.log('created names.txt')
}

function createTOC(data) {
  const lines = data.trim().split('\n').filter(n => n);
  const nestedLines = [];
  let currentNested = null;

  lines.forEach(line => {
    if (line.startsWith('%')) {
        if (!currentNested) {
            currentNested = [];
            nestedLines.push(currentNested);
        }
        currentNested.push(line);
        return;
    }
    currentNested = null;
    nestedLines.push(line);
  })
  fs.writeFileSync('dist/toc.txt', JSON.stringify(nestedLines))
  console.log(nestedLines)
}
