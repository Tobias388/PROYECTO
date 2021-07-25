let giftCard1 = document.getElementById('giftcard-1'),
    popUp1 = document.getElementById('popup-1'),
    overlay = document.getElementById('overlay'),
    popUp1H3 = document.getElementById('amount-container-item-h3-popup-1'),
    popUp1Input = document.getElementById('amount-container-item-input-popup-1'),
    popUp1PayBtn1 = document.getElementById('method-btn-1'),
    popUp1PayBtn2 = document.getElementById('method-btn-2'),
    popUp1H2 = document.getElementById('giftcard-h2-item-popup-1'),
    popUp1P = document.getElementById('giftcard-p-popup-1'),
    giftCard2 = document.getElementById('giftcard-2'),
    popUp2 = document.getElementById('popup-2'),
    popUp2H3 = document.getElementById('amount-container-item-h3-popup-2'),
    popUp2Input = document.getElementById('amount-container-item-input-popup-2'),
    popUp2PayBtn3 = document.getElementById('method-btn-3'),
    popUp2PayBtn4 = document.getElementById('method-btn-4'),
    popUp2H2 = document.getElementById('giftcard-h2-item-popup-2'),
    popUp2P = document.getElementById('giftcard-p-popup-2'),
    giftCard3 = document.getElementById('giftcard-3'),
    popUp3 = document.getElementById('popup-3'),
    popUp3H3 = document.getElementById('amount-container-item-h3-popup-3'),
    popUp3Input = document.getElementById('amount-container-item-input-popup-3'),
    popUp3PayBtn3 = document.getElementById('method-btn-5'),
    popUp3PayBtn4 = document.getElementById('method-btn-6'),
    popUp3H2 = document.getElementById('giftcard-h2-item-popup-3'),
    popUp3P = document.getElementById('giftcard-p-popup-3'),
    close = document.getElementById('close'),
    close2 = document.getElementById('close-2'),
    close3 = document.getElementById('close-3');

giftCard1.onclick = function() {
    popUp1.classList.add('active');
    overlay.classList.add('active');
    popUp1H3.classList.add('active');
    popUp1H2.classList.add('active');
    popUp1P.classList.add('active');
    popUp1Input.classList.add('active');
    popUp1PayBtn1.classList.add('active');
    popUp1PayBtn2.classList.add('active');
};

giftCard2.onclick = function() {
    popUp2.classList.add('active');
    overlay.classList.add('active');
    popUp2H3.classList.add('active');
    popUp2H2.classList.add('active');
    popUp2P.classList.add('active');
    popUp2Input.classList.add('active');
    popUp2PayBtn3.classList.add('active');
    popUp2PayBtn4.classList.add('active');
};

giftCard3.onclick = function() {
    popUp3.classList.add('active');
    overlay.classList.add('active');
    popUp3H3.classList.add('active');
    popUp3H2.classList.add('active');
    popUp3P.classList.add('active');
    popUp3Input.classList.add('active');
    popUp3PayBtn3.classList.add('active');
    popUp3PayBtn4.classList.add('active');
};

close.onclick = function() {
    popUp1.classList.remove('active');
    overlay.classList.remove('active');
    popUp1H3.classList.remove('active');
    popUp1H2.classList.remove('active');
    popUp1P.classList.remove('active');
    popUp1Input.classList.remove('active');
    popUp1PayBtn1.classList.remove('active');
    popUp1PayBtn2.classList.remove('active');
};

close2.onclick = function() {
    popUp2.classList.remove('active');
    overlay.classList.remove('active');
    popUp2H3.classList.remove('active');
    popUp2H2.classList.remove('active');
    popUp2P.classList.remove('active');
    popUp2Input.classList.remove('active');
    popUp2PayBtn3.classList.remove('active');
    popUp2PayBtn4.classList.remove('active');
};

close3.onclick = function() {
    popUp3.classList.remove('active');
    overlay.classList.remove('active');
    popUp3H3.classList.remove('active');
    popUp3H2.classList.remove('active');
    popUp3P.classList.remove('active');
    popUp3Input.classList.remove('active');
    popUp3PayBtn3.classList.remove('active');
    popUp3PayBtn4.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function() {
    // selecciona los elementos aquí
});