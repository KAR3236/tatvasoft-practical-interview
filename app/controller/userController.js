const bcrypt = require('bcrypt')
const db = require('../helper/db');
const { generateToken } = require('../helper/auth');
const userModel = db.userModel;
const salt = 10;

module.exports = {
    registrationController: async(req, res) => {
        try {
            const { email, password } = req.body;
            const userData = await userModel.findOne({
                where: {
                    email
                }
            });
            if (userData) {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "User already registered.",
                });
            }

            req.body.password = await bcrypt.hash(password, salt);

            const createUserData = await userModel.create(req.body);
            if (createUserData) {
                return res.status(201).json({
                    status: "success",
                    code: 201,
                    message: "User registered successfully.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
    loginController: async(req, res) => {
        try {
            const { email, password } = req.body;
            const userData = await userModel.findOne({
                where: {
                    email
                }
            });

            if (!userData) {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "User is not registered.",
                });
            }

            const comparedPassword = await bcrypt.compare(password, userData.password);
            if (comparedPassword) {
                const token = generateToken({id: userData.id, role: userData.role});
                return res.status(200).json({
                    status: "success",
                    code: 200,
                    message: "User login successfully.",
                    data: {
                        token
                    }
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "User password does not matched.",
                });
            }            
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    }
}