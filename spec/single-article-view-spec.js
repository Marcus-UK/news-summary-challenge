function testViewForSingleArticle() {
  var article = new Article('Headline', 'Orange');
  var singleAV = new singleArticleView(article);
  var content = '<div>Orange</div>';
  assert.isTrue(singleAV.toHtml() === content);
}

testViewForSingleArticle();
