const scrapeWebsite = require('./scrapper.js');

// URL of the web page to scrape
const url = 'https://time.com/';

scrapeWebsite(url, (error, articleTitles) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log(articleTitles);
    }
});
