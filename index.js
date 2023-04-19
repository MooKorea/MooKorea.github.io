import fs from "fs";
import axios from "axios";
import path from "path";
import AdmZip from "adm-zip"

async function downloadZipFromGit(url, branch, directory) {
  // Create a temporary file path to download the zip file to
  const tempFilePath = path.join(directory, `${Date.now()}.zip`);

  // Download the zip file from the Git repository
  const response = await axios({
    method: 'get',
    url: `${url}/archive/${branch}.zip`,
    responseType: 'stream'
  });

  // Create a write stream to the temporary file path and pipe the response data to it
  const writeStream = fs.createWriteStream(tempFilePath);
  response.data.pipe(writeStream);

  // Return a promise that resolves when the write stream finishes writing to the file or rejects if there is an error
  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      // Once the zip file has been downloaded, extract its contents to the specified directory
      const zip = new AdmZip(tempFilePath);
      zip.extractAllTo(directory, true);
      
      // Delete the temporary file
      fs.unlinkSync(tempFilePath);

      resolve();
    });
    writeStream.on('error', (error) => {
      reject(error);
    });
  });
}

downloadZipFromGit('https://github.com/MooKorea/genvisis-docs-tests', 'main', 'docs')
  .then(() => {
    console.log('Files downloaded and extracted successfully!');
  })
  .catch((error) => {
    console.error('Error downloading and extracting files:', error);
  });

