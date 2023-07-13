class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "The best revenge is massive success.",
            author: "Frank Sinatra",
            color: "#16a085"
        }

    }

    render() {
        const new_quote = [
            "Whatever the mind of man can conceive and believe, it can achieve.",
            "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
            "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
            "The best revenge is massive success.",
            "Too many of us are not living our dreams because we are living our fears.",
            "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
            "You can not use up creativity. The more you use, the more you have.",
            "Life is what happens to you while you’re busy making other plans.",
            "If the wind will not serve, take to the oars.",
            "Do what you can, where you are, with what you have."

        ]
        
        const new_author = [
        "Napoleon Hill",
        "Plato",
        "Booker T. Washington",
        "Frank Sinatra",
        "Les Brown",
        "Ann Landers",
        "Maya Angelou",
        "John Lennon",
        "Latin Proverb",
        "Teddy Roosevelt"
        ]

        const generate_quote = () => {
            const colors = [
                "#16a085",
                "#27ae60",
                "#2c3e50",
                "#f39c12",
                "#e74c3c",
                "#9b59b6",
                "#FB6964",
                "#342224",
                "#472E32",
                "#BDBB99",
                "#77B1A9",
                "#73A857"

            ];


            let index = Math.floor(Math.random() * new_quote.length);
            let index2 = Math.floor(Math.random() * colors.length);
            this.setState({
                quote: new_quote[index],
                author: new_author[index],
                color: colors[index2]
            });
           
        }
    
        return (
            <div style={{backgroundColor: this.state.color}}>
                <div className="d-flex justify-content-md-center align-items-center vh-100">
                    {this.generate_quote}
                    <div id="quote-box" style={{backgroundColor: "turquoise" }}>
                        <div id="text" style={{color: this.state.color }}>
                            <h5>{this.state.quote}</h5>
                        </div>
                
                        <div id="author" style={{color: this.state.color }}>
                            <h6>~ {this.state.author}</h6>
                        </div>
                
                        <button onClick={generate_quote} className="btn btn-warning">New quote</button>

                        <a href="twitter.com/intent/tweet" target="blank" id="tweet-quote">
                        <button id="new-quote" className="btn btn-primary">
                        twitter
                        </button>
                        </a>

                        <div className="refer">_ _ ~ By Muawaz Saleem</div>
                    </div>

                    
                </div>
            </div>
        );
    }
  }

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);