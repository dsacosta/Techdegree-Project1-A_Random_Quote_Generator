/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
  {
   quote: 'Its not a faith in technology. Its faith in people.', 
   source: 'Steve Jobs', 
   title: "Apple CEO"
  },
  {
  quote: 'Our industry does not respect tradition - it only respects innovation.', 
  source: 'Satya Nadella',
  title: "Microsoft CEO"
  },
  {
  quote: 'For me, it matters that we drive technology as an equalizing force, as an enabler for everyone around the world.', 
  source: 'Sundar Pichai', 
  title: 'Google CEO'
  },
  {
  quote: 'Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.', 
  source: 'Reed Hastings', 
  title: 'Netflix CEO'
  },
  {
  quote: 'Engineering is the closest thing to magic that exists in the world.', 
  source: 'Elon Musk', 
  title: ''
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/


function getRandomQuote() {
   var randomQuote = Math.floor((Math.random() * 5) + 0);
   return quotes[randomQuote];
};
//  getRandomQuote();

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

var stringOfQuoteProperties;

function printQuote() {
  var quoteR = getRandomQuote();

  // for (var i = 0; i < 4; i +=1) {
  //   quote = quoteR.quote;
  //   source = quoteR.source;
  //   title = quoteR.title;

  //  stringOfQuoteProperties = '<p>' + quoteR.quote + 
  // '<span class="citation">' + quoteR.source + '</span>' +
  // '<span class="year">' + quoteR.title + '</span>' +
  // '</p>';
 
if (quoteR.title === '') {
        stringOfQuoteProperties = '<p>' + quoteR.quote + 
          '<span class="citation">' + quoteR.source + '</span>' +
          '</p>';
      } else if (quoteR.source === '') {
        stringOfQuoteProperties = '<p>' + quoteR.quote + 
          '<span class="year">' + quoteR.title + '</span>' +
          '</p>';
      } else if ((quoteR.title == '') && (quoteR.source = '')) {
        stringOfQuoteProperties = '<p>' + quoteR.quote + 
          '</p>';
      } else {
      stringOfQuoteProperties = '<p>' + quoteR.quote + 
      '<span class="citation">' + quoteR.source + '</span>' +
      '<span class="year">' + quoteR.title + '</span>' +
      '</p>';
      }

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
  
};
    
    // if (quoteR.title === '') {
    //     stringOfQuoteProperties = '<p>' + quoteR.quote + 
    //       '<span class="citation">' + quoteR.source + '</span>' +
    //       '</p>';
    //   } else if (quoteR.source === '') {
    //     stringOfQuoteProperties = '<p>' + quoteR.quote + 
    //       '<span class="year">' + quoteR.title + '</span>' +
    //       '</p>';
    //   } else if ((quoteR.title == '') && (quoteR.source = '')) {
    //     stringOfQuoteProperties = '<p>' + quoteR.quote + 
    //       '</p>';
    //   } else {
    //   stringOfQuoteProperties = '<p>' + quoteR.quote + 
    //   '<span class="citation">' + quoteR.source + '</span>' +
    //   '<span class="year">' + quoteR.title + '</span>' +
    //   '</p>';
    //   }
 
  
  // stringOfQuoteProperties = '<p>' + quote + 
  // '<span class="citation">' + source + '</span>' +
  // '<span class="year">' + title + '</span>' +
  // '</p>';
  // }

  // if (title === '') {
  //   stringOfQuoteProperties = '<p>' + quote + 
  //     '<span class="citation">' + source + '</span>' +
  //     '</p>';
  // } else if (source === '') {
  //   stringOfQuoteProperties = '<p>' + quote + 
  //     '<span class="year">' + title + '</span>' +
  //     '</p>';
  // } else if ((title == '') && (source = '')) {
  //   stringOfQuoteProperties = '<p>' + quote + 
  //     '</p>';
  // } else {
  // stringOfQuoteProperties = '<p>' + quoteR.quote + 
  // '<span class="citation">' + quoteR.source + '</span>' +
  // '<span class="year">' + quoteR.title + '</span>' +
  // '</p>';

  // document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

  // for (var i = 0; i <quoteR.length; i +=1) {
  //   quote = quoteR[i].quote;
  //   source = quoteR[i].source;
  //   title = quoteR[i].title;
  // }
 //print the quote to html page
    // stringOfQuoteProperties += '<p>' + quote + 
    //   '<span class="citation">' + source + '</span>' +
    //   '<span class="year">' + title + '</span>' +
    //   '</p>';

  


// document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.