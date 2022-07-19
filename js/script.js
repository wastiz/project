'use strict';

document.addEventListener('DOMContentLoaded', function () {

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
                <img class='article-card-img' src=${this.src} alt=${this.alt}>
                <h3 class="article-card-title">${this.title}</h3>
                <div class="article-card-descr">${this.descr}</div>
                `;
            this.parent.append(element);
        }



    }
    new ArticleCard(
        'svg/article-test.svg',
        'no image',
        "Let's Start",
        'Here you will learn how to start your <br> way in this suffering deal',
        '.article-card-container'
    ).render();

});