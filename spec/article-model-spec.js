function testArticleIsCreated() {
  var article = new Article('Headline','test')
  assert.isTrue(article.getHeadline() === 'Headline')
  assert.isTrue(article.getContent() === 'test')
}
testArticleIsCreated()
