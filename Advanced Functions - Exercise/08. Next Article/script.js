function getArticleGenerator(articles) {
    let curArticles = Array.from(articles);
    let result = document.getElementById("content");

    return function showNext() {
        if (curArticles.length == 0) {
            return;
        }
        let firstElement = curArticles.shift();
        let articleEl = document.createElement("article");
        articleEl.textContent = firstElement;
        result.appendChild(articleEl);
    }
}