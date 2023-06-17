// const data = require('../data/data');
// const { v4: uuid } = require('uuid');
const Response = require('../models/res-model')
const Perso = require('../models/perso-model')

module.exports = {
    admin_res: async function (request, response) {
        if (request.isAuthenticated()) {
            await Response.find().then(function (allRes) {
                response.render('pages/adminRes', {
                    responseArray: allRes,
                    // response.send("This route points to the Admin Console page")
                })
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
    create_res: (request, response) => {
        // if (request.isAuthenticated()) {
            response.render('pages/createRes')
            // response.send("This route points to the Create page")
        // }
    },
    update_res: async function (request, response) {
        if (request.isAuthenticated()) {
            const { _id } = request.params;
            // const foundRes = data.find(res => res._id === String(_id));
            await Response.findOne({ _id: _id }).then(function (foundRes) {
                response.render('pages/updateRes', {
                    foundRes: foundRes
                });
            }).catch(function (error) {
                console.log(error)
            })
        }
        // response.send("This route points to the Update page")
    },
    admin_perso: async function (request, response) {
        if (request.isAuthenticated()) {
            await Perso.find().then(function (allPerso) {
                response.render('pages/adminPerso', {
                    persoArray: allPerso,
                })
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
    create_perso: (request, response) => {
        // if (request.isAuthenticated()) {
            response.render('pages/createPerso')
        // }
    },
    update_perso: async function (request, response) {
        if (request.isAuthenticated()) {
            const { _id } = request.params;
            await Perso.findOne({ _id: _id }).then(function (foundPerso) {
                response.render('pages/updatePerso', {
                    foundPerso: foundPerso
                });
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
}
