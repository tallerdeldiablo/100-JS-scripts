const folderPath = './scripts';
const scriptLinks = document.getElementById('script-links');

fetch(folderPath)
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const files = [...doc.querySelectorAll('a')].map((a) => a.href);

    const links = files.map((file) => {
      const fileName = file.split('/').pop();
      return `<li><a href="${file}">${fileName}</a></li>`;
    });

    const linksString = links.join('\n');
    scriptLinks.innerHTML = linksString;
  })
  .catch((err) => console.error(err));
