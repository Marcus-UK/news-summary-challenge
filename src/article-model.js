(function(exports){
  function Article(headline, content, id){
    this.headline = headline;
    this.content = content;
    this.id = id
  };

  Article.prototype.getHeadline = function() {
    return this.headline;
  }

  Article.prototype.getContent = function() {
    return this.content;
  };

  Article.prototype.getId = function() {
    return this.id;
  };
  exports.Article = Article;
})(this);
