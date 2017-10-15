function testArticleListRendered() {
  var list = new ArticleList()
  list.CreateAndStore('Breaking News!', 'The World came to an end yesterday.')

  listview = new ListView(list)
  headline = "<ul><li><div><a href=\"#0\">Breaking News!</a></div></li></ul>"
  assert.isTrue(listview.getHTML() === headline)
}
testArticleListRendered();
