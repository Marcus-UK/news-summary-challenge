(function(exports){
  function Article(content, id){
    this.content = content;
    this.id = id
  };

  Article.prototype.getContent = function() {
    return this.content;
  };

  Article.prototype.getId = function() {
    return this.id;
  };
  exports.Article = Article;
})(this);
