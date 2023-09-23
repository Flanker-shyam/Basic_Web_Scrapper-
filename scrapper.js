const https = require('https');

function extractArticleTitles(html) {
    const regex = /<a\s+href="([^"]+)">\s*<h3[^>]*>([^<]+)<\/h3>/g;
    let match;
    const results = [];

    let count = 0;

    while ((match = regex.exec(html)) !== null && count <= 6) {
        const title = match[2];
        const link = "https://time.com" + match[1];
        results.push({ title, link });
        count += 1;
    }

    return results;
}

function scrapeWebsite(url, callback) {
    https.get(url, (response) => {
        let data = '';

        // Read the response data
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Process the data when the response ends
        response.on('end', () => {
            if (response.statusCode === 200) {
                // Process the HTML content
                const articleTitles = extractArticleTitles(data);
                callback(null, articleTitles);
            } else {
                callback('Failed to retrieve web page.', null);
            }
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}

module.exports = scrapeWebsite;
