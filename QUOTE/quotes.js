//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        'author': 'Walt Disney',
        'quote': 'The way to get started is to quit talking and begin doing'
    },
    {
        'author': 'Oprah Winney',
        'quote': 'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.'
    },
    {
        'author': 'James Cameron',
        'quote': 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.'
    },
    {
        'author': 'James Cameron',
        'quote': 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.'
    },


];

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${arrayOfQuotes[random].author}`;

}