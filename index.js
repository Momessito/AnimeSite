// lib
const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

// var
const app = express()

// api
const controler = require('./controler')
const api = require('./api')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// routes
app.get('/', async (req, res) => {
    // call api
    const recents = await api.getRecents()
    const list_recents = recents['mangas']
    const popular = await api.getPopular()
    const list_popular = popular['mangas']

    // render
    res.render('home', {recents: list_recents,popular: list_popular})
})

app.listen(port, () => {
    console.log(`Server start on port: ${port}`)
    console.log(`http://localhost:${port}`)
})