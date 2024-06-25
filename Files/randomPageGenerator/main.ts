interface Quote {
    quote: string
    author: string
}

const quotes: Quote[] = [
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar Wilde",
    },
    {
        quote:
            "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore",
    },
    {
        quote: "I am not afraid of storms, for I am learning how to sail my ship.",
        author: "Louisa May Alcott",
    },
    {
        quote: "The true sign of intelligence is not knowledge but imagination.",
        author: "Albert Einstein",
    },
    {
        quote:
            "If you can't explain it simply, you don't understand it well enough.",
        author: "Albert Einstein",
    },
    {
        quote:
            "Life is a journey, and if you fall in love with the journey, you will be in love forever.",
        author: "Peter Hagerty",
    },
    {
        quote:
            "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote:
            "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
    },
    {
        quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote:
            "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "The best way out is always through.",
        author: "Robert Frost",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale",
    },
    {
        quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        quote: "To handle yourself, use your head; to handle others, use your heart.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote: "What we achieve inwardly will change outer reality.",
        author: "Plutarch",
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair",
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
    },
];


let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

randBG();
randQuote();

function randBG() {
    let randBG: number = Math.floor(Math.random() * 1000);
    document.body.style.backgroundImage = "url('https://picsum.photos/id/" + randBG + "/1920/1080')";
}

function randQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    let context = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 400;

    if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "50px 'Fleur De Leah', cursive"
        context.fillStyle = "white";
        context.textAlign = "center";

        context.shadowColor = "black";
        context.shadowBlur = 5;
        context.shadowOffsetY = 2;

        context.fillText(randomQuote.quote, canvas.width / 2, canvas.height / 2);
        context.font = "40px 'Fleur De Leah', cursive";
        context.fillText(`- ${randomQuote.author}`, canvas.width / 2, canvas.height / 2 + 40);
    }
}
