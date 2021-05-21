
$('#addButton').on('click', function () {
    $('ul').append('<li>'+$('#nextItem').val()+'</li>')
})


let tamasKora = 21

if (tamasKora >= 21) {
    $('.pia').append('A Tamás egy <strong> kivénhedt </strong> kurva')
} else if (tamasKora >= 18) {
    $('.pia').append('A Tamás egy átlagos kurva')
} else {
    $('.pia').append('A Tamás egy fiatal kurva')
}

let szinek = ['pink', 'green', 'blue', 'yellow', 'red']

function hozzaadas (szin) {
    $('.kontener').append('<div class="negyzet"></div>')
    $('.negyzet:last-of-type').css('background-color', szin)
}

hozzaadas('black')

hozzaadas('brown')

szinek.forEach(hozzaadas)