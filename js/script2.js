'use strict';

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

//Article class 

function readTextFile(file) {
    fetch(file)
        .then(response => response.text())
        .then(text => {
            const textPlaceholder = document.querySelector('.text-placeholder');
            textPlaceholder.innerHTML = text;
        });
}

class Article {
    constructor(title, src, alt, time, article, parentSelector, ...classes) {
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
            <h2 class="article-title text-center">${this.title}</h2>
        </div>
        <div class="row flex-center">
            <img class='article-image' src="${this.src}" alt="${this.alt}">
        </div>
        <div class="row">    
            <h4><i class="fa-solid fa-clock"></i> ${this.time}</h4>
            <br>
        </div>
        <div class="row">
            <div class="text-placeholder col-xl-9 col-md-9 col-sm-10 col-xs-10">
                
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


new Article(
    'Little story about programming',
    '../img/let-me-tell-a-story.png',
    'no image',
    '5 minutes to read',
    readTextFile('test.txt'),
    '.article-placeholder'
).renderArticle();