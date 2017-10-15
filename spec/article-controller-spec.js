function testArticleControllerReturnsHtml(){

  var articleliststub = {
    CreateAndStore: function(){}
  };
  var headline = "<ul><li><div><a href=\"#articles/0\">Breaking News!</a></div></li></ul>";

    function ArticleListViewDouble () {};

    ArticleListViewDouble.prototype = {
      getHTML: function() { return headline}
    };
    var articlelistviewdouble = new ArticleListViewDouble();
    var articlecontroller = new ArticleController(articleliststub);
    articlecontroller.listView = articlelistviewdouble;

    articlecontroller.viewArticle();
    assert.isTrue(document.getElementById('article').innerHTML === headline)
     }

     testArticleControllerReturnsHtml();
