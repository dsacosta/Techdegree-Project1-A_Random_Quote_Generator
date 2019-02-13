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
  title: 'SpaceX CEO'
  }
];

console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/


function getRandomQuote () {
   var randomQuote = Math.floor((Math.random() * 4) + 0);
   return quotes[randomQuote]

};

getRandomQuote();

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
  var quote = getRandomQuote();
  var div = document.getElementById('output');
  div.innerHTML = message;

  var message = '<p>Hello + quote.quote </p>'
  print(message);
} 

   



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.