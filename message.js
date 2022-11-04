const knockknockJokes = ['Who\’s there? Nobel. Nobel who? Nobel…that\’s why I knocked!', 'Who\’s there? Luke. Luke who? Luke through the peep hole and find out.', 'Who\’s there? Cow says. Cow says who? No, a cow says mooooo!' ];

const randyNum = Math.floor(Math.random()*3);

const randyJoke = arr => {
    let joke = arr[randyNum];
    return console.log(joke);
}

randyJoke(knockknockJokes);
