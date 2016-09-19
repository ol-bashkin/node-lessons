const request = require('request');
const cheerio = require('cheerio');

request('http://lenta.ru', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    console.log ('ГЛАВНОЕ ЗА СУТКИ');
    $('.b-yellow-box .item').each(function(i, element){
      let news = $(this).find('a');
      console.log(news.eq(0).text().substr(0,5) + ' ' + news.eq(0).text().substring(5));
    });
  } else if (error) {
    console.error(error);
  } else {
    console.error(response.statusCode);
  }
});
