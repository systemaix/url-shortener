async function shortenURL() {
  const input = document.getElementById('urlInput');
  const result = document.getElementById('result');
  const longURL = input.value.trim();

  if (!longURL) {
    alert('Please enter a URL');
    return;
  }

  result.textContent = 'Shortening...';

  try {
    const res = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`
    );

    const shortURL = await res.text();

    result.innerHTML = `
      Short URL:
      <a href="${shortURL}" target="_blank">${shortURL}</a>
    `;
  } catch (error) {
    result.textContent = 'Something went wrong';
  }
}

function resetURL() {
  document.getElementById('urlInput').value = '';
  document.getElementById('result').textContent = '';
}
