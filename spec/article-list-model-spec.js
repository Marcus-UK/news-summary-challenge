function TestAddingArticleToList() {
  var list = new ArticleList();
  list.CreateAndStore('headline', 'content');
  assert.isTrue(list.articles[0].content === 'content');
}
TestAddingArticleToList();
