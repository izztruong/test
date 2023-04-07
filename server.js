const express = require('express');
const expressHbs=require('express-handlebars');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.render('home', {
        layout: 'main',
        showBody: true,
        showContentTinhToan: false
    });
});
app.get('/tinhtoan', (req, res) => {
    res.render('defaultViews', {
        layout: 'main',
        soA: 15,
        soB: 7,
        kq: 22,
        operator: 'cong',
        showBody: false,
        showContentTinhToan: true
    });
});
app.listen(port);

app.set('view engine', '.hbs');
app.set('views', './views');
app.engine('.hbs', expressHbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    
    
}));