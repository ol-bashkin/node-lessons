const koa = require('koa'),
      handlebars = require("koa-handlebars"),
      cheerio = require('cheerio'),
      request = require('request'),
      app = koa();
let   news = []; 


app.use(function *(){
  request ('http://lenta.ru', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    console.log('oy');
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
});


app.use(handlebars ({
  defaultLayout: "main"
}));


app.use(function *() { 
  console.log(news[0])
  yield this.render("index", {
    title: "Новости",
    time: news[0].time,
    news: news[0].header
  });
});

app.listen(8008);