const fs = require('fs');
const path = require('path');

const folderPath = './scripts';
const scriptLinks = document.getElementById('script-links');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const links = files.map((file) => {
    const filePath = path.join(folderPath, file);
    const fileName = path.basename(file);
    return `<li><a href="${filePath}">${fileName}</a></li>`;
  });

  const linksString = links.join('\n');
  scriptLinks.innerHTML = linksString;
});
