const knex = require('../db/connection');

exports.fetchAllUsers = () => {
    return knex
        .select('*')
        .from('users')
}

exports.fetchUserByUsername = (username) => {
    return knex
        .select(
            "username",
            "name",
            "avatar_url"
        )
        .from("users")
        .where("users.username", username)
        .then((usersArr) => {
            if (usersArr.length === 0) {
                return Promise.reject({ status: 404, msg: 'user not found'})
            } else {
                return usersArr[0]
            }
        })
};
