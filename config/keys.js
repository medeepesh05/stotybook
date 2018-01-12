module.exports = {
    mongoURI : process.env.NODE_ENV == 'production' ? 'mongodb://dipu:dipu@ds249737.mlab.com:49737/storybooks_prod' : 'mongodb://localhost/storybooks-dev',
    googleClientID : '399945862566-idl0i6n59lpvia3kh1eerba82trq3f8c.apps.googleusercontent.com',
    googleClientSecret : '7jG1CRGejR_X0LnoeuCWKi9H'
}