const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        
        return next();
    }
    req.flash('error_msg', 'NO estas Autenticado');
    res.redirect('/users/signin');
}
module.exports = helpers;  