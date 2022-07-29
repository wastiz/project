'use strict';
import 'jquery';

document.addEventListener('DOMContentLoaded', function () {


    //Header Modal

    const gallery = document.querySelector('.modal-gallery');
    const hoverModal = document.querySelector('.hover-modal');

    gallery.addEventListener('click', function () {
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

    //Articles 

    class ArticleCard {
        constructor(src, alt, title, descr, parentSelector, ...classes) {
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
                this.classes = "article-card-item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <div class='article-card-item'>
                <img class='article-card-img' src=${this.src} alt=${this.alt}>
                <h3 class="article-card-title">${this.title}</h3>
                <div class="article-card-descr">${this.descr}</div>
                </div>
                `;
            this.parent.append(element);
        }
    }


    class Article {
        constructor(src, alt, title, time, article, parentSelector, ...classes) {
            this.title = title;
            this.src = src;
            this.alt = alt;
            this.time = time;
            this.article = article;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }
        renderArticle() {
            const element = document.createElement('div');
            element.classList.add('container');

            if (this.classes.length === 0) {
                this.classes = "container";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <div class="row">
                <h2 class="text-center">${this.title}</h2>
            </div>
            <div class="row">
                <img src="${this.src}" alt="${this.alt}">
                <h4><i class="fa-solid fa-clock"></i> ${this.time}</h4>
            </div>
            <div class="row">
                <div class="col-xl-7 col-md-7 col-sm-10 col-xs-10">
                    <p>${this.article}</p>
                </div>
                <div class="col-xl-3 col-md-7 col-sm-10 col-xs-10">
                    <div class="chapters">
                        <h4>Chapters</h4>
                        <hr>
                        <a href="">This is a little story, so there is no chapters</a>
                    </div>
                    <div class="stay-connected-form">
                        <h3>Stay Connected!</h3>
                        <form class="footer-form">
                            <div class="search">
                                <input class="form-input" type="text" name="q" placeholder="Email here...">
                                <div class="form-circle">
                                    <div class="form-triangle"><input type="submit" value="" class=""></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    var test;
    $.ajax({
    url: "test.txt",
    dataType: "text",
    async: true,
    success: function(msg){
        test = msg;
        alert('Содержимое файла: '+test);
    }
    }   );

    new Article(
        'Little story about progrmming',
        '../svg/article-test.svg',
        'no image',
        '5 minutes to read',
        'Right know im thinking how place article here by js',
        '.article-placeholder'
    ).renderArticle();  


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

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        `.article-card-column-${oneToThree()}`
    ).render();

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