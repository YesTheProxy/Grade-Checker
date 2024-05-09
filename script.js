document.getElementById('capture-button').addEventListener('click', async () => {
  const response = await fetch('https://rpsfamily.rockfordschools.org/scripts/wsisa.dll/WService=wsEAplus/sfgradebook001.w');
  const html = await response.text();

  const screenshotImage = document.getElementById('screenshot-image');
  screenshotImage.src = `data:text/html;base64,${btoa(html)}`;
  screenshotImage.style.display = 'block';
});
