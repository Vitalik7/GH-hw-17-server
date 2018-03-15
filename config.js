const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || `mongodb://heroku_t52hwv8w:u1t9i3f6m6soi4koqeg1mr1frb@ds239988.mlab.com:39988/heroku_t52hwv8w`,
  facebook: {
    clientID: '169230190394244',
    clientSecret: '46dcdae33520522b24242286e6df0218',
    callbackURL: 'https://limitless-gorge-54663.herokuapp.com/auth/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email']
  }
}
