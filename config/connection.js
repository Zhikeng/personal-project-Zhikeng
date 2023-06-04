require('dotenv').config()

const mongoose = require('mongoose')

// old version 6
// mongoose.connect('mongodb://localhost:27017/carolsBookstore', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//   if(!err) {
//     console.log("Successful connection with MongoDB Server");  
//   }
//   else {
//       console.log("Error with MongoDB's connectivity");
//   }
// });

// new version 7
main().catch(err => console.log(err))

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/codesquadComics')
// }

async function main() {
  await mongoose.connect(process.env.DB_URL)
}