const firebase = require('../config/firebase');

module.exports = {
    isAuthenticated: (req, res, next) => {
        const user = firebase.auth().currentUser;
        console.log(user);
        if (user !== null) {
            req.user = user;
        } else {
            res.redirect('/');
        }
    }
}