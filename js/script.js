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
  }
];

/***
  Create a function that produces a random number then stores that number in a variable. The variable is then
  used to return a random quote by using the variable as the index value of the quotes[] array. 
***/

function getRandomQuote() {
   var randomQuote = Math.floor((Math.random() * 5) + 0);
   return quotes[randomQuote];
  
};
/***
Create a function that prints a string based on whether or not certain properties from
the quotes[] array exist. This html string will then be appended to the 'quote-box' section of 
the html document using innerhtml. The random color function is also called to randomize 
the backgroung color when the button is clicked. 
***/
var stringOfQuoteProperties;

function printQuote() {
  var quoteR = getRandomQuote();
  randomColor();
  

if (quoteR.title === '') {
        stringOfQuoteProperties = '<p class="quote">' + quoteR.quote + '</p>' + 
          '<span class="source">' + quoteR.source + '</span>' + '</p>';
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
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Refesh page

window.onload = function(){
  var button = document.getElementById('loadQuote'),
    form = button.form;

  form.addEventListener("submit", function(){
    return false;
  })

  var times = 100;   //Here put the number of times you want to auto submit
  (function submit(){
    if(times == 0) return;
    form.submit();
    times--;
    setTimeout(submit, 1000);   //Each second
  })(); 
}

