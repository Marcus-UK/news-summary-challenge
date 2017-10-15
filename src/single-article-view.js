(function(exports){
  function singleArticleView(article = new Article()) {
    this.article = article
  }
  singleArticleView.prototype.toHtml = function() {
    return "<div>" + this.article.content + "</div>";
  }
  exports.singleArticleView = singleArticleView;
})(this);
