const basicAuth = require('express-basic-auth')

const BASIC_USERNAME = process.env.BASIC_USERNAME;
const BASIC_PASSWORD = process.env.BASIC_PASSWORD;

var myBasicAuth = basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    unauthorizedResponse: getUnauthorizedResponse
});

//Custom authorizer checking if the username starts with 'A' and the password with 'secret'
function myAuthorizer(username, password) {
    return BASIC_USERNAME === username && BASIC_PASSWORD === password
}

function getUnauthorizedResponse(req) {
    return req.auth ?
        ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') :
        'No credentials provided'
}

module.exports = myBasicAuth;