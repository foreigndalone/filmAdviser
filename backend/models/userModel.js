const {db} = require('../config/db.js')
const bcrypt = require('bcrypt')

module.exports = {
    createUser: async(password, email)=>{
        const trx = await db.transaction()
        try{
            const hashPassword = await bcrypt.hash(password + '', 10)
            const [user] = await trx('users').insert({
                email: email.toLowerCase(),
                password: hashPassword
            }, ["id", "email"])
            await trx.commit()
            return user
        }catch(err){
            await trx.rollback()
            console.log(err)
            throw err
        }
    },
    
addUsersData: async (id, data) => {
    try {
        const [updatedUser] = await db("users")
            .where({ id })
            .update(data)
            .returning(["id", "email", "age", "gender", "favorite_genres", "favorite_year_from", "favorite_year_to"]);

        return updatedUser;
    } catch (err) {
        console.log("addUsersData error:", err);
        throw err;
    }
},

    getUserByMail: async(email)=>{
        try{
            const user = await db('users').select("id", "email", "password").where({email: email.toLowerCase()}).first()
            return user
        }catch(err){
            console.log(err)
            throw err
        }
    },
    getUsers: async()=>{
        try{
            const users = await db("users").select("id", "email")
            return users
        }catch(err){
            console.log(err)
            throw err
        }
    }
    
}