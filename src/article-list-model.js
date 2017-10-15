(function(exports) {
  function ArticleList(){
    this.articles = []
  };

  ArticleList.prototype.display = function() {
    return this.articles;
  };

  ArticleList.prototype.CreateAndStore = function(headline, content) {
    var article = new Article(headline, content, this.articles.length);
    this.articles.push(article);
  };

exports.ArticleList = ArticleList;
})(this);
