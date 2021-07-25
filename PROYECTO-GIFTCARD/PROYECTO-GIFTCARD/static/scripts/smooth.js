window.onscroll = function() {
    let btnHome = document.getElementById('btn-home'),
        btnGiftcard = document.getElementById('btn-giftcard'),
        btnContact = document.getElementById('btn-contact'),
        y = window.scroll;
    btnHome.onclick = function() {
        if (y !== 0) {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    btnGiftcard.onclick = function() {
        if (y !== 410) {
            window.scroll({
                top: 510,
                behavior: 'smooth',
            })
        }
    }

    btnContact.onclick = function() {
        if (y !== 1080) {
            window.scroll({
                top: 1080,
                behavior: 'smooth',
            })
        }
    }
};