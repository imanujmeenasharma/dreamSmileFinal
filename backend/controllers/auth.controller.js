const adminModel = require("../models/admin.model")
const bcrypt = require('bcrypt')

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findAdmin = await adminModel.findOne({ email });
        if (!findAdmin) return res.status(401).send("Email or password is incorrect");

        const checkPassword = await bcrypt.compare(password, findAdmin.password);
        if (!checkPassword) return res.status(401).send("Email or password is incorrect");

        return res.status(200).send("Login Successful");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports.createadmin = async(req, res, next)=>{
    const {email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
        email,
        password: encryptedPassword
    });

    try {
        await newAdmin.save();
        return res.send("Admin created successfully");
    } catch (error) {
        return res.status(500).send("Error creating admin");
    }
}