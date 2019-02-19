/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*** 
Create an array stored in a variable called "quotes". The array contains objects. The objects inside the array contains quote, source, title and 
twitter handle if it exists.
***/

var quotes = [
  {
   quote: 'Its not a faith in technology. Its faith in people.', 
   source: 'Steve Jobs', 
   title: 'Apple CEO',
   twitter: ''
  },
  {
  quote: 'Our industry does not respect tradition - it only respects innovation.', 
  source: 'Satya Nadella',
  title: 'Microsoft CEO',
  twitter: '@satyandadella'
  },
  {
  quote: 'For me, it matters that we drive technology as an equalizing force, as an enabler for everyone around the world.', 
  source: 'Sundar Pichai', 
  title: 'Google CEO',
  twitter: '@sundarpichai'
  },
  {
  quote: 'Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.', 
  source: 'Reed Hastings', 
  title: 'Netflix CEO',
  twitter: '@reedhastings'
  },
  {
  quote: 'Engineering is the closest thing to magic that exists in the world.', 
  source: 'Elon Musk', 
  title: 'SpaceX CEO',
  twitter: '@elonmusk'
  }
];

/***
  Create a function that produces a random number then stores that number in a variable. The variable is then
  used to return a random quote by using the variable as the index value of the array. 
***/

function getRandomQuote() {
   var randomQuote = Math.floor((Math.random() * 5) + 0);
   return quotes[randomQuote];
};
/***
Create a function that prints a string and injects that string to the html document. This string is to print
if 
***/
var stringOfQuoteProperties;

function printQuote() {
  var quoteR = getRandomQuote();
 
if (quoteR.title === '') {
        stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + '</p>' + 
          '<span class="source">' + quoteR.source + '</span>' +
          '</p>';
        } else if (quoteR.source === '') {
        stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + '</p>' + 
          '<span class="title">' + quoteR.title + '</span>' +
          '</p>';
        } else if ((quoteR.title == '') && (quoteR.source = '')) {
        stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + 
          '</p>';
        } else if (quoteR.twitter === '') {
          stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + '</p>' 
          + '<p class="source">' + quoteR.source + ' ' + '<span class="title">' 
          + ', ' + quoteR.title + '</span>' + '</p>';
        } else {
        stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + '</p>' 
        + '<p class="source">' + quoteR.source + ' ' + '<span class="title">' 
        + ', ' + quoteR.title + '</span>' + '    '  + '<br>' + 'twitter:'
        + '<span class="twitter">' + quoteR.twitter + '</span>' + '</p>';
        }

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
      
}; 
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.