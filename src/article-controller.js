(function (exports) {
  function ArticleController(articlelist) {
    this.articlelist = articlelist
    this.listView = new ListView(this.articlelist)
  }
  ArticleController.prototype.viewArticle = function() {
    var articlesHTML = this.listView.getHTML()
    document.getElementById('article').innerHTML = articlesHTML
  }
  exports.ArticleController = ArticleController;
})(this);
