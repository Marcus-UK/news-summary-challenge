function testArticleIsCreated() {
  var article = new Article('test')
  assert.isTrue(article.content === 'test')
}
testArticleIsCreated()
