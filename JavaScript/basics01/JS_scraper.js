const osmosis = require('osmosis');
const hindustantimes = 'https://www.hindustantimes.com'
const hindustantimes_title = '//*[@class="bigstory-h2"]/h1/a/@title'
const nse = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=TCS'
const nse_title = '//*[@id="companyName"]/text()'
const NSE_title  ='/html/head/title'

//Error : (node:11469) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): (get) https://www1.nseindia.com/ - socket hang up
/*
ht = "https://www.hindustantimes.com"
ht_xpath = '//*[@class="bigstory-h2"]/h1/a/@title'

nse = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=TCS'

nse_xpath = '//*[@id="companyName"]/text()'
*/

// Wrap functionality in a function
function getOpenGraphMeta() {
    // Return a promise as execution of request is time-dependent
    return new Promise((resolve, reject) => {
        let response;

        osmosis
            // Tell Osmosis to load steemit.com
            .get( 'https://www1.nseindia.com/' )
            // We want to get the metatags in head, so provide the head element as a value to find
            .find('head')
            // Set creates our final object of data we will get calling .data
            // the secondary values for these are select lookups. We are saying find meta tag with this property and return its content
            .set({
                title: '/html/head/title/text()',
            })
            // Store a copy of the above object in our response variable
            .data(res => response = res)
            // If we encounter an error we will reject the promise
            .error(err => reject(err))
            // Resolve the promise with our response object
            .done(() => resolve(response));
    });
}

getOpenGraphMeta().then(res => {
    console.log(res);
});