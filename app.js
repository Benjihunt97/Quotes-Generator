$(document).ready(() => {

    async function randomQuote() {
        const response = await fetch('https://api.quotable.io/random')
        const quote = await response.json()

        $('#quote').text(quote.content);
    }

    $('#generate').click(() => {
        let number = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
        let result = number < 100 ? '0' + number : String(number);

        $('.num').text(`QUOTE #${result}`);
        randomQuote();
    });

});
