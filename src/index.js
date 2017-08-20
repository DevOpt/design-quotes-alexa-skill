'use strict';
var Alexa = require('alexa-sdk');

//Variable Prompts
var APP_ID = "amzn1.ask.skill.c8cfcb96-4f17-469d-b613-f873c4895bf8";

var SKILL_NAME = "Design Quotes";
var GET_QUOTE_MESSAGE = "Here's your quote: ";
var GET_QUOTE_OF_THE_DAY = "The quote of the day is by ";
var HELP_MESSAGE = "You can say tell me a quote on desgin, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//Quotes on design
var quote = [
    "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.",
    "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
    "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.",
    "Graphic design will save the world right after rock and roll does.",
    "It’s through mistakes that you actually can grow. You have to get bad in order to get good.",
    "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    "Never fall in love with an idea. They’re whores. If the one you’re with isn’t doing the job, there’s always, always, always another.",
    "But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.",
    "Digital design is like painting, except the paint never dries.",
    "Good design is all about making other designers feel like idiots because that idea wasn’t theirs.",
    "I strive for two things in design: simplicity and clarity. Great design is born of those two things.",
    "Content precedes design. Design in the absence of content is not design, it’s decoration.",
    "Whether you think you can or whether you think you can’t – you are right.",
    "Stop looking at yourself as a designer, and start thinking of yourself as a deliverer of ideas.",
    "Creativity is a habit. It’s not something that happens in the shower.",
    "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
    "Graphic Designers are idea embalmers, loving undertakers preserving bits of data like so many butterflies pinned to felt in a jewel box.",
    "Visualization without Design is merely a dream. Design without Visualization just passes the time.",
    "Design is the application of intent – the opposite of happenstance, and an antidote to accident.",
    "Colour does not add a pleasant quality to design – it reinforces it.",
    "Typography is a beautiful group of letters, not a group of beautiful letters.",
    "minimalism is not a lack of something. It’s simply the perfect amount of something.",
    "Like all forms of design, visual design is about problem solving, not about personal preference or unsupported opinion.",
    "Sometimes you have to keep ideas for decades before they have any use.",
    "The only important thing about design is how it relates to people.",
    "Graphic design is the paradise of individuality, eccentricity, heresy, abnormality, hobbies and humors.",
    "Styles come and go. Good design is a language, not a style",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "If you think good design is expensive, you should look at the cost of bad design.",
    "Design is a solution to a problem. Art is a question to a problem.",
    "Simplicity is about subtracting the obvious and adding the meaningful.",
    "Great design is a multi-layered relationship between human life and its environment.",
    "Any product that needs a manual to work is broken.",
    "A designer is an emerging synthesis of artist, inventor, mechanic, objective economist, and evolutionary strategist.",
    "A user interface is like a joke. If you have to explain it, it’s not that good",
    "Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether",
    "Design is an opportunity to continue telling the story, not just to sum everything up.",
    "If you’re not prepared to be wrong, you’ll never come up with anything original.",
    "How well we communicate is determined not by how well we say things, but how well we are understood.",
    "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.",
    "Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.",
    "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    "Simplicity is not the goal. It is the by-product of a good idea and modest expectations."


];

//Quotes said by...
var person = [
    "Milton Glaser",
    "Paul Rand",
    "Stefan Sagmeister",
    "David Carson",
    "Paula Scher",
    "Antoine de Saint-Exupéry",
    "Chip Kidd",
    "Marian Bantjes",
    "Neville Brody",
    "Frank Chimero",
    "Lindon Leader",
    "Jeffrey Zeldman",
    "Henry Ford",
    "STÅLE MELVÆR",
    "Nick Law",
    "Winston Churchill",
    "Paul Saffo",
    "Sonal Nayyar",
    "Robert L. Peters",
    "Pierre Bonnard",
    "Steve Byers",
    "Nicholas Burroughs",
    "Bob Baxley",
    "Marc English",
    "Victor Papanek",
    "George Santayana",
    "Joe Toscano",
    "Steve Jobs",
    "Ralf Speth",
    "John Maeda",
    "John Maeda",
    "Naoto Fukasawa",
    "Elon Musk",
    "Buckminster Fuller",
    "Martin LeBlanc",
    "Edward Tufte",
    "Tate Linden",
    "Sir Ken Robinson",
    "Andrew Grove",
    "Nicholas Negroponte",
    "John Chris Jones",
    "Antoine de Saint-Exupery",
    "Paul Rand"

];

//verbs
var verb = [
    "said, ",
    "said once – ",
    "once said – "

];

//Launch the intent
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewQuoteIntent');
    },
    'GetNewQuoteIntent': function () {
        var quoteArr = quote;
        var personArr = person;
        var verbArr = verb;
        var verbIndex = Math.floor(Math.random() * verbArr.length);
        var quoteIndex = Math.floor(Math.random() * quoteArr.length);
        var randomQuote = quoteArr[quoteIndex];
        var personOfTheQuote = personArr[quoteIndex];
        var randVerb = verbArr[verbIndex];
        var speechOutput = GET_QUOTE_MESSAGE + personOfTheQuote + randVerb + randomQuote;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomQuote)
    },
    'GetQuoteOfTheDayIntent': function () {
        var quoteArr = quote;
        var personArr = person;
        var rand = Math.floor(Math.random() * quoteArr.length);
        var randomQuote = quoteArr[rand];
        var personOfTheQuote = personArr[rand];
        var speechOutput = GET_QUOTE_OF_THE_DAY + personOfTheQuote + " says - " + randomQuote;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomQuote)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};