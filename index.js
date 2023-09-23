const https = require('https');
const scrapper = require("./scrapper.js")

// URL of the web page to scrape
const url = 'https://time.com/';

// Send an HTTP GET request to the URL

let callEndPoint = async()=>{
    https.get(url, (response) => {
        let data = '';
      
        // Read the response data
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        // Process the data when the response ends
        response.on('end', async() => {
          if (response.statusCode === 200) {
            // Process the HTML content
            const articleTitles = scrapper.extractArticleTitles(data);
            console.log('Article Titles:');
            console.log(articleTitles);
          } else {
            console.log('Failed to retrieve web page.');
          }
        });
      }).on('error', (error) => {
        console.error('Error:', error);
      });
}
