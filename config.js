module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || `mongodb://lavrenko_777:vitalik231@ds211289.mlab.com:11289/react-native-chat`,
  facebook: {
    clientID: '169230190394244',
    clientSecret: '46dcdae33520522b24242286e6df0218',
    callbackURL: 'https://limitless-gorge-54663.herokuapp.com/auth/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'picture', 'email']
  }
}
