// Function to extract article titles from HTML content
module.exports = async function extractArticleTitles(html) {
    console.log("I am here");
    const regex = /<a\s+href="([^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/g;
    let match;
    const results = [];
    
    while ((match = regex.exec(html)) !== null) {
      const title = match[2];
      const link = "https://time.com"+match[1];
      results.push({ title, link });
    }
    
    return results;
}
