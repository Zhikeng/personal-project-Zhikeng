// const data = require('../data/data');
// const { v4: uuid } = require('uuid');
const Response = require('../models/res-model')

module.exports = {
  display: async function (request, response) {
    await Response.find().then(function (allRes) {
      response.render('pages/displayRes', {
        inventoryArray: allRes
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  detail: async function (request, response) {
    // let id = request.params._id;
    const { _id } = request.params;
    // const foundRes = data.find(res => res._id === String(_id));
    await Response.findOne({ _id: _id }).then(function (foundRes) {
      response.render('pages/resDetail', {
        foundRes: foundRes
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  create: (request, response) => {
    console.log(request.body);
    const { timeStamp, status, type, satisfaction, problem, importance, rent, reason, people, age, income, comment } = request.body;
    const newResponse = new Response({
      timeStamp: timeStamp,
      status: status,
      type: type,
      satisfaction: satisfaction,
      problem: problem,
      importance: importance,
      rent: rent,
      reason: reason,
      people: people,
      age: age,
      income: income,
      comment: comment
    })

    newResponse.save()

    response.redirect("/housing-survey")
  },
  //   data.push({ _id, timeStamp, status, type, satisfaction, problem, importance, rent, reason, people, age, income, comment });
  //   if (timeStamp != "") {
  //     response.redirect("/admin-console");
  //   } else {
  //     response.redirect("/admin-console/create-res");
  //   }
  // },
  update: async function (request, response) {

    const { _id } = request.params;

    const { timeStamp, status, type, satisfaction, problem, importance, rent, reason, people, age, income, comment } = request.body;

    await Response.findByIdAndUpdate({ _id: _id }, {
      $set: {
        timeStamp: timeStamp,
        status: status,
        type: type,
        satisfaction: satisfaction,
        problem: problem,
        importance: importance,
        rent: rent,
        reason: reason,
        people: people,
        age: age,
        income: income,
        comment: comment
      }
    }, { new: true }).then(function () {
      response.redirect("/admin-console/admin-res")
    }).catch(function (error) {
      console.log(error)
    })
  },
  //   const foundRes = data.find(res => res._id === String(_id));

  //   foundRes.timeStamp = timeStamp;
  //   foundRes.status = status;
  //   foundRes.type = type;
  //   foundRes.satisfaction = satisfaction;
  //   foundRes.problem = problem;
  //   foundRes.importance = importance;
  //   foundRes.rent = rent;
  //   foundRes.reason = reason;
  //   foundRes.people = people;
  //   foundRes.age = age;
  //   foundRes.income = income;
  //   foundRes.comment = comment;

  //   response.redirect("/admin-console");
  // },
  delete: async function (request, response) {
    const { _id } = request.params;
    await Response.deleteOne({ _id: _id }).then(function () {
      response.redirect("/admin-console/admin-res")
    }).catch(function (error) {
      console.log(error)
    })
    // const foundRes = data.find(res => res._id === String(_id));
    // const index = data.indexOf(foundRes);
    // data.splice(index, 1);
    // response.redirect("/admin-console");
  }
}


