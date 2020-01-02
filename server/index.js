const express = require('express')
const app = express()
const port = 3000
const contact = require('./routers/routeContact')

app.set('views', '../client/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('client')
})
app.use('/contacts', contact)
app.listen(port, () => {
    console.log(`listening to ${port}`)
})