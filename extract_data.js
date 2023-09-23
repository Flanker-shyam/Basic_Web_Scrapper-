function extractTitles_url(html) {
    const regex = /<li class="latest-stories__item">\s*<a\s+href="([^"]+)">\s*<h3 class="latest-stories__item-headline">([^<]+)<\/h3>/g;
    let match;
    const results = [];
  
    while ((match = regex.exec(html)) !== null) {
      const title = match[2];
      const link = "https://time.com" + match[1];
      results.push({ title, link });
    }
  
    return results;
  }

module.exports = {
    extractTitles_url,
};