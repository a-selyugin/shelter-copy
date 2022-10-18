const PETS = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

// Узнаем что за страница

let title = document.getElementsByTagName("title")[0].innerHTML;
let activeCardsContainer;
let CARDS;

if (title == 'Main') {

    // Генерация карточек в центре и по краям

    activeCardsContainer = document.querySelector('.carousel__active');
    CARDS = activeCardsContainer.querySelectorAll('.slider__card');
    const leftCardsContainer = document.querySelector('.carousel__left');
    const leftCARDS = leftCardsContainer.querySelectorAll('.slider__card');
    const rightCardsContainer = document.querySelector('.carousel__right');
    const rightCARDS = rightCardsContainer.querySelectorAll('.slider__card');

    let checkArray = [];
    let i;
    for (let card of CARDS){
        do {
        i = Math.floor(Math.random() * 8);
        } while (checkArray.includes(i));

        checkArray.push(i);

        const petName = PETS[i].name;
        const petImage = PETS[i].img;
        
        if (petImage && petName){
            card.querySelector('.card__image').src = petImage;
            card.querySelector('.card__name').innerHTML = petName;
        }
    }

    // заполняем карточки слева и справа одинаковыми случайными карточками, потому что животных слишком мало :)
    function generateRandomCards (cardsArr, checkArr){
        for (let card of cardsArr){
            do {
            i = Math.floor(Math.random() * 8);
            } while (checkArr.includes(i));
            
            checkArr.push(i);
        
            const petName = PETS[i].name;
            const petImage = PETS[i].img;
            
            if (petImage && petName){
                card.querySelector('.card__image').src = petImage;
                card.querySelector('.card__name').innerHTML = petName;
            }
        }
    }

    generateRandomCards (leftCARDS,checkArray);

    //  так как животных меньше 9, то просто скопируем содержимое левых в карточки справа
    //  функция ниже копирует значение карточек left в карточки right
    function copyCards (left, right) {
        for (i = 0; i < 3; i++){
            right[i].querySelector('.card__image').src = left[i].querySelector('.card__image').src;
            right[i].querySelector('.card__name').innerHTML = left[i].querySelector('.card__name').innerHTML;
        }
    }
    //  сразу вызываем 
    copyCards(leftCARDS,rightCARDS);

    const BTN_LEFT = document.querySelector(".slider__button_left");
    const BTN_RIGHT = document.querySelector(".slider__button_right");
    const CAROUSEL = document.querySelector(".slider__carousel");
    const ITEM_LEFT = document.querySelector(".carousel__left");
    const ITEM_RIGHT = document.querySelector(".carousel__right");

    const moveLeft = () => {
        CAROUSEL.classList.add("transition-left");
        BTN_LEFT.removeEventListener("click", moveLeft);
        BTN_RIGHT.removeEventListener("click", moveRight);
    };

    const moveRight = () => {
        CAROUSEL.classList.add("transition-right");
        BTN_LEFT.removeEventListener("click", moveLeft);
        BTN_RIGHT.removeEventListener("click", moveRight);
    };

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);

    CAROUSEL.addEventListener("animationend", (animationEvent) => {
        let changedItem;
        let changedItemCards;
        let checkArr2 = [];

        if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        changedItemCards = changedItem.querySelectorAll('.slider__card');
        copyCards(CARDS, ITEM_RIGHT.querySelectorAll('.slider__card'));
        copyCards(changedItemCards, CARDS);
        } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        changedItemCards = changedItem.querySelectorAll('.slider__card');
        copyCards(CARDS, ITEM_LEFT.querySelectorAll('.slider__card'));
        copyCards(changedItemCards, CARDS);
        }

    //составляем заново checkArray 
    
    for (let card of CARDS){
        for (i=0; i < PETS.length; i++){
            if (PETS[i].name === card.querySelector('.card__name').innerHTML){
                checkArr2.push(i);
            }
        }
    }

    generateRandomCards (changedItemCards,checkArr2);

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    })
}
else if (title == 'Our pets'){
    activeCardsContainer = document.querySelector('.ourpets__cardscontainer');
    CARDS = activeCardsContainer.querySelectorAll('.slider__card');
}



// создаем попапы

const learnMoreButtons = activeCardsContainer.querySelectorAll('.slider__card');

function openPopUp () {
    let popUp = null;
    let petName = this.querySelector('.card__name').innerHTML;
    let petID = null;
    // ищем нужный объект
    for (i = 0; i < PETS.length; i++){
        if (PETS[i].name === petName){
            console.log('found');
            petID = i;
        }
    }

    popUp = document.createElement("div");
    popUp.classList.add("popup__background");
    document.body.classList.add('_lock');
    popUp.innerHTML = `
        <div class="popup__overlay"></div>
        <div class="popup__container">
                <button class="button_main button_active popup__button_close">
                    <img src="../../assets/icons/icon-close.svg" alt="close">
                </button>
                <img src="${PETS[petID].img}" alt="Pet-photo" class="popup__object">
                <div class="popup__content">
                    <h3 class="popup__header">
                    ${PETS[petID].name}
                    </h3>
                    <h4 class="popup__subheader">
                        ${PETS[petID].type} - ${PETS[petID].breed}
                    </h4>
                    <h5 class="popup__text">
                        ${PETS[petID].description}
                    </h5>
                    <ul class="popup__list">
                        <li class="popup__list-item">Age: <span class="popup__list-item_value">${PETS[petID].age}</span></li>
                        <li class="popup__list-item">Inoculations: <span class="popup__list-item_value">${PETS[petID].inoculations.join(', ')}</span></li>
                        <li class="popup__list-item">Diseases: <span class="popup__list-item_value">${PETS[petID].diseases.join(', ')}</span></li>
                        <li class="popup__list-item">Parasites: <span class="popup__list-item_value">${PETS[petID].parasites.join(', ')}</span></li>
                    </ul>
                </div>
        </div>
    `
    document.body.insertBefore(popUp, document.querySelector('.footer'));

    const closeButton = document.querySelector('.popup__button_close');
    const closeArea = document.querySelector('.popup__overlay');

    closeButton.addEventListener("click", closePopUp);
    closeArea.addEventListener("click", closePopUp);

    let popUpCont = document.querySelector('.popup__container');

    closeButton.classList.add('_button-hover');
    popUpCont.addEventListener("mouseout", () => {closeButton.classList.add('_button-hover')});
    popUpCont.addEventListener("mouseover", () => {closeButton.classList.remove('_button-hover')});

    function closePopUp (){
        document.body.classList.remove('_lock');
        popUp.remove(popUp);
    }
}

for (let button of learnMoreButtons){
    button.addEventListener("click", openPopUp);
}

