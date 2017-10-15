(function (exports) {
  function ArticleController(articlelist) {
    this.articlelist = articlelist
    this.listView = new ListView(this.articlelist)
    this.singleArticleView = new singleArticleView()
  }
  ArticleController.prototype.viewArticle = function() {
    var articlesHTML = this.listView.getHTML()
    document.getElementById('articles').innerHTML = articlesHTML
  }


    showArticle();

     function showArticle() {
       window.addEventListener("hashchange", showCurrentArticle);
     };

     function showCurrentArticle() {
       displayArticle(this.articlelist.articles.getArticleFromUrl(window.location));
     };

     function getArticleFromUrl(location) {
       return location.hash.split("#")[1];
     };

     function displayArticle(article) {
       document
         .getElementById("singlearticle")
         .innerHTML = article;
     }
  exports.ArticleController = ArticleController;
})(this);
