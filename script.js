const quotes = [
    "I think, therefore I am.",
    "I may disagree with what you say, but I will defend to death your right to say it.",
    "Live your life to the fullest. You only get one.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Sometimes, you will never know the value of a moment until it becomes a memory",
    "The best way to predict the future is to create it",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Believe you can and you're halfway there",
    "The journey of a thousand miles begins with a single step",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Your life does not get better by chance, it gets better by change",
    "The only limit to our realization of tomorrow is our doubts of today",
    "Act as if what you do makes a difference. It does.",
    "Don’t count the days; make the days count",
    "You miss 100% of the shots you don’t take.",
    "Dream big and dare to fail",
    "Change the way you look at things and the things you look at change",
    "Every moment is a fresh beginning",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving",
    "It does not matter how slowly you go as long as you do not stop."
]
{}

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){

 /*   if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
*/
    while(true){
        const randomIdx = Math.floor(Math.random()* quotes.length)


        if (usedIndexes.has(randomIdx))continue



        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}