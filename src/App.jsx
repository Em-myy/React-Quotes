import { useState } from "react";
import "./App.css";
import icon1 from "./assets/twitter-icon.png";
import icon2 from "./assets/instagram-icon.png";
import quoteSign from "./assets/quote-sign.png";

const quotesArray = [
  {
    text: "Time does not change anything, Time only reveals what is already there.",
    author: "Anonymous",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Maya Angelou",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
};

const getRandomColor = () => {
  const colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  return color;
};

const App = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [commonColor, setCommonColor] = useState(getRandomColor());

  const handleNewQuote = () => setQuote(getRandomQuote());
  const handleNewBackgroundColor = () => setCommonColor(getRandomColor());

  return (
    <div style={{ backgroundColor: commonColor }} className="app-container">
      <BackgroundComponent
        quote={quote}
        handleNewQuote={handleNewQuote}
        commonColor={commonColor}
        handleNewBackgroundColor={handleNewBackgroundColor}
      />
    </div>
  );
};

function BackgroundComponent({
  quote,
  handleNewQuote,
  handleNewBackgroundColor,
  commonColor,
}) {
  return (
    <>
      <section id="quote-box">
        <div className="quote-container">
          <QuoteComponent quote={quote} commonColor={commonColor} />
        </div>

        <div className="footer-container">
          <div className="icon-container">
            <IconComponent />
          </div>

          <div className="button-container">
            <QuoteButtonComponent
              handleNewQuote={handleNewQuote}
              handleNewBackgroundColor={handleNewBackgroundColor}
              commonColor={commonColor}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function QuoteComponent({ quote, commonColor }) {
  return (
    <>
      <img src={quoteSign} alt="Quote Sign" className="quote-icon" />
      <div className="quote-component-container">
        <h1 style={{ color: commonColor }} id="text">
          {quote.text}
        </h1>
        <p style={{ color: commonColor }} id="author">
          -{quote.author}
        </p>
      </div>
    </>
  );
}

function QuoteButtonComponent({
  handleNewQuote,
  handleNewBackgroundColor,
  commonColor,
}) {
  const handleClick = () => {
    handleNewQuote();
    handleNewBackgroundColor();
  };

  return (
    <div>
      <button
        onClick={handleClick}
        id="new-quote"
        style={{ backgroundColor: commonColor }}
      >
        New Quote
      </button>
    </div>
  );
}

function IconComponent() {
  return (
    <div>
      <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
        <img src={icon1} alt="twitter-icon" className="first-icon" />
      </a>
      <img src={icon2} alt="instagram-icon" className="second-icon" />
    </div>
  );
}

export default App;
