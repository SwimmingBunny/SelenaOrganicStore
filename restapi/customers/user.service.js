const config = require("../config.json");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db_connection');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({
    username,
    password
}) {
    const user = await findUser(username);
    console.log(user)
    if (!user)
        throw 'Username is incorrect';

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword)
        throw 'Password is incorrect';

    // authentication successful
    const token = jwt.sign({
        sub: user.id
    }, config.secret, {
        expiresIn: '7d'
    });
    return {...omitHash(user), token };
};

const findUser = async (username) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM customers WHERE username = '${username}'`, (error, results) => {
            if (error) {
                return reject(error);
            }
            if (results.length === 0) return resolve(null);
            return resolve(results[0]);
        });
    });
};

async function getAll() {
    return await db.customers.findAll();
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    console.log("🚀 ~ file: user.service.js ~ line 54 ~ create ~ params", params)
    const checkUser = await findUser(params.username);
    // validate
    if (checkUser) {
        throw 'Username "' + params.username + '" is already taken';
    }

    if (params.password) {
        params.password = await bcrypt.hash(params.password, 6);
    }

    db.query("INSERT INTO customers SET ?", params, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(err, null);
            return;
        }

        console.log("created customer: ", params);
        //   result(null, params);
    });

}



async function update(id, params) {
    const user = await getUser(id);

    // validate
    const usernameChanged = params.username && user.username !== params.username;
    if (usernameChanged && await db.customers.findOne({
        where: {
            username: params.username
        }
    })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // copy params to user and save
    Object.assign(user, params);
    await user.save();

    return omitHash(user.get());
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

// helper functions

async function getUser(id) {
    const user = await findByPk(id);

    const findByPk = (id, result) => {
        db.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found customer: ", res[0]);
                result(null, res[0]);
                return;
            }
        })
    }
    if (!user) throw 'User not found';
    return user;
}

function omitHash(user) {
    const {
        hash,
        ...userWithoutHash
    } = user;
    return userWithoutHash;
}