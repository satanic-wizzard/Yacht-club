let themeLight = document.querySelector('.theme-button-light'); 
let themeDark = document.querySelector('.theme-button-dark');
let page = document.querySelector('.page'); 
let fontSansSerif = document.querySelector('.font-button-sans-serif');
let fontSerif = document.querySelector('.font-button-serif'); 
let contents = document.querySelectorAll('.blog-article'); 
let cardGrid = document.querySelector('.card-view-button-grid');
let cardList = document.querySelector('.card-view-button-list'); 
let cards = document.querySelector('.cards'); 
let active = document.querySelector('.active-photo'); 
let previews = document.querySelectorAll('.preview-list a')

themeDark.onclick = function () {
    page.classList.add('dark'); 
    themeLight.classList.remove('active'); 
    themeDark.classList.add('active');  
};

themeLight.onclick = function () {
    page.classList.remove('dark'); 
    themeLight.classList.add('active'); 
    themeDark.classList.remove('active');
}; 


fontSerif.onclick = function () {
    page.classList.add('serif'); 
    fontSansSerif.classList.remove('active'); 
    fontSerif.classList.add('active'); 
};

fontSansSerif.onclick = function () {
    page.classList.remove('serif'); 
    fontSansSerif.classList.add('active'); 
    fontSerif.classList.remove('active'); 
};


for (let content of contents) {
    let moreButton = content.querySelector('.more');
    moreButton.onclick = function () {
        content.classList.remove('short')
    };
};

cardList.onclick = function () {
    cards.classList.add('list'); 
    cardGrid.classList.remove('active'); 
    cardList.classList.add('active')
};

cardGrid.onclick = function () {
    cards.classList.remove('list'); 
    cardGrid.classList.add('active'); 
    cardList.classList.remove('active')
};


for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        active.src = activeImage.href;

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
};
