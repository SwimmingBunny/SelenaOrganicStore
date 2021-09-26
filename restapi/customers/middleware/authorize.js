const jwt = require('express-jwt');
const { secret } = require('../../config.json');
const db = require('../../db_connection');
const userService = require('../user.service');

module.exports = authorize;

function authorize() {
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {
            // get user with id from token 'sub' (subject) property
            const user = await getById(req.user.sub);
            console.log("🚀 ~ file: authorize.js ~ line 19 ~ req.user.sub", req.user.sub)
                    
            function getById(req, res, next) {
                userService.getById(req.params.id)
                    .then(user => res.json(user))
                    .catch(next);
            }

            // check user still exists
            if (!user)
                return res.status(401).json({ message: 'Unauthorized' });

            // authorization successful
            req.user = user.get();
            next();
        }
    ];
}