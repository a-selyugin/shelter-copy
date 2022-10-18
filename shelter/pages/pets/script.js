
let petsArray = [];
let subArray =[];
let pageNum = 1;
let maxPage = 6;

// формируем основной массив

for (let i = 0; i < 6; i++){
    let n;
    petsArray.push([]);
    subArray.length = 0;
    while (subArray.length < 8) {
        do {
            n = Math.floor(Math.random() * 8);
            } while (subArray.includes(n));
        subArray.push(n);
    }
    for (n = 0; n < subArray.length; n++){
        petsArray[i].push(PETS[subArray[n]]);
    }
}

// формируем массив для таблеток
let petsArrayFlat = petsArray.flat();
let petsArrayTablet = [];

for (let i = 0; i < 8; i++){
    subArray.length = 0;
    petsArrayTablet.push([]);
    let n = 0;
    while (subArray.length < 6){
        if (!(petsArrayFlat[n] == -1) && !(subArray.includes(petsArrayFlat[n]))){
            subArray.push(petsArrayFlat[n]);
            petsArrayFlat[n] = -1;
        }
        else {
            n++;
        }
    }
    for (n = 0; n < subArray.length; n++){
        petsArrayTablet[i].push(subArray[n]);
    }
}

//формируем массив для мобилок, за что?
petsArrayFlat = petsArrayTablet.flat();
let petsArrayMobile = [];
let m = 0;
for (let i = 0; i < 16; i++){
    petsArrayMobile.push([]);
    for (let n = 0; n < 3; n++){
        petsArrayMobile[i].push(petsArrayFlat[m]);
        m++;
    }
}

// вот эту хрень возможно надо закомментировать, может много жрать и быть неэффективной
function breakPointMonitor(){
//    console.log(window.innerWidth);
    if (Math.abs(window.innerWidth - 768) < 10){
        cardsRefresh();
        decrPageCheck();
        incrPageCheck();
    }
    if (Math.abs(window.innerWidth - 1280) < 10){
        cardsRefresh();
        decrPageCheck();
        incrPageCheck();
    }
    if (Math.abs(window.innerWidth - 320) < 10){
        cardsRefresh();
        decrPageCheck();
        incrPageCheck();
    }
}
window.addEventListener('resize', breakPointMonitor);

//рисуем карточки
function cardsRefresh(){
    i = 0;
    let targetArray;
    if (window.innerWidth < 768) {
        targetArray = petsArrayMobile;
        maxPage = 16;
    }
    else if (window.innerWidth >= 1280){
        targetArray = petsArray;
        maxPage = 6;
        if (pageNum > maxPage) {
            pageNum = maxPage;
            buttonCurPage.innerHTML = pageNum;
        }
    }
    else {
        targetArray = petsArrayTablet;
        maxPage = 8;
        if (pageNum > maxPage) {
            pageNum = maxPage;
            buttonCurPage.innerHTML = pageNum;
        }
    }
    for (let card of CARDS){
        card.classList.add('slider__animation');
        if (targetArray[pageNum - 1][i]){
            const petName = targetArray[pageNum - 1][i].name;
            const petImage = targetArray[pageNum - 1][i].img;

            card.querySelector('.card__image').src = petImage;
            card.querySelector('.card__name').innerHTML = petName;
        }
        i++;
        card.addEventListener("animationend", () =>{
            card.classList.remove('slider__animation');
        })
    }
}

cardsRefresh();


// делаем пагинацию

const buttonToStart = document.querySelector('.page__button_to-start');
const buttonPrev = document.querySelector('.page__button_prev');
const buttonNext = document.querySelector('.page__button_next');
const buttonToEnd = document.querySelector('.page__button_to-end');
const buttonCurPage = document.querySelector('.button_currentpage');

function incrPage (){
    pageNum++;
    buttonCurPage.innerHTML = pageNum;
    incrPageCheck();
    cardsRefresh();
}

function decrPage() {
    pageNum--;
    buttonCurPage.innerHTML = pageNum;
    decrPageCheck();
    cardsRefresh();
}

function toEnd () {
    pageNum = maxPage;
    buttonCurPage.innerHTML = pageNum;
    incrPageCheck();
    cardsRefresh();
}

function toStart(){
    pageNum = 1;
    buttonCurPage.innerHTML = pageNum;
    decrPageCheck();
    cardsRefresh();
}

function decrPageCheck(){
    if (pageNum <= 1){
        buttonPrev.classList.add('button_inactive');
        buttonToStart.classList.add('button_inactive');
        buttonPrev.classList.remove('button_active');
        buttonToStart.classList.remove('button_active');
        buttonPrev.removeEventListener("click", decrPage);
        buttonToStart.removeEventListener("click", toStart);
    }
    if (pageNum < maxPage){
        buttonNext.classList.remove('button_inactive');
        buttonToEnd.classList.remove('button_inactive');
        buttonNext.classList.add('button_active');
        buttonToEnd.classList.add('button_active');
        buttonNext.addEventListener("click", incrPage);
        buttonToEnd.addEventListener("click", toEnd);
    }
}

function incrPageCheck(){
    if (pageNum >= maxPage){
        buttonNext.classList.add('button_inactive');
        buttonToEnd.classList.add('button_inactive');
        buttonNext.classList.remove('button_active');
        buttonToEnd.classList.remove('button_active');
        buttonNext.removeEventListener("click", incrPage);
        buttonToEnd.removeEventListener("click", toEnd);
    }
    if (pageNum > 1){
        buttonPrev.classList.remove('button_inactive');
        buttonToStart.classList.remove('button_inactive');
        buttonPrev.classList.add('button_active');
        buttonToStart.classList.add('button_active');
        buttonPrev.addEventListener("click", decrPage);
        buttonToStart.addEventListener("click", toStart);
    }
}


buttonNext.addEventListener("click", incrPage);
buttonPrev.addEventListener("click", decrPage);
buttonToEnd.addEventListener("click", toEnd);
buttonToStart.addEventListener("click", toStart);