'use strict';

document.addEventListener('DOMContentLoaded', function () {


    //Header Modal

    const gallery = document.querySelector('.modal-gallery');
    const hoverModal = document.querySelector('.hover-modal');

    gallery.addEventListener('click', function (e) {
        if (hoverModal.classList.contains('closed-modal')) {
            hoverModal.classList.remove('closed-modal');
            hoverModal.classList.add('opened-modal');
        } else {
            hoverModal.classList.remove('opened-modal');
            hoverModal.classList.add('closed-modal');
        }
    });

    //Dark theme

    const btn = document.getElementById("theme-button");
    const link = document.getElementById("theme-link");
    let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";
    var currTheme = link.getAttribute("href");
    var theme = "";

    if (localStorage.getItem('theme') === 'light') {
        btn.innerHTML = "Come to <br>Dark Side";
        currTheme = lightTheme;
        theme = "light";
        link.setAttribute("href", currTheme);
    }

    btn.addEventListener("click", function () {
        ChangeTheme();
    });

    function ChangeTheme() {

        if (localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'dark');
            btn.innerHTML = "Come to <br>Light Side";
            currTheme = darkTheme;
            theme = "dark";
            link.setAttribute("href", currTheme);
        } else {
            localStorage.setItem('theme', 'light');
            btn.innerHTML = "Come to <br>Dark Side";
            currTheme = lightTheme;
            theme = "light";
            link.setAttribute("href", currTheme);
        }

    }

    //Card-Articles 
    
    class ArticleCard {
        constructor(type, src, alt, title, descr, parentSelector, ...classes) {
            this.type = type;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }
        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "box";
                element.classList.add(this.classes);
                element.classList.add(`${this.type}`);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img class='article-card-img ${this.type}' src='${this.src}' alt=${this.alt}>
                <h3 class="article-card-title ${this.type}">${this.title}</h3>
                <div class="article-card-descr ${this.type}">${this.descr}</div>
                `;

            this.parent.append(element);
        }
    }
    let a = 0;

    function oneToThree() {
        if (a == 0) {
            a++;
            return a;
        } else if (a == 1) {
            a++;
            return a;
        } else if (a == 2) {
            a++;
            return a;
        } else if (a == 3) {
            a = 0;
            a++;
            return a;
        }
    }

    // fetch('db.json')  
    // .then(response => response.json()) 
    // .then(json => {
    //     json.forEach(({type, img, alt, title, descr, price}) => {
    //         new ArticleCard(type, img, alt, title, descr, price, `.article-card-column-${oneToThree()}`).renderAllCards();
    //     });
    // });


    new ArticleCard(
        'web-coding',
        'svg/article-test.svg',
        'no image',
        "Let's do this",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-coding',
        'svg/article-test.svg',
        'no image',
        "Let's do this",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-coding',
        'svg/article-test.svg',
        'no image',
        "Let's roll",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-coding',
        'svg/article-test.svg',
        'no image',
        "Let's roll out",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-design',
        'svg/article-test.svg',
        'no image',
        "Let's do this",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-design',
        'svg/article-test.svg',
        'no image',
        "Let's do this shit",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-coding',
        'svg/article-test.svg',
        'no image',
        "Let's fucking go",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'web-design',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'other',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'other',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'other',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'other',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    new ArticleCard(
        'other',
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column`
    ).render();

    const filterBox = document.querySelectorAll('.box');
    const articleCardImg = document.querySelectorAll('.article-card-img');
    const articleCardTitle = document.querySelectorAll('.article-card-title');
    const articleCardDescr = document.querySelectorAll('.article-card-descr');

    document.querySelector('.article-card-nav').addEventListener('click', (event) => {
    
        if (event.target.tagName !== 'LI'){
            console.log('not working');
            return false;
        }
        let filterClass = event.target.dataset.f;
    
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide');
            }
        });
        articleCardImg.forEach(elem => {
            elem.classList.remove('hide-content');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide-content');
            }
        });
        articleCardTitle.forEach(elem => {
            elem.classList.remove('hide-content');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide-content');
            }
        });
        articleCardDescr.forEach(elem => {
            elem.classList.remove('hide-content');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide-content');
            }
        });
    
    });

    //Scroll effects

    const textSelector = document.querySelector('.text-selector');

    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop <= 1600) {
            textSelector.classList.add('about-me-text-h2');
        } else {
            textSelector.classList.remove('about-me-text-h2');
        }
    });

    //Overflow function 
    const overflowItem = document.querySelector('.selector');
    const viewAllButton = document.querySelector('.view-all');

    viewAllButton.addEventListener('click', () => {
        if (overflowItem.classList.contains('overflow-hidden')) {
            overflowItem.classList.remove('overflow-hidden');
            overflowItem.classList.add('overflow-scroll');
            viewAllButton.innerText = 'Close all';
        } else {
            overflowItem.classList.remove('overflow-scroll');
            overflowItem.classList.add('overflow-hidden');
            viewAllButton.innerText = 'View all';
        }
    });


});