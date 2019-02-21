/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*** 
Create an array stored in a variable called "quotes". The array contains objects. The objects inside the array 
contains quote, source, title and twitter handle.
***/

var quotes = [
  {
    quote: "If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind.", 
    source: 'John Chambers', 
    title: '',
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
  },
  {
    quote: 'Have the courage to follow your heart and intuition. They somehow know what you truly want to become.',
    source: 'Steve Jobs',
    title: 'Apple CEO', 
    twitter: ''
  }
];

/***
  Create a function that produces a random number then stores that number in a variable. The variable is then
  used to return a random quote by using the variable as the index value of the quotes[] array. 
***/

function getRandomQuote() {
   var randomQuote = Math.floor((Math.random() * 6) + 0);
   return quotes[randomQuote];
  
};
/***
Create a function that prints a string based on whether or not certain properties from
the quotes[] array exist. This html string will then be appended to the 'quote-box' section of 
the html document using innerhtml. The random color function is also called to randomize 
the backgroung color. 
***/
var stringOfQuoteProperties;

function printQuote() {
  var quoteRandomized = getRandomQuote();
  randomColor();
  

if (quoteRandomized.title === '') {
        stringOfQuoteProperties = '<p class="quote">' + quoteRandomized.quote + '</p>' + 
          '<span class="source">' + quoteR.source + '</span>' + '</p>';
        } else if (quoteRandomized.source === '') {
        stringOfQuoteProperties = '<p class="quote">' + quoteRandomized.quote + '</p>' + 
          '<span class="title">' + quoteRandomized.title + '</span>' +
          '</p>';
        } else if ((quoteRandomized.title == '') && (quoteRandomized.source = '')) {
        stringOfQuoteProperties = '<p class="quote">' + quoteRandomized.quote + 
          '</p>';
        } else if (quoteRandomized.twitter === '') {
          stringOfQuoteProperties = '<p class="quote">' + quoteRandomized.quote + '</p>' 
          + '<p class="source">' + quoteRandomized.source + ' ' + '<span class="title">' 
          + ', ' + quoteRandomized.title + '</span>' + '</p>';
        } else {
        stringOfQuoteProperties = '<p class="quote">' + quoteRandomized.quote + '</p>' 
        + '<p class="source">' + quoteRandomized.source + ' ' + '<span class="title">' 
        + ', ' + quoteRandomized.title + '</span>' + '    '  + '<br>' + 'twitter:'
        + '<span class="twitter">' + quoteRandomized.twitter + '</span>' + '</p>';
        }

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

/***
 Function that randomizes the background color of an html document and adds it
 back to the html document 
 ***/

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var rbgColor = 'rgb(' + x + ',' + y + ',' + z + ')'; 

document.body.style.background = rbgColor;
  }
}
/***
When the button "show another quote" is clicked, it will call the printQuote function
and call the random quote and random color function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*** Refesh page automatically after 3 seconds. Function is called when the "show another
another quote" button is clicked.
***/
function myFunction() {
  setInterval(function() {
  printQuote(); }, 3000);
}


