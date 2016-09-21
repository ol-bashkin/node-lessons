const koa = require('koa'),
      handlebars = require("koa-handlebars"),
      cheerio = require('cheerio'),
      request = require('request'),
      app = koa();
let   news = []; 


request ('http://lenta.ru', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
     $('.b-yellow-box .item').each(function(i, element){
      let newsContainer = $(this).find('a');
      
      news[i] = {
        time: newsContainer.eq(0).text().substr(0,5),
        header: newsContainer.eq(0).text().substring(5)
      };
      
    });
  } else if (error) {
    console.error(error);
  } else {
    console.error(response.statusCode);
  };
});


app.use(handlebars ({
  defaultLayout: "main"
}));


app.use(function *() { 
  yield this.render("index", {
    title: "Новости",
    news: news
  });
});

app.listen(8008);
