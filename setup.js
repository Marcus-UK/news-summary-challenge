var list = new ArticleList()
list.CreateAndStore('Breaking News: The world ended yesterday', 'The World came to an end yesterday. No one noticed.')
list.CreateAndStore('Strange cat spotted', 'The most important story of the day is that a strange cat has been spotted in the Midlands.')
list.CreateAndStore('Nothing to report', 'In unprecedented news, There is no news.')
var controller = new ArticleController(list)
controller.viewArticle()
