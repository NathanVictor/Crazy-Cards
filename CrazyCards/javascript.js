// storing input from register-form
//import Deck from "./deck.js"



function store() {
    var email = document.getElementById('email');
    var pw = document.getElementById('password');

    localStorage.setItem('email', email.value);
    localStorage.setItem('password', pw.value);
    window.alert('Registrado');
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    // entered data from the login-form
    var userName = document.getElementById('email_login').value;
    var userPw = document.getElementById('password_login').value;

    // check if stored data from register-form is equal to data from login form
    if(userName == storedName && userPw == storedPw) {
        window.alert('Logado');
    }else {
        alert('ERRO - Informações inválidas.');
    }
}

function getcard(){
    var input = document.getElementById("inputcard").value;
    deck.cards = input;
}

function printcards(){
    console.log(deck.cards)
}

var desafio_1 = 'Desafio: Encontre um objeto azul mais próximo em 10 segundos.';
var desafio_2 = 'Desafio: Segure um cubo de gelo até ele derreter completamente.';
var desafio_3 = 'Desafio: Fale cantando até chegar sua vez novamente.';
var desafio_4 = 'Desafio: Ligue para seu(a) ex.';

var cards = [desafio_1, desafio_2, desafio_3, desafio_4];

function Card () {
    
    console.log(cards.length);

    min = Math.ceil(0);
    max = cards.length;
    random = Math.floor(Math.random() * (max - min)) + min;

    var targetDiv = document.getElementById('card_text');
    var htmlContent = cards[random];
    targetDiv.innerHTML = htmlContent;
}

function AddNewCard () {

    var cardToAdd = document.getElementById('newcard').value;

    if(cardToAdd == null || cardToAdd == ""){
        alert("Não insira uma carta vazia!");
    }else{

        var newCards = new Array(cards.length + 1);

        for (var i = 0; i < cards.length; i++){
            newCards[i] = cards[i];
        }

        newCards[newCards.length - 1] = cardToAdd;

        cards = new Array(cards.length + 1);
        cards = newCards;
    }
}