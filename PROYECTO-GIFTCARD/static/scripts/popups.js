let giftCard1 = document.getElementById('giftcard-1'),
	popUp1 = document.getElementById('popup-1'),
	overlay = document.getElementById('overlay'),
	popUp1H3 = document.getElementById('amount-container-item-h3'),
	popUp1Input = document.getElementById('amount-container-item-input'),
	popUp1PayBtn1 = document.getElementById('method-btn-1'),
	popUp1PayBtn2 = document.getElementById('method-btn-2'),
	popUp1H2 = document.getElementById('giftcard-h2-item-popup-1'),
	popUp1P = document.getElementById('giftcard-p-popup-1'),
	close = document.getElementById('close');

giftCard1.onclick = function () {
	popUp1.classList.add('active');
	overlay.classList.add('active');
	popUp1H3.classList.add('active');
	popUp1H2.classList.add('active');
	popUp1P.classList.add('active');
	popUp1Input.classList.add('active');
	popUp1PayBtn1.classList.add('active');
	popUp1PayBtn2.classList.add('active');
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