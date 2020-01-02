const contact = require('express').Router()
const control = require('../controller/contact')

contact.get('/', control.showAllContact)
contact.post('/', control.addContact)
contact.get('/edit/:id', control.editContact)
contact.post('/edit/:id', control.updateContact)
contact.get('/delete/:id', control.deleteContact)


module.exports = contact