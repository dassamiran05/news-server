const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());


const categories = require('./data/categories.json');
const news = require('./data/news.json');
// console.log(categories);

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selected_news = news.find(n => n._id === id);
    res.send(selected_news);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    } else {
        const category_news = news.filter(x => x.category_id === id);
        res.send(category_news);
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})