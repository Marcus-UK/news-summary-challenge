(function(exports){
  function ListView(list = new ArticleList){
    this.list = list
  }

  ListView.prototype.getHTML = function(){
    var returnText = "<ul>";
    for( var i = 0 ; i < this.list.articles.length; i++ ) {
      var id = this.list.articles[i].getId()
      returnText += "<li><div>" +
      `<a href="#articles/${id}">` +
      this.list.articles[i].getHeadline() +
      "</a></div></li>";
    }
    returnText +=  "</ul>";
    return returnText;
  }
  exports.ListView = ListView
})(this);
