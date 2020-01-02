const modelContact = require('../models').Contact

class ControlContact {
    static showAllContact(req, res) {
        modelContact.findAll()
            .then(allContact => {
                // res.send(allContact)
                res.render('contacts', { allContact: allContact })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addContact(req, res) {
        modelContact.create({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        })
            .then(() => {
                res.redirect('/contacts')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editContact(req, res) {
        modelContact.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(contactTobeEdited => {
                res.render('editPage', { editData: contactTobeEdited })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateContact(req, res) {
        modelContact.update({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            updatedAt: new Date()
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(updateSuccess => {
                res.redirect('/contacts')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteContact(req, res) {
        modelContact.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/contacts')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControlContact