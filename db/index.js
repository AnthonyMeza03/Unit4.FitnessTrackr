module.exports = {
  // ...require('./client'), // adds key/values from users.js
  ...require('./users'), // adds key/values from users.js
  ...require('./activities'), // adds key/values from activite
  ...require('./routines'), // etc
  ...require('./routine_activities') // etc
}