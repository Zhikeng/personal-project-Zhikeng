const Perso = require('../models/perso-model')

module.exports = {
  detail: async function (request, response) {
    const { _id } = request.params;
    await Perso.findOne({ _id: _id }).then(function (foundPerso) {
      response.render('pages/persoDetail', {
        foundPerso: foundPerso
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  create: (request, response) => {
    console.log(request.body);
    const { firstName, lastName, email, age, file, purpose, bio, termsAndConditions } = request.body;
    const newPerso = new Perso({
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      file: file,
      purpose: purpose,
      bio: bio,
      termsAndConditions: termsAndConditions
    })

    newPerso.save()

    response.redirect("/admin-console/create-res")
  },
  update: async function (request, response) {

    const { _id } = request.params;

   const { firstName, lastName, email, age, file, purpose, bio, termsAndConditions } = request.body;

    await Perso.findByIdAndUpdate({ _id: _id }, {
      $set: {
       firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      file: file,
      purpose: purpose,
      bio: bio,
      termsAndConditions: termsAndConditions
      }
    }, { new: true }).then(function () {
      response.redirect("/admin-console/admin-perso")
    }).catch(function (error) {
      console.log(error)
    })
  },
  delete: async function (request, response) {
    const { _id } = request.params;
    await Perso.deleteOne({ _id: _id }).then(function () {
      response.redirect("/admin-console/admin-perso")
    }).catch(function (error) {
      console.log(error)
    })
  }
}


