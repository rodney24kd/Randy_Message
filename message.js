const knockknockJokes = ['Who\’s there? Nobel. Nobel who? Nobel…that\’s why I knocked!', 'Who\’s there? Luke. Luke who? Luke through the peep hole and find out.', 'Who\’s there? Cow says. Cow says who? No, a cow says mooooo!' ];

const statements = ['Not so funny...', 'Do not quit your day job...', 'rofl'];

const randyNum = Math.floor(Math.random()*3);

const randyJoke = (arr,arr2) => {
    let joke = arr[randyNum];
    console.log(joke);
    let response = arr2[randyNum];
    console.log(response);
}

randyJoke(knockknockJokes, statements);
